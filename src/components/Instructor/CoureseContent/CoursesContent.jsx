import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";
import {
  faGraduationCap,
  faPlus,
  faClock,
  faTrash,
  faPenToSquare,
  faFileAlt,
  faImage,
  faVideo,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import ebook from "../../../assets/images/Instructor/ebook.gif";
import plus from "../../../assets/images/Instructor/plus.png";
import summarizerImage from "../../../assets/images/homepage/ai-creative.png";
import robbotAssist from "../../../assets/images/Instructor/robootAssist.png";
import CreateNewSection from "../CreateSections/CreateNewSection";
import DeleteSection from "../CreateSections/DeleteSection";
import { useParams } from "react-router-dom";
import {
  createSection,
  deleteLecture,
  deleteSection,
  getContents,
  getSections,
  updateSections,
} from "../../../redux/actions/courses-methods";
import VideoPlayer from "../../../shared/VideoPlayer";
import ImageViewer from "../../../shared/ImageViewer";

import { setIsSpinnerLoading } from "../../../redux/slices/popups-slices/spinner-slice.js";
import { setToastMessage } from "../../../redux/slices/popups-slices/toasts-slice.js";

const SectionHeader = ({ sectionTitle, onDelete, onEdit, slug, onToggle }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // State for toggle

  const handleOpenCreateCourse = () => {
    dispatch(openModal({ modalName: "sectioninfo", slug }));
  };

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the state
    onToggle(); // Call the provided onToggle function
  };

  return (
    <div className="flex justify-between px-4 py-3 cursor-pointer bg-sky-950 md:px-7 md:py-3">
      <span className="font-semibold text-white">{sectionTitle}</span>
      <div className="flex space-x-3 text-white">
        {/* Arrow icon for toggle */}

        <button onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={onEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={handleOpenCreateCourse}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <FontAwesomeIcon
          className="mt-1"
          icon={isOpen ? faAngleUp : faAngleDown}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
};
const SectionContent = ({ dispatch, access, slug, onSelect }) => {
  const sectionData = useSelector(
    (state) => state.courses.getsectionContent[slug] || []
  );
  const [lectures, setLectures] = useState(sectionData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [lecture, setLecture] = useState(null);

  useEffect(() => {
    getContents(dispatch, access, slug);
  }, [dispatch, access, slug]);

  useEffect(() => {
    if (sectionData !== lectures) {
      setLectures(sectionData);
    }
  }, [sectionData]);

  const handleUpdateLecture = (lecture) => {
    dispatch(openModal({ modalName: "sectioninfo", lecture }));
  };

  const handleDeleteLecture = (lecture) => {
    setLecture(lecture);
    setShowDeleteModal(true);
  };

  const handleConfirmDeleteLecture = () => {
    const api = renderDeleteLink(lecture);
    deleteLecture(dispatch, access, api); // Replace with actual action and slug
    setShowDeleteModal(false);
    setLecture(null);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setLecture(null);
  };

  const renderIcon = (type) => {
    switch (type) {
      case "video":
        return faVideo;
      case "image":
        return faImage;
      case "file":
        return faFileAlt;
      default:
        return faFileAlt;
    }
  };

  const renderTitle = (item) => {
    if (item.video) return item.video.title;
    if (item.image) return item.image.title;
    if (item.file) return item.file.title;
    return "Unknown Title";
  };
  const renderDeleteLink = (lecture) => {
    if (lecture.file) return lecture.file.delete_url;
    if (lecture.video) return lecture.video.delete_url;
    if (lecture.image) return lecture.image.delete_url;
    return "Unknown Linke";
  };

  const handleClick = (item) => {
    if (item.video) {
      onSelect("video", item.video.file);
    } else if (item.image) {
      onSelect("image", item.image.file);
    }
  };

  return (
    <div className="w-full transition-all duration-300 ease-in-out">
      {lectures.map((item, index) => (
        <div
          className="relative pt-2 bg-white shadow-lg cursor-pointer"
          key={index}
        >
          <ul className="space-y-1">
            {Object.keys(item).map((key) => (
              <li
                className="relative border-b border-b-sky-950 border-opacity-80"
                key={key}
              >
                <div className="flex justify-between">
                  <div
                    className="relative cursor-pointer pl-14"
                    onClick={() => handleClick(item)}
                  >
                    <FontAwesomeIcon
                      icon={renderIcon(key)}
                      className="absolute w-6 h-6 text-black transform -translate-y-1/2 left-3 top-1/2"
                    />
                    <div className="w-full py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']">
                      {renderTitle(item)}
                    </div>
                  </div>
                  <div className="flex mr-2 space-x-3">
                    <button onClick={() => handleDeleteLecture(item)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button onClick={() => handleUpdateLecture(item)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {showDeleteModal && (
        <DeleteSection
          onDelete={handleConfirmDeleteLecture}
          onClose={handleCloseDeleteModal}
        />
      )}
    </div>
  );
};

const NewSection = ({ sectionTitle, onDelete, onEdit, slug, onSelect }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const access = useSelector((state) => state.userAuth.access);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setShowDeleteModal(true);
  };
  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    deleteSection(dispatch, access, slug);
    onDelete();
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-2">
      <SectionHeader
        sectionTitle={sectionTitle}
        onDelete={handleDelete}
        onEdit={onEdit}
        slug={slug}
        onToggle={handleToggle}
      />
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <SectionContent
          dispatch={dispatch}
          access={access}
          slug={slug}
          onSelect={onSelect}
        />
      </div>
      {showDeleteModal && (
        <DeleteSection
          onDelete={handleConfirmDelete}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

const CoursesContent = () => {
  const sectionsData = useSelector((state) => state.courses.sectionsData);
  const [newSections, setNewSections] = useState(sectionsData || []);
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedContentUrl, setSelectedContentUrl] = useState("");
  const dispatch = useDispatch();
  const { slug } = useParams();
  const access = useSelector((state) => state.userAuth.access);

  const handleNewSectionClick = () => {
    setSelectedSection(null); // Reset selected section for creating new
    setShowModal(true);
  };

  const handleEditSectionClick = (section) => {
    setSelectedSection(section); // Set selected section for editing
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveSection = async (title, description, slugSection, type) => {
    if (type === "update") {
      updateSections(dispatch, access, title, description, slugSection);
    } else {
      createSection(dispatch, access, title, description, slugSection);
    }
    getSections(dispatch, access, slug);
    setShowModal(false);

    try {
      // Show the spinner.
      dispatch(setIsSpinnerLoading(true));

      if (type === "update") {
        await updateSections(dispatch, access, title, description, slugSection);
      } else {
        await createSection(dispatch, access, title, description, slugSection);
      }
      await getSections(dispatch, access, slug);
      setShowModal(false);
    } catch (error) {
      // Show the error message to the user.
      dispatch(
        setToastMessage({
          message: "Something went wrong! Try again later.",
          type: "error",
        })
      );
    } finally {
      // Close the spinner.
      dispatch(setIsSpinnerLoading(false));
    }
  };

  const handleDeleteSection = (index) => {
    setNewSections(newSections.filter((_, i) => i !== index));
  };

  useEffect(() => {
    getSections(dispatch, access, slug);
  }, [dispatch, access, slug]);

  useEffect(() => {
    setNewSections(sectionsData || []);
  }, [sectionsData]);

  const handleSelectContent = (type, url) => {
    setSelectedContent(type);
    setSelectedContentUrl(url);
  };

  const renderSelectedContent = () => {
    if (!selectedContent) return null;
    switch (selectedContent) {
      case "video":
        return (
          <VideoPlayer
            url={selectedContentUrl}
            onClose={() => setSelectedContent(null)}
          />
        );
      case "image":
        return (
          <ImageViewer
            url={selectedContentUrl}
            onClose={() => setSelectedContent(null)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header className="p-10 bg-[#004682] text-white">
        <h1 className="text-2xl font-bold">Course Machine Learning</h1>
        <p>Course Machine learning this the best course.</p>
        <p className="mt-4 mb-2 text-sm">
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
      <div className="flex flex-col justify-around pt-10 pb-32 bg-white md:flex-row md:space-x-3 lg:space-x-4">
        <div className="flex flex-col items-center relative h-[80vh] w-full md:w-3/5">
          {renderSelectedContent()}
          <img
            className="mt-4 w-96"
            src={ebook}
            alt="ebook image"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col bg-white md:justify-start md:items-start">
          <div className="flex flex-col gap-3 px-5 md:flex-row md:space-x-3 md:gap-0 lg:space-x-4 md:px-0">
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
          <div className="flex flex-col w-full px-4 mt-4 md:px-0">
            {showModal && (
              <CreateNewSection
                onSave={handleSaveSection}
                onClose={handleCloseModal}
                section={selectedSection}
              />
            )}
            {newSections.map((section, index) => (
              <NewSection
                key={index}
                sectionTitle={section.title}
                slug={section.slug}
                onDelete={() => handleDeleteSection(index)}
                onEdit={() => handleEditSectionClick(section)}
                onSelect={handleSelectContent}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesContent;
