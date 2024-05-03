import {
  faCircleInfo,
  faTrashCan,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultThumbnail from "../../../assets/images/Instructor/thumbnail.webp";
import Dropdown from "../../../shared/Dropdown";
import { closeModal } from "../../../redux/slices/Instructor/OpenClose";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import ImageFileUploader from "../../../shared/Inputs/ImageFileUploader";
import BlurModal from "../../../shared/BlurModal";
import {
  getSubjectCourses,
} from "../../../redux/actions/courses-methods";
import { createCourse } from "../../../backend/Requests";

const CreateNewCourse = () => {
  const [thumbnail, setThumbnail] = useState("");
  // const thumbnailRef = useRef();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [missingError, setMissingError] = useState(false);
  const access = useSelector((state) => state.userAuth.access);
  // Input Refs:
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef(0);
  const subject = useSelector((state) => state.courseData.subjectCourses);
  useEffect(() => {
    getSubjectCourses(dispatch, access);
  }, []);
  // Handle the selected category:
  const handleSelectedSubject = (selectedOption) => {
        const selectedSubject = subject.find(
          (item) => item.title === selectedOption
        );
        if (selectedSubject) {
          setSelectedCategoryId(selectedSubject.id);
        } else {
          console.error("Selected subject not found");
        }
  };

  // Handle the deletion of the thumbnail:
  const handleDeleteThumbnail = () => {
    setThumbnail("");
  };

  // Close the create course modal:
  const dispatch = useDispatch();
  const handleCloseCreateCourse = () => {
    dispatch(closeModal());
  };

  // Handle the uploaded thumbnail and store it in the state:
  const handleUploadedThumbnail = (image) => {
    setThumbnail(image);
  };

  // Handle the saving of the course information:
  const handleSavingCourseInformation = () => {
    // Get the values from the input fields using useRef hooks:
    const title = titleRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const price = +priceRef.current.value;
    // const subject = 1;

    if (!title || !price) {
      setMissingError(true);
    } else {
      // Do something with this course information like sending it to the server.
      createCourse(
        access,
        selectedCategoryId,
        title,
        description,
        price,
        // thumbnailRef.current.files[0]
      );
      // Close the modal:
      handleCloseCreateCourse();
    }
  };

  // Classes for styling:
  const labelClasses = "block mb-1 text-sm lg:text-base lg:font-semibold";
  const inputClasses =
    "p-2 text-base rounded-sm w-full mb-2 outline-none caret-indigo-800 border border-black border-opacity-80";
  return (
    <>
      <BlurModal />

      <div className="lg:w-[70vw] w-[95vw] h-[75vh] lg:h-[70vh] overflow-y-scroll lg:overflow-y-hidden z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <div className="flex items-center w-full px-4 py-4 bg-green-400 rounded-t-lg">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-extrabold lg:text-2xl text-indigo-950">
              Course Info
            </h2>
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-blue-500 h-9 w-9"
            />
          </div>

          <button
            onClick={handleCloseCreateCourse}
            className="p-1 ml-auto text-base font-semibold tracking-tight duration-300 rounded-lg md:p-2 bg-zinc-300 hover:bg-zinc-400"
          >
            Cancel
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 py-4 lg:gap-10 lg:py-10 lg:px-20 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-between gap-6">
            <div className="w-full md:flex md:items-center md:justify-between lg:block">
              <img
                src={thumbnail ? thumbnail : defaultThumbnail}
                alt="course thumbnail"
                className="h-48 mx-auto border border-black border-opacity-50 w-80 lg:w-3/4"
              />

              <div className="flex flex-wrap items-center justify-center gap-4 mt-4 lg:mt-10 lg:justify-between">
                <div>
                  <label
                    htmlFor="thumbnail"
                    className="flex items-center gap-2 p-2 text-base font-semibold uppercase duration-300 border border-black rounded-lg cursor-pointer bg-zinc-300 hover:bg-zinc-400 border-opacity-80"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    Upload Thumbnail
                  </label>
                  <ImageFileUploader
                    name="thumbnail"
                    getImage={handleUploadedThumbnail}
                  />
                  {/* <input type="file" ref={thumbnailRef} /> */}
                </div>

                <div
                  onClick={handleDeleteThumbnail}
                  className={`relative py-1 px-4 duration-300 rounded-full cursor-pointer ${
                    thumbnail
                      ? "bg-red-800 hover:bg-red-900 pr-10"
                      : "bg-zinc-800 hover:bg-zinc-900 pl-10"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className={`absolute duration-300 top-0 p-2 bg-white rounded-full ${
                      thumbnail
                        ? "text-red-800 left-3/4"
                        : "text-zinc-800 -left-1"
                    }`}
                  />
                  <span className="text-base font-semibold tracking-tight text-white">
                    Delete
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:items-end">
              <button
                onClick={handleSavingCourseInformation}
                className={`px-6 py-2 text-lg font-semibold tracking-tight text-white duration-300 rounded-lg hover:animate-pulse ${
                  missingError
                    ? "bg-red-900 hover:bg-red-800"
                    : "bg-stone-900 hover:bg-stone-800"
                }`}
              >
                Save
              </button>
              {missingError && (
                <span className="text-sm italic text-red-700 capitalize">
                  incomplete information
                </span>
              )}
            </div>
          </div>

          <div>
            <div>
              <p className={`${labelClasses} -mb-2`}>Category:</p>
              {subject && (
                <Dropdown
                  options={subject.map((item) => item.title)}
                  getSelectedOption={handleSelectedSubject}
                  label="Select a subject"
                />
              )}
            </div>

            <div>
              <label htmlFor="title" className={labelClasses}>
                Title:
              </label>
              <input
                type="text"
                ref={titleRef}
                id="title"
                name="title"
                className={`${inputClasses} lg:font-bold`}
              />
            </div>

            <div>
              <label htmlFor="description" className={labelClasses}>
                Description:
              </label>
              <textarea
                ref={descriptionRef}
                name="description"
                id="description"
                cols="30"
                rows="5"
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div className="relative">
              <label htmlFor="price" className={labelClasses}>
                Price:
              </label>
              <span className="absolute text-2xl font-bold select-none top-7 lg:top-8 left-2">
                $
              </span>
              <input
                type="number"
                ref={priceRef}
                id="price"
                name="price"
                min={0}
                className={`${inputClasses} font-semibold pl-6`}
              />
              <p className="text-xs font-medium opacity-50 lg:mt-2">
                Note: Dealing only in US dollars
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewCourse;
