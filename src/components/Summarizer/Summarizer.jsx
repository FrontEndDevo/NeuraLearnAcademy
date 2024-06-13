import React, { useState } from "react";
import sideBarImage from "../../assets/images/homepage/course_4.jpg";
import summarizerImage from "../../assets/images/homepage/ai-creative.png";
import { faTrashAlt, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Summarizer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isShort, setIsShort] = useState(true);
  const [modelInput, setModelInput] = useState("");
  const [paragraphInput, setParagraphInput] = useState("");
  const [selectedSection, setSelectedSection] = useState(null);

  const handleToggle = () => {
    setIsShort(!isShort);
  };

  const [sectionData, setSectionData] = useState([
    {
      title: "Section 1",
    },
    {
      title: "Section 2",
    },
  ]);

  const handleFileUpload = () => {
    console.log("File upload button clicked");
    // Add your file upload logic here
  };

  const handleSummarize = () => {
    console.log("Summarize button clicked");
    // Add your summarization logic here
  };

  const handleSave = () => {
    console.log("Save button clicked");
    // Add your save logic here
  };

  const handleDelete = () => {
    console.log("Delete button clicked");
    // Add your delete logic here
  };

  const handleSectionSelect = (index) => {
    setSelectedSection(index);
    console.log(`Section ${index + 1} selected`);
    // Add your section select logic here
  };

  return (
    <div className="flex h-screen">
      <div
        className={`bg-neutral-100 text-white w-64 transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="px-3 pt-10 pb-4 flex flex-col">
          <img
            src={sideBarImage}
            alt="Logo"
            className="rounded-tl-md rounded-tr-md"
            loading="lazy"
          />
          <h2 className="text-black font-bold py-1">Course Machine learning</h2>

          <div className="flex text-black text-opacity-70 text-sm font-medium tracking-tight mb-3">
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
          <div key={index} className="px-4 pb-4 flex items-center">
           
            <h3 className="text-black text-lg font-bold tracking-tight">
              {section.title}
            </h3>

            <input
              type="radio"
              name="section"
              checked={selectedSection === index}
              onChange={() => handleSectionSelect(index)}
              className="ml-2"
            />
          </div>
        ))}
      </div>

      <button
        className="fixed top-4 left-72 bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"}
      </button>

      <div className="flex-1 p-4">
        <div className="flex justify-center items-center space-x-3">
          <img
            src={summarizerImage}
            alt="Logo"
            className="w-20 h-20"
            loading="lazy"
          />
          <div className="text-sky-800 text-xl font-extrabold tracking-wider">
            Summarizer
          </div>
        </div>

        <div className="bg-sky-800 py-2 flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
          <div className="flex space-x-4 ml-0 md:ml-6 mb-2 md:mb-0">
            <div className="text-white font-semibold">Model:</div>
            <div className="text-white font-semibold">Paragraph</div>
          </div>

          <div className="flex justify-center items-center mr-0 md:mr-7">
            <div className="text-white font-semibold mr-3 md:ml-2 xl:ml-0">
              Summary Length:
            </div>
            <div className="flex items-center space-x-7">
              <label className="relative inline-block w-10 cursor-pointer">
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
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
                className="text-white cursor-pointer hover:text-slate-300 transition duration-700"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative mb-4 md:mb-0">
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 h-64 md:h-96 overflow-auto"
              value={modelInput}
              onChange={(e) => setModelInput(e.target.value)}
              placeholder="Enter your model input"
            />
            <div className="absolute bottom-0 right-0 flex justify-between w-full px-2 mb-2">
              <button
                onClick={handleFileUpload}
                className="text-black font-bold py-1 px-2"
              >
                <FontAwesomeIcon icon={faUpload} className="mr-3" />
                Upload Doc
              </button>
              <button
                onClick={handleSummarize}
                className="bg-sky-800 hover:bg-sky-900 text-white font-bold py-1 px-2 rounded-full"
              >
                Summarizer
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 h-64 md:h-96 overflow-auto"
              value={paragraphInput}
              onChange={(e) => setParagraphInput(e.target.value)}
              placeholder="Enter your model input"
            />
            <div className="absolute bottom-0 flex justify-end w-full px-2 mb-2">
              <button
                onClick={handleSave}
                className="bg-sky-800 hover:bg-sky-900 text-white font-bold py-1 px-2 rounded-full"
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
