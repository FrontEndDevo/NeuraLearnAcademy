import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faGraduationCap,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ebook from "../../../assets/images/Instructor/ebook.gif";
import plus from "../../../assets/images/Instructor/plus.png";
import summarizerImage from "../../../assets/images/homepage/ai-creative.png";
import robbotAssist from "../../../assets/images/Instructor/robootAssist.png";
import CreateNewSection from "../CreateSections/CreateNewSection";
import { Link, useParams } from "react-router-dom";
import {
  createSection,
  getCourseDetaile,
  getSections,
  updateSections,
} from "../../../redux/actions/courses-methods";
import VideoPlayer from "../../../shared/VideoPlayer";
import ImageViewer from "../../../shared/ImageViewer";
import { setIsSpinnerLoading } from "../../../redux/slices/popups-slices/spinner-slice";
import MarkdownRenderer from "../../../pages/Instructor/MarkdownRenderer";
import NewSection from "./NewSection";


const CoursesContent = () => {
  const sectionsData = useSelector((state) => state.courses.sectionsData);
  const courseDetaile = useSelector((state) => state.courses.courseDetaile);
  const [newSections, setNewSections] = useState(sectionsData || []);
  const [courseData, setCourseData] = useState(courseDetaile || []);
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
    dispatch(setIsSpinnerLoading(true));

    if (type === "update") {
      await updateSections(dispatch, access, title, description, slugSection);
    } else {
      await createSection(dispatch, access, title, description, slugSection);
    }

    await getSections(dispatch, access, slug);

    setShowModal(false);

    dispatch(setIsSpinnerLoading(false));
  };

  const handleDeleteSection = (index) => {
    setNewSections(newSections.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const fetchCourseSections = async () => {
      dispatch(setIsSpinnerLoading(true));

      await getSections(dispatch, access, slug);

      dispatch(setIsSpinnerLoading(false));
    };
    fetchCourseSections();
  }, [dispatch, access, slug]);

  useEffect(() => {
    setNewSections(sectionsData || []);
  }, [sectionsData]);

  useEffect(() => {
    getCourseDetaile(dispatch, access, slug);
  }, [dispatch, access, slug]);

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
      case "text":
        return (
          <MarkdownRenderer
            markdownData={selectedContentUrl}
            onClose={() => setSelectedContent(null)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header className="p-10 bg-[#004682] text-white mt-20">
        <h1 className="text-2xl font-bold">{courseData.title}</h1>
        <p>{courseData.overview}</p>
        <p className="mt-4 mb-2 text-sm">
          <span>
            <FontAwesomeIcon icon={faGraduationCap} /> 10 Students
          </span>
        </p>
        <p className="text-sm">
          <span>
            <FontAwesomeIcon icon={faClock} /> Last updated
          </span>
          <span> 24/6/2024</span>
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
              <Link
                to="/summarizer"
                state={{
                  courseData: courseData,
                }}
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
              </Link>
            </div>
            <div className="w-full md:w-auto">
              <Link
                to={"/questionqeneration"}
                state={{
                  courseData: courseData,
                }}
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
              </Link>
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
