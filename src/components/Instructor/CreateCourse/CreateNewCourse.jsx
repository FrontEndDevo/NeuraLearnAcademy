import {
  faCircleInfo,
  faEye,
  faTrashCan,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultThumbnail from "../../../assets/images/Instructor/thumbnail.webp";
import { allCategories } from "../../../pages/AllCoursesPage";
import Dropdown from "../../../shared/Dropdown";
import { closeModal } from "../../../redux/slices/Instructor/OpenClose";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import ImageFileUploader from "../../../shared/Inputs/ImageFileUploader";
import BlurModal from "../../../shared/BlurModal";

const CreateNewCourse = () => {
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("all");
  const [visibility, setVisibility] = useState(true);
  const [missingError, setMissingError] = useState(false);

  // Input Refs:
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef(0);

  // Handle the selected category:
  const handleSelectedCategory = (category) => {
    setCategory(category);
  };

  // Handle the deletion of the thumbnail:
  const handleDeleteThumbnail = () => {
    setThumbnail("");
  };

  // Handle the visibility of the course:
  const handleCourseVisibility = () => {
    setVisibility((prev) => !prev);
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

    if (!title || !price) {
      setMissingError(true);
    } else {
      // Do something with this course information like sending it to the server.
      console.log(
        `Title: ${title} Description: ${description} Price: ${price} Category: ${category} Visibility: ${visibility} Thumbnail: ${thumbnail}`
      );
      // Close the modal:
      handleCloseCreateCourse();
    }
  };

  // Classes for styling:
  const labelClasses = "block mb-1 text-base font-semibold";
  const inputClasses =
    "p-2 text-base rounded-sm w-full mb-2 outline-none caret-indigo-800 border border-black border-opacity-80";
  return (
    <>
      <BlurModal />

      <div className="w-[50vw] h-[75vh] z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <div className="flex items-center w-full px-4 py-4 bg-green-400 rounded-t-lg">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-indigo-950">
              Course Info
            </h2>
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-blue-500 h-9 w-9"
            />
          </div>

          <button
            onClick={handleCloseCreateCourse}
            className="p-2 ml-auto text-base font-semibold tracking-tight duration-300 rounded-lg bg-zinc-300 hover:bg-zinc-400"
          >
            Cancel
          </button>
        </div>

        <div className="grid grid-cols-2 gap-10 px-20 py-10">
          <div className="flex flex-col items-start justify-between">
            <div className="w-full">
              <img
                src={thumbnail ? thumbnail : defaultThumbnail}
                alt="course thumbnail"
                className="h-48 mx-auto border border-black border-opacity-50 w-80"
              />

              <div className="flex flex-wrap items-center justify-between gap-4 mt-10">
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

            <div className="flex items-end gap-4">
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
              <Dropdown
                options={allCategories}
                getSelectedOption={handleSelectedCategory}
                label="Select an option"
              />
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
                className={`${inputClasses} font-bold`}
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
              <span className="absolute text-2xl font-bold select-none top-8 left-2">
                $
              </span>
              <input
                type="number"
                ref={priceRef}
                id="price"
                name="price"
                min={0}
                className={`${inputClasses} font-semibold pl-10`}
              />
              <p className="mt-2 text-xs font-medium opacity-50">
                Note: Dealing only in US dollars
              </p>
            </div>

            <div
              onClick={handleCourseVisibility}
              className={`relative py-1 px-4 mt-4 duration-300 rounded-full cursor-pointer w-fit ${
                visibility
                  ? "bg-sky-800 hover:bg-sky-900 pl-10"
                  : "bg-zinc-800 hover:bg-zinc-900 pr-10"
              }`}
            >
              <FontAwesomeIcon
                icon={faEye}
                className={`absolute top-0 p-2 duration-300 bg-white rounded-full text-zinc-800 hover:text-zinc-900 ${
                  visibility ? "-left-1" : "left-3/4"
                }`}
              />
              <span className="text-base font-semibold tracking-tight text-white select-none">
                {visibility ? "Visibility" : "Invisibility"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewCourse;
