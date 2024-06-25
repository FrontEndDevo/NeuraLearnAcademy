import failure from "../../../assets/images/Instructor/Failure.png";
import textPreview from "../../../assets/images/Instructor/textPreview.png";
import filePreview from "../../../assets/images/Instructor/filePreview.png";
import videoPreview from "../../../assets/images/Instructor/videoPreview.png";
import photoPreview from "../../../assets/images/Instructor/photoPreview.png";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import BlurModal from "../../../shared/BlurModal";
import contentInfo from "../../../assets/images/Instructor/info.png";
import addFile from "../../../assets/images/Instructor/addFile.png";
import addVideo from "../../../assets/images/Instructor/addVideo.png";
import addPhoto from "../../../assets/images/Instructor/addPhoto.png";
import list from "../../../assets/images/Instructor/list.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  createContent,
  updateLecture,
} from "../../../redux/actions/courses-methods";
import { setIsSpinnerLoading } from "../../../redux/slices/popups-slices/spinner-slice";

const SectionInfo = ({ onClose, slug, lecture }) => {
  const [selectedContent, setSelectedContent] = useState(null);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (lecture) {
      setTitle(renderTitle(lecture));

      const fileType = Object.keys(lecture)[0]; // Type.
      const fileContent = lecture[Object.keys(lecture)[0]].file;

      setSelectedContent({ type: fileType, content: fileContent });
    }
  }, [lecture]);

  const renderTitle = (item) => {
    if (item.video) return item.video.title;
    if (item.image) return item.image.title;
    if (item.file) return item.file.title;
    return "";
  };

  const renderUpdateLink = (lecture) => {
    if (lecture.file) return lecture.file.file;
    if (lecture.video) return lecture.video.file;
    if (lecture.image) return lecture.image.file;
    return "";
  };

  const access = useSelector((state) => state.userAuth.access);
  const handleCloseCreateCourse = () => {
    onClose();
  };

  const handleUploadContent = (type, content) => {
    const newContent = { type, content };
    setSelectedContent(newContent);
  };

  const handleDeleteContent = () => {
    setSelectedContent(null);
  };

  const handleSave = async () => {
    dispatch(setIsSpinnerLoading(true));

    if (selectedContent && !lecture) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", selectedContent.content);

      await createContent(
        dispatch,
        access,
        formData,
        slug,
        selectedContent.type
      );

      onClose();
      dispatch(setIsSpinnerLoading(false));

      return;
    }

    if (lecture) {
      const fileContent = lecture[Object.keys(lecture)[0]].file;

      const api = renderUpdateLink(lecture);

      if (fileContent === selectedContent.content) {
        const formData = new FormData();
        formData.append("title", title);

        await updateLecture(dispatch, access, formData, api);
      } else {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", selectedContent.content);

        await updateLecture(dispatch, access, formData, api);
      }

      onClose();
      dispatch(setIsSpinnerLoading(false));

      return;
    }
  };

  const renderPreview = (type) => {
    switch (type) {
      case "image":
        return photoPreview;
      case "video":
        return videoPreview;
      case "file":
        return filePreview;
      default:
        return textPreview;
    }
  };

  return (
    <>
      <BlurModal />
      <div className="lg:w-[50vw] w-[80vw] h-[50vh] lg:h-[70vh] overflow-y-scroll z-40 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <div className="flex justify-between items-center w-full px-4 py-4 bg-zinc-100 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[30px] rounded-br-[30px] border-b-[12px] border-sky-800">
          <div className="flex items-center gap-2 mx-auto">
            <h2 className="text-base font-extrabold lg:text-2xl text-indigo-950">
              Section Info
            </h2>
            <img
              src={contentInfo}
              className="w-9"
              alt="content info"
              loading="lazy"
            />
          </div>
          <button
            onClick={handleCloseCreateCourse}
            className="p-1 text-base font-semibold tracking-tight duration-300 rounded-lg md:p-2 bg-zinc-300 hover:bg-zinc-400"
          >
            Cancel
          </button>
        </div>
        <div className="px-2 py-4 md:px-4 md:mx-10">
          <form>
            <label className="text-black text-xl font-semibold font-['Open Sans']">
              Title:
            </label>
            <div className="flex items-center my-3 md:ml-4">
              <div className="flex justify-center items-center px-5 py-2.5 text-sm font-medium text-center bg-sky-800 text-white">
                Lecture
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  value={title}
                  id="title"
                  className="w-full h-full px-4 py-2 border border-black outline-none bg-zinc-100 border-opacity-80"
                  placeholder="write title of lecture"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>

          <h2 className="mt-12 mb-6 text-base font-semibold text-black">
            Select your type content:
          </h2>
          <div className="flex flex-col justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-3 lg:space-x-8">
            <UploadOption
              icon={addVideo}
              label="Video"
              onUpload={handleUploadContent}
            />
            <UploadOption
              icon={addPhoto}
              label="Photo"
              onUpload={handleUploadContent}
            />
            <UploadOption
              icon={addFile}
              label="File"
              onUpload={handleUploadContent}
            />
          </div>

          <div
            style={{ boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.10)" }}
            className="px-10 flex flex-col justify-center items-center mt-10 bg-white rounded-tl-[100px] rounded-tr-[100px] shadow"
          >
            <div className="flex">
              <img className="w-8" src={list} alt="list image" loading="lazy" />
              <h2 className="text-black text-[17px] font-semibold font-['Outfit'] my-5">
                Selected Content List
              </h2>
            </div>
            {!selectedContent ? (
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-20 my-2"
                  src={failure}
                  alt="failure image"
                  loading="lazy"
                />
                <h2 className="text-center opacity-40 text-lg font-semibold font-['Open Sans'] mb-10">
                  No content created
                </h2>
              </div>
            ) : (
              <div className="flex justify-between items-center space-x-12 px-2 mb-10 bg-zinc-100 py-3 rounded-[10px] backdrop-blur-sm">
                <div className="flex">
                  <img
                    src={renderPreview(selectedContent?.type)}
                    className="w-16"
                    alt={selectedContent?.type}
                  />
                  <p className="text-zinc-900 text-base font-medium font-['Outfit'] mt-2 ml-2">
                    {title}
                  </p>
                </div>
                <div className="">
                  <FontAwesomeIcon
                    className="w-10 text-red-600 cursor-pointer"
                    icon={faTrash}
                    onClick={() => handleDeleteContent()}
                  />
                </div>
              </div>
              // ))
            )}
          </div>

          <div className="flex justify-end mt-12">
            <button
              className="px-5 py-2 opacity-90 text-lg font-bold font-['Outfit'] tracking-wide text-white duration-700 bg-sky-900 hover:bg-sky-950 rounded-[25px] shadow"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const UploadOption = ({ icon, label, onUpload }) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const mimeType = file.type;
      let fileType = "file"; // Default type

      if (mimeType.startsWith("image/")) {
        fileType = "image";
      } else if (mimeType.startsWith("video/")) {
        fileType = "video";
      }

      onUpload(fileType, file);
    }
  };

  return (
    <div
      style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
      className="bg-white rounded-[10px] px-3 py-1 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer"
    >
      <form>
        <label
          htmlFor={`${label.toLowerCase()}Input`}
          className="bg-white rounded-[10px] px-3 py-2 md:px-7 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
        >
          <img
            src={icon}
            className="w-8 py-1"
            alt="plus image"
            loading="lazy"
          />
          <span>{label}</span>
          <input
            type="file"
            id={`${label.toLowerCase()}Input`}
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </form>
    </div>
  );
};

export default SectionInfo;
