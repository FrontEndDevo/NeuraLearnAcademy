import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/Instructor/OpenClose";
import BlurModal from "../../../shared/BlurModal";

const Failed = () => {
  // Close the create course modal:
  const dispatch = useDispatch();

  const handleCloseSuccessFailedModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <BlurModal />

      <div className="p-10 text-white bg-[#ee5c4d] text-center z-50 md:w-1/2 xl:w-1/3 2xl:w-1/5 flex flex-col rounded border border-neutral-300 shadow items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleCloseSuccessFailedModal}
          className="absolute text-gray-200 top-4 right-4 text-xl cursor-pointer duration-200 hover:text-gray-400"
        />

        <h2 className="text-3xl font-semibold mb-6">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-200 my-2">
          Your account has been created successfully.
        </p>

        <FontAwesomeIcon
          icon={faCircleXmark}
          className="text-9xl my-20 text-white"
        />

        <button
          onClick={handleCloseSuccessFailedModal}
          className="py-2 mt-4 font-bold text-white capitalize duration-200 bg-[#a3352d] rounded-full outline-none md:mt-8 px-14 hover:bg-[#8a2820]"
        >
          Try Again
        </button>
      </div>
    </>
  );
};

export default Failed;
