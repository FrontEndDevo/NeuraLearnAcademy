import { useDispatch } from "react-redux";
import { closeModal } from "../redux/slices/Instructor/OpenClose";

const BlurModal = () => {
  // Close the create course modal:
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <div
      onClick={handleCloseModal}
      className="fixed z-30 w-screen h-screen bg-white backdrop-blur-sm bg-opacity-10"
    ></div>
  );
};

export default BlurModal;
