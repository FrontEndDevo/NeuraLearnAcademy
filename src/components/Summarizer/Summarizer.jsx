import { useState } from "react";
import sideBarImage from "../../assets/images/homepage/course_4.jpg";
import summarizerImage from "../../assets/images/homepage/ai-creative.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getTranscriptSection,
  summarize,
  createContent,
} from "../../redux/actions/courses-methods";

const Summarizer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const transcriptdata = useSelector((state) => state.courses.transcriptdate);
  const summarizeData = useSelector((state) => state.courses.summarizeData);
  const [modelInput, setModelInput] = useState();
  const [paragraphInput, setParagraphInput] = useState("");
  const [selectedSection, setSelectedSection] = useState(null);
  const sectionsData = useSelector((state) => state.courses.sectionsData);
  const [sectionData, setSectionData] = useState(sectionsData);
  const [slug, setSlug] = useState("");
  const dispatch = useDispatch();
  const access = useSelector((state) => state.userAuth.access);

  const handleSummarize = () => {
    summarize(dispatch, access, modelInput);
    setParagraphInput(summarizeData);
  };

  const handleSave = () => {
    const body = new FormData();
    body.append("title", "section Summarize");
    body.append("content", summarizeData);
    createContent(dispatch, access, body, slug, "text");
  };

  const handleSectionSelect = (slug, index) => {
    setSelectedSection(index);
    setSlug(slug);
    getTranscriptSection(dispatch, access, slug);
    setModelInput(transcriptdata);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`bg-neutral-100 text-white w-64 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col px-3 pt-10 pb-4">
          <img
            src={sideBarImage}
            alt="Logo"
            className="rounded-tl-md rounded-tr-md"
            loading="lazy"
          />
          <h2 className="py-1 font-bold text-black">Course Machine learning</h2>

          <div className="flex mb-3 text-sm font-medium tracking-tight text-black text-opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p>Last updated 2/7/2024</p>
          </div>
        </div>

        {sectionData.map((section, index) => (
          <div key={index} className="flex items-center px-4 pb-4">
            <h3 className="text-lg font-bold tracking-tight text-black">
              {section.title}
            </h3>

            <input
              type="radio"
              name="section"
              checked={selectedSection === index}
              onChange={() => handleSectionSelect(section.slug, index)}
              className="ml-2"
            />
          </div>
        ))}
      </div>

      <button
        className="fixed p-2 text-white bg-gray-800 rounded-md top-4 left-72"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"}
      </button>

      <div className="flex-1 p-4">
        <div className="flex items-center justify-center space-x-3">
          <img
            src={summarizerImage}
            alt="Logo"
            className="w-20 h-20"
            loading="lazy"
          />
          <div className="text-xl font-extrabold tracking-wider text-sky-800">
            Summarizer
          </div>
        </div>

        <div className="flex flex-col items-center justify-between px-4 py-2 bg-sky-800 md:flex-row md:px-0">
          <div className="flex mb-2 ml-0 space-x-4 md:ml-6 md:mb-0">
            <div className="font-semibold text-white">Model: Paragraph</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="relative w-full mb-4 md:w-1/2 md:mb-0">
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 h-64 md:h-96 overflow-auto outline-none"
              value={modelInput}
              onChange={(e) => setModelInput(e.target.value)}
              placeholder="Enter your model input"
            />
            <div className="absolute bottom-0 right-0 flex justify-between w-full px-2 mb-2">
              <button
                onClick={handleSummarize}
                className="px-2 py-1 font-bold text-white rounded-full bg-sky-800 hover:bg-sky-900"
              >
                Summarizer
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-1/2">
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 h-64 md:h-96 overflow-auto outline-none"
              value={paragraphInput}
              onChange={(e) => setParagraphInput(e.target.value)}
              placeholder="Enter your model input"
            />
            <div className="absolute bottom-0 flex justify-end w-full px-2 mb-2">
              <button
                onClick={handleSave}
                className="px-2 py-1 font-bold text-white rounded-full bg-sky-800 hover:bg-sky-900"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summarizer;
