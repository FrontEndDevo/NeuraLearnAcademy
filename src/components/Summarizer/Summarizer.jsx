import { useState, useEffect } from "react";
import sideBarImage from "../../assets/images/homepage/course_4.jpg";
import summarizerImage from "../../assets/images/homepage/ai-creative.png";
import { faTrashAlt, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  getTranscriptSection,
  summarize,
  createContent,
} from "../../redux/actions/courses-methods";

const Summarizer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isShort, setIsShort] = useState(true);
  const transcriptdate = useSelector((state) => state.courses.transcriptdate);
  const summarizeData = useSelector((state) => state.courses.summarizeData);
  const [modelInput, setModelInput] = useState(transcriptdate);
  const [paragraphInput, setParagraphInput] = useState("");
  const [selectedSection, setSelectedSection] = useState(null);
  const sectionsData = useSelector((state) => state.courses.sectionsData);
  const [sectionData, setSectionData] = useState(sectionsData);
  const [slug, setSlug] = useState("");
  const dispatch = useDispatch();
  const access = useSelector((state) => state.userAuth.access);

  useEffect(() => {
    setSectionData(sectionsData);
  }, [sectionsData]);

  const handleToggle = () => {
    setIsShort(!isShort);
  };

  const handleFileUpload = () => {
    console.log("File upload button clicked");
    // Add your file upload logic here
  };

  const handleSummarize = () => {
    console.log("Summarize button clicked");
    console.log(modelInput);
    summarize(dispatch, access, modelInput);
  };

  const handleSave = () => {
    console.log("Save button clicked");
    const body = new FormData();
    body.append("title", "section Summarize");
    body.append("file", summarizeData);
    createContent(dispatch, access, body, slug, "text");
  };

  const handleDelete = () => {
    console.log("Delete button clicked");
    // Add your delete logic here
  };

  const handleSectionSelect = (slug, index) => {
    setSelectedSection(index);
    setSlug(slug);
    console.log(`Section ${slug} selected`);
    getTranscriptSection(dispatch, access, slug);
  };

  return (
    <div className="flex h-screen">
     <div
        className={`bg-neutral-100 text-white w-64 h-96  fixed left-0 top-0 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Sidebar Header */}
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

        {/* Scrollable Sections List */}
        <div className=" overflow-y-auto h-3/4">
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
      </div>

      <button
        className="fixed p-2 text-white bg-gray-800 rounded-md top-4 left-72 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"}
      </button>

      <div className="flex-1 ml-64 p-4">
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
            <div className="font-semibold text-white">Model:</div>
            <div className="font-semibold text-white">Paragraph</div>
          </div>

          <div className="flex items-center justify-center mr-0 md:mr-7">
            <div className="mr-3 font-semibold text-white md:ml-2 xl:ml-0">
              Summary Length:
            </div>
            <div className="flex items-center space-x-7">
              <label className="relative inline-block w-10 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-0 h-0 opacity-0"
                  checked={!isShort}
                  onChange={handleToggle}
                />
                <span className="absolute top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-full transition-all duration-300 before:absolute before:content-[''] before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all before:duration-300 before:ease-in-out" />
              </label>
              <span
                className={`ml-2 ${isShort ? "text-white" : "text-blue-500"}`}
              >
                {isShort ? "Short" : "Long"}
              </span>
              <FontAwesomeIcon
                onClick={handleDelete}
                icon={faTrashAlt}
                className="text-white transition duration-700 cursor-pointer hover:text-slate-300"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="relative w-full mb-4 md:w-1/2 md:mb-0">
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 h-64 md:h-96 overflow-auto"
              value={modelInput}
              onChange={(e) => setModelInput(e.target.value)}
              placeholder="Enter your model input"
            />
            <div className="absolute bottom-0 right-0 flex justify-between w-full px-2 mb-2">
              <button
                onClick={handleFileUpload}
                className="px-2 py-1 font-bold text-black"
              >
                <FontAwesomeIcon icon={faUpload} className="mr-3" />
                Upload Doc
              </button>
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
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 h-64 md:h-96 overflow-auto"
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
