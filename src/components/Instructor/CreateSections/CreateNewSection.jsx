import { closeModal } from "../../../redux/slices/Instructor/OpenClose";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import BlurModal from "../../../shared/BlurModal";
import contentInfo from "../../../assets/images/Instructor/info.png";
import { useParams } from "react-router-dom";

const CreateNewSection = ({ onSave, onClose, section }) => {
  const [missingError, setMissingError] = useState(false);
  const titleRef = useRef("");
  const descRef = useRef("");
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    if (section) {
      titleRef.current.value = section.title;
      descRef.current.value = section.description;
    }
  }, [section]);

  const handleCloseCreateCourse = () => {
    dispatch(closeModal());
    if (onClose) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descRef.current.value;
    if (title && description) {
      if (section) {
        onSave(title, description, section.slug, "update");
      } else {
        onSave(title, description, slug, "create");
      }
      handleCloseCreateCourse();
    } else {
      setMissingError(true);
    }
  };

  return (
    <>
      <BlurModal />
      <div className="lg:w-[50vw] w-[80vw] h-[65vh] lg:h-[60vh] z-40 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <div className="flex justify-between items-center w-full px-4 py-4 bg-zinc-100 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[30px] rounded-br-[30px] border-b-[12px] border-sky-800">
          <div className="flex items-center gap-2 mx-auto">
            <h2 className="text-base font-extrabold lg:text-2xl text-indigo-950">
              Content Info
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
        <div className="px-2 py-4 md:px-4 md:mx-10 ">
          <form onSubmit={handleSubmit}>
            <label className="text-black text-xl font-semibold font-['Open Sans']">
              Title:
            </label>
            <div className="flex items-center my-3 md:ml-4">
              <div className="flex justify-center items-center px-5 py-2.5 text-sm font-medium text-center bg-sky-800  text-white">
                Section
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  ref={titleRef}
                  id="title"
                  className="w-full h-full px-4 py-2 border border-black outline-none bg-zinc-100 border-opacity-80"
                  placeholder="Write Title of section"
                />
              </div>
            </div>
            <label className="text-black text-xl font-semibold font-['Open Sans']">
              Description:
            </label>
            <div className="flex items-center mt-1 md:ml-4">
              <div className="flex justify-center items-center px-5 py-2.5 text-sm font-medium text-center bg-sky-800  text-white">
                Section
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  ref={descRef}
                  id="description"
                  className="w-full h-full px-4 py-2 border border-black outline-none bg-zinc-100 border-opacity-80"
                  placeholder="Write description of section"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-5 py-2 opacity-90 text-lg font-bold font-['Outfit'] tracking-wide text-white duration-700  bg-sky-800 hover:bg-sky-950 rounded-[25px] shadow">
                Save
              </button>
            </div>
          </form>
          {missingError && (
            <p className="text-red-500">Title and Description are required.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateNewSection;
