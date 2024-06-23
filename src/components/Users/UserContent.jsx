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
    getUserContents(dispatch, access, slug);
  }, [dispatch, access, slug]);

  useEffect(() => {
    if (sectionData !== lectures) {
      setLectures(sectionData);
    }
  }, [sectionData]);
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
  useEffect(() => {
    console.log(access);
    getUserSections(dispatch, access, slug.slug);
  }, []);

  const dispatch = useDispatch();
  const access = useSelector((state) => state.userAuth.access);
  const usercourse =
    useSelector((state) => state.courses.userSectionsData) || [];
  const slug = useParams();
  const [selectedContent, setSelectedContent] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [userSections, setUserSections] = useState(usercourse);
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const renderSelectedContent = () => {
    if (!selectedContent) return null;

    switch (selectedContent) {
      case "video":
        return (
          <VideoPlayer
            url="https://youtu.be/KgGbAgW8eTY?si=jYmT8-OIIwpMQrwN"
            onClose={() => setSelectedContent(null)}
          />
        );
      case "image":
        return (
          <ImageViewer
            url="https://s3-alpha-sig.figma.com/img/b610/7369/d235da6ab7b04799b66ba3229c018aac?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FYqZYP4T~CCo0FcXPF6fLG7CWkIzdWk5XbPIDFAnFNBUS3LZLdDB5qXDgNMHHn06z9tmSIINtDKo~ALCUUGtLs79VNiP9D3rYJDSSi~ZXBePi7kWicKZvrmWUFnxMfXkzRF8b-hmq5IGvnhAfkIF-yeIN4EyuQ7f3IOnxy5yhHGLPQvTvPzuJLjcQ8iCBlv6SYjTAgOeNlr01EMl2CB57G7ZunUHx1Ej3D8fr2vky9qCY~qVVW5li6InGrVEtni1s9yPtumdhTX6l7BiCBjrZAyl1i48QMaDXahPbPmmNhBKbOhhahbooR0S9L40Xv47ZpPTD8Mlpy7A7umVIUeiSA__"
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
                  onSelect={setSelectedContent}
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
