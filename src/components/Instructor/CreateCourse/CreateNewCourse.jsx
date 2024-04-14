import {
  faCircleInfo,
  faEye,
  faTrashCan,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import thumbnail from "../../../assets/images/Instructor/thumbnail.webp";
import { allCategories } from "../../../pages/AllCoursesPage";
import Dropdown from "../../../shared/Dropdown";
const CreateNewCourse = () => {
  const handleSelectedCategory = (category) => {
    console.log(category);
  };

  // Classes for styling:
  const labelClasses = "block mb-1 text-base font-semibold";
  const inputClasses =
    "p-2 text-base rounded-sm w-full outline-none caret-indigo-800 border border-black border-opacity-80";
  return (
    <>
      <div className="fixed z-40 w-screen h-screen bg-white backdrop-blur-sm bg-opacity-20"></div>
      <div className="w-[50vw] h-[70vh] z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
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

          <button className="p-2 ml-auto text-base font-semibold tracking-tight duration-300 rounded-lg bg-zinc-300 hover:bg-zinc-400">
            Cancel
          </button>
        </div>

        <div className="grid grid-cols-2 gap-10 px-20 py-10">
          <div className="flex flex-col items-start justify-between">
            <div className="w-full">
              <img
                src={thumbnail}
                alt="course thumbnail"
                className="h-48 mx-auto w-80"
              />

              <div className="flex items-center justify-between mt-10">
                <div>
                  <label
                    htmlFor="thumbnail"
                    className="flex items-center gap-2 p-2 text-base font-semibold uppercase duration-300 border border-black rounded-lg cursor-pointer bg-zinc-300 hover:bg-zinc-400 border-opacity-80"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                    Upload Thumbnail
                  </label>
                  <input
                    type="file"
                    name="thumbnail"
                    id="thumbnail"
                    accept="image/*" // Accepts all image formats
                    className="hidden"
                  />
                </div>

                <div className="relative py-1 pl-10 pr-4 duration-300 rounded-full cursor-pointer bg-zinc-800 hover:bg-zinc-900">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="absolute top-0 p-2 bg-white rounded-full text-zinc-800 -left-1"
                  />
                  <span className="text-base font-semibold tracking-tight text-white">
                    Delete
                  </span>
                </div>
              </div>
            </div>

            <button className="px-6 py-2 text-lg font-semibold tracking-tight text-white duration-300 rounded-lg bg-stone-900 hover:bg-stone-800">
              Save
            </button>
          </div>

          <div>
            <div>
              <p>Category:</p>
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
                name="description"
                id="description"
                cols="30"
                rows="5"
                className={`${inputClasses}`}
              />
            </div>

            <div className="relative">
              <label htmlFor="price" className={labelClasses}>
                Price:
              </label>
              <span className="absolute text-2xl font-bold top-8 left-2">
                $
              </span>
              <input
                type="number"
                id="price"
                name="price"
                className={`${inputClasses} font-semibold pl-10`}
              />
              <p className="text-xs font-medium opacity-50">
                Note: Dealing only in US dollars
              </p>
            </div>

            <div className="relative py-1 pl-10 pr-4 mt-4 duration-300 rounded-full cursor-pointer w-fit bg-zinc-800 hover:bg-zinc-900">
              <FontAwesomeIcon
                icon={faEye}
                className="absolute top-0 p-2 bg-white rounded-full text-zinc-800 -left-1"
              />
              <span className="text-base font-semibold tracking-tight text-white">
                Visibility
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewCourse;
