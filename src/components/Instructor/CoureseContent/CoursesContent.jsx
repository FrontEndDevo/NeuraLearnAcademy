import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";
import { faGraduationCap, faPlus, faClock, faTrash, faPenToSquare, faFileAlt, faImage, faVideo } from "@fortawesome/free-solid-svg-icons";
import ebook from "../../../assets/images/Instructor/ebook.gif";
import plus from "../../../assets/images/Instructor/plus.png";
import summarizerImage from "../../../assets/images/homepage/ai-creative.png";
import robbotAssist from "../../../assets/images/Instructor/robootAssist.png";
import CreateNewSection from "../CreateSections/CreateNewSection";
import DeleteSection from "../CreateSections/DeleteSection";

const SectionHeader = ({ sectionTitle, onDelete }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    // Assuming setIsEditing is defined somewhere
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
        <button onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={handleOpenWriteSectionDetails}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={handleOpenCreateCourse}>
          <FontAwesomeIcon icon={faPlus} />
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
            {["Text", "Video", "Photo", "File"].map((type) => (
              <li className="relative" key={type}>
                <div className="relative focus-within:border-l-4 focus-within:border-l-sky-800">
                  <FontAwesomeIcon icon={type === "Video" ? faVideo : type === "Photo" ? faImage : faFileAlt} className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-black" />
                  <input
                    type="text"
                    placeholder={`${type} Name`}
                    className="w-full pl-10 pr-3 py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const NewSection = ({ sectionTitle, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setShowDeleteModal(false);
  };

  return (
    <div className="my-2">
      <SectionHeader sectionTitle={sectionTitle} onDelete={handleDelete} />
      <SectionContent />
      {showDeleteModal && (
        <DeleteSection onDelete={handleConfirmDelete} />
      )}
    </div>
  );
};

const CoursesContent = () => {
  const [newSections, setNewSections] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

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
                <
                  span>Summarizer</span>
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
