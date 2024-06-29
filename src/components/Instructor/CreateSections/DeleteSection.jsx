import BlurModal from "../../../shared/BlurModal";
import deletesection from "../../../assets/images/Instructor/delete.png";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/slices/Instructor/OpenClose";
import PropTypes from "prop-types";

const DeleteSection = ({ onClose, onDelete }) => {
  const dispatch = useDispatch();

  const handleDeleteConfirm = () => {
    onDelete();
    dispatch(closeModal());
    onClose();
  };

  const handleCloseDeleteSection = () => {
    dispatch(closeModal());
    onClose();
  };

  return (
    <>
      <BlurModal />
      <div className=" lg:w-[50vw] w-[80vw] h-[50vh] overflow-y-scroll z-40 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
        <div className="flex justify-end p-3 ">
          <button
            onClick={handleCloseDeleteSection}
            className="p-1 text-base font-semibold tracking-tight duration-300 rounded-lg cursor-pointer md:p-2 bg-zinc-300 hover:bg-zinc-400"
          >
            Cancel
          </button>
        </div>
        <div className="px-4 py-6">
          <div className="relative mb-4">
            <div className="flex flex-col items-center justify-center w-full px-3">
              <div className="flex items-center justify-center ">
                <img
                  src={deletesection}
                  alt="Delete Icon"
                  className="w-24 h-24 mb-3"
                />
              </div>
              <div className="text-black text-[17px] font-semibold font-['Outfit']">
                Do you want to delete this section?
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-12">
            <button
              onClick={handleDeleteConfirm}
              className="opacity-90 text-white text-lg font-bold font-['Outfit'] tracking-wide py-2 bg-zinc-800 rounded-[25px] shadow px-2"
            >
              Yes
            </button>
            <button
              onClick={handleCloseDeleteSection}
              className="opacity-90 text-white text-lg font-bold font-['Outfit'] tracking-wide py-2 bg-zinc-800 rounded-[25px] shadow px-2"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

DeleteSection.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteSection;
