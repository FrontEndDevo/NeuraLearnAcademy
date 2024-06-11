import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faClock,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import ebook from "../../../assets/images/Instructor/ebook.gif";
import plus from "../../../assets/images/Instructor/plus.png";
import summarizerImage from "../../../assets/images/homepage/ai-creative.png";
import robbotAssist from "../../../assets/images/Instructor/robootAssist.png";
import failure from "../../../assets/images/Instructor/Failure.png";
import CreateNewSection from "../CreateSections/CreateNewSection";
import { useDispatch } from "react-redux";
import DeleteSection from "../CreateSections/DeleteSection";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";

const SectionHeader = ({ sectionTitle, onDelete }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    // Assuming setIsEditing is defined somewhere, but it seems to be missing in the given code
    setIsEditing(true);
  };

  const handleOpenCreateCourse = () => {
    dispatch(openModal("sectioninfo"));
  };

  const handleOpenWriteSectionDetails = () => {
    dispatch(openModal("createNewSection"));
  };

  return (
    <div className="bg-sky-950 px-4 py-3 md:px-7 md:py-3 flex justify-between">
      <span className="text-white font-semibold cursor-pointer" onClick={handleEdit}>
        {sectionTitle}
      </span>
      <div className="flex space-x-3 text-white">
        <button>
          <FontAwesomeIcon onClick={onDelete} icon={faTrash} />
        </button>
        <button onClick={handleOpenWriteSectionDetails}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={handleOpenCreateCourse}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
const SectionContent = () => {
  const [lectures, setLectures] = useState([{ title: "lecture1" }]);

  return (
    <div className="w-full">
      {lectures.map((ele) => (
        <div className="relative bg-white shadow-lg p-4 mt-2" key={ele.title}>
          <ul className="space-y-1">
            <li className="relative">
              <div className="relative focus-within:border-l-4 focus-within:border-l-sky-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Text Name"
                  className="w-full pl-10 pr-3 py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']"
                />
              </div>
            </li>
            <li className="relative">
              <div className="relative focus-within:border-l-4 focus-within:border-l-sky-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Video Name"
                  className="w-full pl-10 pr-3 py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']"
                />
              </div>
            </li>
            <li className="relative">
              <div className="relative focus-within:border-l-4 focus-within:border-l-sky-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Photo Name"
                  className="w-full pl-10 pr-3 py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']"
                />
              </div>
            </li>
            <li className="relative">
              <div className="relative focus-within:border-l-4 focus-within:border-l-sky-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="File Name"
                  className="w-full pl-10 pr-3 py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']"
                />
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

const NewSection = ({ sectionTitle, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to manage the display of the delete modal

  const handleDelete = () => {
    setShowDeleteModal(true); // Show the delete modal when delete button is clicked
  };

  const handleConfirmDelete = () => {
    onDelete(); // Call the onDelete function passed from CoursesContent
    setShowDeleteModal(false); // Hide the delete modal after deletion
  };

  return (
    <div className="my-2">
      <SectionHeader sectionTitle={sectionTitle} onDelete={handleDelete} />
      <SectionContent />
      {showDeleteModal && (
        <DeleteSection onDelete={handleConfirmDelete} /> // Pass onDelete to DeleteSection
      )}
    </div>
  );
};

const CoursesContent = () => {
  const [newSections, setNewSections] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleNewSectionClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveSection = (sectionTitle) => {
    setNewSections([...newSections, { title: sectionTitle }]);
    setShowModal(false);
  };

  const handleDeleteSection = (index) => {
    setNewSections(newSections.filter((_, i) => i !== index));
  };

  return (
    <>
      <header className="p-10 bg-[#004682] text-white">
        <h1 className="text-2xl font-bold">Course Machine Learning</h1>
        <p>Course Machine learning this the best course.</p>
        <p className="text-sm mt-4 mb-2">
          <span>
            <FontAwesomeIcon icon={faGraduationCap} /> 0 Students
          </span>
        </p>
        <p className="text-sm">
          <span>
            <FontAwesomeIcon icon={faClock} /> Last updated
          </span>
          <span> 2/7/2024</span>
        </p>
      </header>

      <div className="bg-white pb-32 flex flex-col md:flex-row md:space-x-3 lg:space-x-4 justify-around pt-10">
        <div className="flex justify-center md:flex-col md:justify-start">
          <img className="w-80" src={ebook} alt="ebook image" loading="lazy" />
        </div>
        <div className="flex flex-col md:justify-start md:items-start bg-white">
          <div className="flex flex-col md:flex-row md:space-x-3 gap-3 md:gap-0 lg:space-x-4 px-5 md:px-0">
            <div className="w-full md:w-auto">
              <button
                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                onClick={handleNewSectionClick}
                className="bg-white rounded-[10px] px-3 py-3 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
              >
                <img
                  src={plus}
                  className="w-8 py-1.5"
                  alt="plus image"
                  loading="lazy"
                />
                <span>New Section</span>
              </button>
            </div>
            <div className="w-full md:w-auto">
              <button
                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                className="bg-white rounded-[10px] px-3 py-3 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
              >
                <img
                  src={summarizerImage}
                  className="w-8 py-1.5"
                  alt="summarizer image"
                  loading="lazy"
                />
                <span>Summarizer</span>
              </button>
            </div>
            <div className="w-full md:w-auto">
              <button
                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                className="bg-white rounded-[10px] px-5 py-3 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
              >
                <img
                  src={robbotAssist}
                  className="w-8 py-1.5"
                  alt="robbot assist image"
                  loading="lazy"
                />
                <span>Questions</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full mt-4 px-4 md:px-0">
            {showModal && (
              <CreateNewSection
                onSave={handleSaveSection}
                onClose={handleCloseModal}
              />
            )}
            {newSections.map((section, index) => (
              <NewSection
                key={index}
                sectionTitle={section.title}
                onDelete={() => handleDeleteSection(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesContent;
