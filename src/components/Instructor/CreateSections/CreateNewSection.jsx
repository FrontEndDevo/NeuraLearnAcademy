import {
  closeModal,
  openModal,
} from "../../../redux/slices/Instructor/OpenClose";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import BlurModal from "../../../shared/BlurModal";
import contentInfo from "../../../assets/images/Instructor/info.png";

const CreateNewSection = ({ onSave, onClose }) => {
  const [missingError, setMissingError] = useState(false);
  const titleRef = useRef("");
  const descRef = useRef("");
  const dispatch = useDispatch();

  const handleCloseCreateCourse = () => {
    dispatch(closeModal());
    if (onClose) onClose();
  };

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descRef.current.value;
    if (title && description) {
      onSave(title, description);
      handleCloseCreateCourse();
    } else {
      setMissingError(true);
    }
  };

  return (
    <>
      <BlurModal />
      <div className="lg:w-[50vw] w-[80vw] h-[60vh] lg:h-[55vh] z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
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
        <div className="px-2 md:px-4 py-4 md:mx-10 ">
          <form>
            <label className="text-black text-xl font-semibold font-['Open Sans']">
              Title:
            </label>
            <div className="flex items-center md:ml-4 my-3">
              <div className="flex justify-center items-center px-5 py-2.5 text-sm font-medium text-center bg-sky-800  text-white">
                Section
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  ref={titleRef}
                  id="title"
                  className=" px-4 py-2 bg-zinc-100  h-full  w-full  outline-none  border border-black border-opacity-80"
                  placeholder="Name anything"
                />
              </div>
            </div>
            <label className="text-black text-xl font-semibold font-['Open Sans']">
              Description:
            </label>
            <div className="flex items-center md:ml-4 mt-1">
              <div className="flex justify-center items-center px-5 py-2.5 text-sm font-medium text-center bg-sky-800  text-white">
                Section
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  ref={descRef}
                  id="description"
                  className=" px-4 py-2 bg-zinc-100  h-full  w-full  outline-none  border border-black border-opacity-80"
                  placeholder="Name anything"
                />
              </div>
            </div>
          </form>
          {missingError && <p className="text-red-500">Title and Description are required.</p>}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="px-5 py-2 opacity-90 text-lg font-bold font-['Outfit'] tracking-wide text-white duration-700  bg-sky-800 hover:bg-sky-950 rounded-[25px] shadow"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewSection;
