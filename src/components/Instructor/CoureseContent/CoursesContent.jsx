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
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";

const SectionHeader = ({ sectionTitle, onDelete, onEdit }) => {
  const dispatch = useDispatch();
  const handleOpenCreateCourse = () => {
    // Open the create course modal:
    dispatch(openModal("createNewSection"));
  };
  return (
    <div className="bg-sky-800 px-4 py-3 md:px-7 md:py-3 flex justify-between">
      <input
        type="text"
        value={sectionTitle}
        onChange={onEdit}
        className="bg-sky-800 text-white  font-semibold focus:outline-none"
      />
      <div className="flex space-x-3 text-white">
        <button>
          <FontAwesomeIcon onClick={onDelete} icon={faTrash} />
        </button>
        <button onClick={onEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={handleOpenCreateCourse}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
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
  return (
    <div className="bg-zinc-100 border-l border-r border-b border-black/opacity-30 flex flex-col justify-center items-center">
      <img
        className="w-20 my-2"
        src={failure}
        alt="failure image"
        loading="lazy"
      />
      <h2 className="text-black/opacity-40 text-lg font-semibold mt-1 mb-2">
        No content created
      </h2>
    </div>
  );
};

const NewSection = ({ onDelete, onEdit }) => {
  const [sectionTitle, setSectionTitle] = useState("Section 1: Introduction");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="my-2">
      {isEditing ? (
        <SectionHeader
          sectionTitle={sectionTitle}
          onDelete={onDelete}
          onEdit={handleSave}
        />
      ) : (
        <SectionHeader
          sectionTitle={sectionTitle}
          onDelete={onDelete}
          onEdit={handleEdit}
        />
      )}
      {isEditing ? (
        <ul className="dropdown-list bg-white shadow-md rounded-md py-2 px-0 focus:outline-none">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <input
              type="text"
              className="bg-transparent focus:outline-none w-full"
              placeholder="Option 1"
            />
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <input
              type="text"
              className="bg-transparent focus:outline-none w-full"
              placeholder="Option 2"
            />
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <input
              type="text"
              className="bg-transparent focus:outline-none w-full"
              placeholder="Option 3"
            />
          </li>
        </ul>
      ) : (
        <SectionContent />
      )}
    </div>
  );
};
const CoursesContent = () => {
  const [newSections, setNewSections] = useState([
    <NewSection key={0} onDelete={() => handleDeleteSection(0)} />,
  ]);

  const handleNewSectionClick = () => {
    setNewSections([
      ...newSections,
      <NewSection
        key={newSections.length}
        onDelete={() => handleDeleteSection(newSections.length)}
      />,
    ]);
  };

  const handleDeleteSection = (index) => {
    setNewSections(newSections.filter((_, i) => i !== index));
  };

  return (
    // ... other JSX content
    <>
      <header className="p-10   bg-[#004682] text-white">
        <h1 className="text-2xl font-bold">Course Machine learning</h1>
        <p>Course Machine learning this the best course.</p>
        <p className="text-sm mt-4 mb-2">
          <span>
            {" "}
            <FontAwesomeIcon icon={faGraduationCap} />0 Students
          </span>
        </p>
        <p className="text-sm">
          <span>
            <FontAwesomeIcon icon={faClock} /> Last updated
          </span>
          <span>2/7/2024</span>
        </p>
      </header>

      <div className="bg-white  h-screen  flex flex-col md:flex-row md:space-x-3 lg:space-x-4 justify-around pt-10">
        <div className=" ">
          <img className=" w-80" src={ebook} alt="ebook image" loading="lazy" />
        </div>

        <div className="flex flex-col  md:justify-start md:items-start bg-white">
          <div className="flex flex-col md:flex-row md:space-x-3 gap-3 md:gap-0 lg:space-x-4 px-5 md:px-0">
            <div className="w-full md:w-auto">
              <button
                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                onClick={handleNewSectionClick}
                className="bg-white rounded-[10px] px-3 py-3 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
              >
                <img src={plus} className="w-8 py-1.5" alt="plus image" loading="lazy" />
                <span className="">New Sections</span>
              </button>
            </div>
            <div className="w-full md:w-auto">
              <button
                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                className="bg-white rounded-[10px] px-3 py-3 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
              >
                <img src={summarizerImage} className="w-8 py-1.5" alt="plus image" loading="lazy" />
                <span className="">Summarizer</span>
              </button>
            </div>
            <div className="w-full md:w-auto">
              <button
                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                className="bg-white rounded-[10px] px-5 py-3 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
              >
                <img src={robbotAssist} className="w-8 py-1.5" alt="plus image" loading="lazy" />
                <span className="">Questions</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full mt-4 px-4 md:px-0">
            {newSections.map((section, index) => (
              <div key={index}>{section}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesContent;
