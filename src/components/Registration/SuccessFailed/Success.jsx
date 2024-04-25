import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/Instructor/OpenClose";
import BlurModal from "../../../shared/BlurModal";

const Success = () => {
  // Close the create course modal:
  const dispatch = useDispatch();

  const handleCloseSuccessFailedModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <BlurModal />

      <div className="p-10 bg-white text-center z-50 md:w-1/2 xl:w-1/3 2xl:w-1/5 flex flex-col rounded border border-neutral-300 shadow items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleCloseSuccessFailedModal}
          className="absolute text-gray-500 top-4 right-4 text-xl cursor-pointer duration-200 hover:text-gray-700"
        />

        <h2 className="text-3xl text-neutral-900 font-semibold mb-6">
          Success!
        </h2>
        <p className="text-gray-500 my-2">
          Your account has been created successfully.
        </p>
        <p className="text-gray-500 my-2">
          please verify your email. We have sent you an activation link to your
          email.
        </p>

        <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-9xl my-20 text-green-500"
        />

        <button
          onClick={handleCloseSuccessFailedModal}
          className="py-2 mt-4 font-bold text-white capitalize duration-200 bg-green-500 rounded-full outline-none md:mt-8 px-14 hover:bg-green-700"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Success;
