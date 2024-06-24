import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ebook from "../../assets/images/Instructor/ebook.gif";
import {
  faGraduationCap,
  faClock,
  faFileAlt,
  faImage,
  faVideo,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import VideoPlayer from "../../shared/VideoPlayer";
import ImageViewer from "../../shared/ImageViewer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getUserContents,
  getUserSections,
} from "../../redux/actions/courses-methods";
import { setIsSpinnerLoading } from "../../redux/slices/popups-slices/spinner-slice";

const SectionHeader = ({ sectionTitle, onClick, isOpen }) => {
  return (
    <div
      className="flex items-center content-center justify-between cursor-pointer bg-sky-950"
      onClick={onClick}
    >
      <div className="flex justify-between w-full px-4 py-3 md:space-x-60 md:px-6">
        <div className="font-semibold text-white">{sectionTitle}</div>
        <div className="ml-2 text-white">
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </div>
      </div>
    </div>
  );
};

const SectionContent = ({ dispatch, access, slug, onSelect, isOpen }) => {
  const sectionData = useSelector(
    (state) => state.courses.getusersectionContent[slug] || []
  );
  const [lectures, setLectures] = useState([]);
  useEffect(() => {
    const fetchUserContents = async () => {
      if (!access) {
        return;
      }
      dispatch(setIsSpinnerLoading(true));

      await getUserContents(dispatch, access, slug);

      dispatch(setIsSpinnerLoading(false));
    };

    fetchUserContents();
  }, [dispatch, access, slug]);

  useEffect(() => {
    if (sectionData !== lectures) {
      setLectures(sectionData);
    }
  }, [sectionData, lectures]);

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
    return item.text.title;
  };

  const handleClick = (item) => {
    if (item.video) {
      onSelect("video", item.video.file);
    } else if (item.image) {
      onSelect("image", item.image.file);
    }
  };
  return (
    <div
      className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const UserContent = () => {
  const dispatch = useDispatch();
  const access = useSelector((state) => state.userAuth.access);
  const usercourse =
    useSelector((state) => state.courses.userSectionsData) || [];

  const slug = useParams();
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedContentUrl, setSelectedContentUrl] = useState("");
  const [openSection, setOpenSection] = useState(null);
  const [userSections, setUserSections] = useState(usercourse);

  useEffect(() => {
    const fetchUserSections = async () => {
      dispatch(setIsSpinnerLoading(true));

      await getUserSections(dispatch, access, slug.slug);

      dispatch(setIsSpinnerLoading(false));
    };
    fetchUserSections();
  }, [access, dispatch, slug.slug]);

  useEffect(() => {
    setUserSections(usercourse || []);
  }, []);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
  const handleSelectContent = (type, url) => {
    setSelectedContent(type);
    setSelectedContentUrl(url);
  };
  const renderSelectedContent = () => {
    if (!selectedContent) return null;
    console.log(selectedContent);
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
      <div className="relative flex flex-col justify-around pt-10 pb-32 bg-white md:flex-row md:space-x-3 lg:space-x-4">
        <div className="flex flex-col items-center relative h-[80vh] w-full md:w-3/5">
          {renderSelectedContent()}
          <img
            className="mt-4 w-96"
            src={ebook}
            alt="ebook image"
            loading="lazy"
          />
        </div>
        <div className="bg-white ">
          <div className="px-4 mt-4 ">
            {userSections.map((ele, index) => (
              <div key={index} className="mb-2">
                <SectionHeader
                  sectionTitle={ele.title}
                  onClick={() => toggleSection(index)}
                  isOpen={openSection === index}
                />
                <SectionContent
                  slug={ele.slug}
                  access={access}
                  dispatch={dispatch}
                  onSelect={handleSelectContent}
                  isOpen={openSection === index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserContent;
