import React, { useState } from "react";
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
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import VideoPlayer from "../../shared/VideoPlayer";
import ImageViewer from "../../shared/ImageViewer";

const SectionHeader = ({ sectionTitle, onClick, isOpen }) => {
  return (
    <div
      className="bg-sky-950 flex justify-between items-center content-center cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between md:space-x-60 w-full px-4 py-3 md:px-6">
        <div className="text-white font-semibold">{sectionTitle}</div>
        <div className="text-white ml-2">
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </div>
      </div>
    </div>
  );
};

const SectionContent = ({ onSelect, isOpen }) => {
  return (
    <div
      className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
    >
      <div className="relative bg-white shadow-lg">
        <ul className="space-y-1">
          <li
            className="relative cursor-pointer border-b border-opacity-80 hover:border-opacity-100 border-sky-950"
            onClick={() => onSelect("video")}
          >
            <div className="relative pl-14 flex items-center">
              <FontAwesomeIcon
                icon={faVideo}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-black"
              />
              <div className="w-full py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']">
                Video Name
              </div>
            </div>
          </li>

          <li className="relative border-b border-b-sky-950 border-opacity-80 hover:border-opacity-100">
            <div className="flex justify-between">
              <div
                onClick={() => onSelect("image")}
                className="relative cursor-pointer pl-14"
              >
                <FontAwesomeIcon
                  icon={faImage}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-black"
                />
                <div className="w-full py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']">
                  Photo Name
                </div>
              </div>
              <div className="cursor-pointer flex items-center">
                <a
                  href="https://s3-alpha-sig.figma.com/img/ce45/a896/d958cf406bb83c3c0a93e2f03fcb0bef?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jE9UayK3Gtw8ouo4YvhpYzud6lMCbs~-Kr678BXNCzxuCzXVWV36uf4VNryN5iXsilAN5pKSohlQ2~-mMpumkbTnziwjTtwY67XwZObM4CHZo0VySWGMoOO4AajM7uwu6vzQqkpbfQZMAGhF3vbFggUfX~IBBdLX3ANkUacFEU4PRdcg8N~0eIjXvwiHyFbmmggZUi1Z5TAiXWxVv33dJ4zLfd4l7WWyvVrQhMHBdEpOjikPRqyZj2rYRzCnsljA-FgwncUgR9TOxMlbAx-Qn7N~bO8OUQURbtpp1BfF5HcB1U8~2kHTceuAVo-LGQLEXY7aNCQaB2kRvBqGiyfuOg__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                  download
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                </a>
              </div>
            </div>
          </li>

          <li className="relative" onClick={() => onSelect("file")}>
            <div className="flex justify-between">
              <div className="relative cursor-pointer pl-14">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-black"
                />
                <div className="w-full py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']">
                  File Name
                </div>
              </div>
              <div className="cursor-pointer flex items-center">
                <a
                  href="https://s3-alpha-sig.figma.com/img/ce45/a896/d958cf406bb83c3c0a93e2f03fcb0bef?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jE9UayK3Gtw8ouo4YvhpYzud6lMCbs~-Kr678BXNCzxuCzXVWV36uf4VNryN5iXsilAN5pKSohlQ2~-mMpumkbTnziwjTtwY67XwZObM4CHZo0VySWGMoOO4AajM7uwu6vzQqkpbfQZMAGhF3vbFggUfX~IBBdLX3ANkUacFEU4PRdcg8N~0eIjXvwiHyFbmmggZUi1Z5TAiXWxVv33dJ4zLfd4l7WWyvVrQhMHBdEpOjikPRqyZj2rYRzCnsljA-FgwncUgR9TOxMlbAx-Qn7N~bO8OUQURbtpp1BfF5HcB1U8~2kHTceuAVo-LGQLEXY7aNCQaB2kRvBqGiyfuOg__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                  download
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const UserContent = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    { title: "section1" },
    // Add more sections if needed
  ];

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
      <div className="bg-white pb-32 flex flex-col md:flex-row md:space-x-3 lg:space-x-4 justify-around pt-10 relative">
        <div className="flex flex-col items-center relative h-[80vh] w-full md:w-3/5">
          {renderSelectedContent()}
          <img
            className="mt-4 w-96"
            src={ebook}
            alt="ebook image"
            loading="lazy"
          />
        </div>
        <div className=" bg-white">
          <div className=" mt-4 px-4 ">
            {sections.map((ele, index) => (
              <div key={index} className="mb-2">
                <SectionHeader
                  sectionTitle={ele.title}
                  onClick={() => toggleSection(index)}
                  isOpen={openSection === index}
                />
                <SectionContent
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
