/* eslint-disable react/prop-types */
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/Instructor/OpenClose";
import BlurModal from "../../../shared/BlurModal";
const Failed = ({ error }) => {
  // Close the create course modal:
  const dispatch = useDispatch();

  const handleCloseFailedModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <BlurModal />

      <div className="p-10 text-white bg-[#ee5c4d] text-center z-50 md:w-1/2 xl:w-1/3 2xl:w-1/5 flex flex-col rounded border border-neutral-300 shadow items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleCloseFailedModal}
          className="absolute text-xl text-gray-200 duration-200 cursor-pointer top-4 right-4 hover:text-gray-400"
        />

        <h2 className="mb-6 text-3xl font-semibold">
          Oops! Something went wrong.
        </h2>
        <p className="my-2 text-lg font-semibold text-gray-200">
          {Array.isArray(error) ? error.join(", ") : error}
        </p>

        <FontAwesomeIcon
          icon={faCircleXmark}
          className="my-20 text-white text-9xl"
        />

        <button
          onClick={handleCloseFailedModal}
          className="py-2 mt-4 font-bold text-white capitalize duration-200 bg-[#a3352d] rounded-full outline-none md:mt-8 px-14 hover:bg-[#8a2820]"
        >
          Try Again
        </button>
      </div>
    </>
  );
};

export default Failed;
