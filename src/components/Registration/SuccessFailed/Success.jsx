import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/Instructor/OpenClose";
import BlurModal from "../../../shared/BlurModal";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

const Success = ({ navigatePage = "/", message = "" }) => {
  // Close the create course modal:
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseSuccessModal = () => {
    dispatch(closeModal());
  };

  const handleRegistrationContinue = () => {
    dispatch(closeModal());
    navigate(navigatePage);
  };

  return (
    <>
      <BlurModal />

      <div className="fixed z-40 flex flex-col items-center p-10 text-center -translate-x-1/2 -translate-y-1/2 bg-white border rounded shadow md:w-1/2 xl:w-1/3 2xl:w-1/5 border-neutral-300 top-1/2 left-1/2">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleCloseSuccessModal}
          className="absolute text-xl text-gray-500 duration-200 cursor-pointer top-4 right-4 hover:text-gray-700"
        />

        <h2 className="mb-6 text-3xl font-semibold text-neutral-900">
          Success
        </h2>

        <p className="my-2 text-neutral-900">{message}</p>

        <FontAwesomeIcon
          icon={faCircleCheck}
          className="my-20 text-green-500 text-9xl"
        />

        <button
          onClick={handleRegistrationContinue}
          className="py-2 mt-4 font-bold text-white capitalize duration-200 bg-green-500 rounded-full outline-none md:mt-8 px-14 hover:bg-green-700"
        >
          Continue
        </button>
      </div>
    </>
  );
};

Success.propTypes = {
  navigatePage: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
};

export default Success;
