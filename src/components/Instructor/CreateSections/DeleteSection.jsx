import React from "react";
import BlurModal from "../../../shared/BlurModal";
import deletesection from "../../../assets/images/Instructor/delete.png";
import { useDispatch } from "react-redux";
import {
  closeModal,
  openModal,
} from "../../../redux/slices/Instructor/OpenClose";

const DeleteSection = ({ onClose, onDelete, sectionTitle }) => {
    const dispatch = useDispatch();

    const handleDeleteConfirm = () => {
        onDelete(sectionTitle); // Call the onDelete function passed from the parent component
        dispatch(closeModal()); // Close the modal after deletion
        onClose(); // Close the delete modal
    };
    const handleCloseDeleteSection = () => {
        dispatch(closeModal()); // Close the modal after deletion
        onClose(); 
    };
    return (
        <>
            <BlurModal />
            <div className=" lg:w-[50vw] w-[80vw] h-[35vh]  overflow-y-scroll z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
                
                <div className=" flex justify-end p-3">
                    <button
                        onClick={handleCloseDeleteSection}
                        className=" p-1 text-base font-semibold tracking-tight duration-300 rounded-lg md:p-2 bg-zinc-300 hover:bg-zinc-400 cursor-pointer"
                    >
                        Cancel
                    </button>
               </div>
                <div className="px-4 py-6">
                    <div className="mb-4 relative">
                        <div className="w-full px-3 flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center ">
                                <img src={deletesection} alt="Delete Icon" className="h-24 w-24 mb-3" />
                            </div>
                            <div className="text-black text-[17px]  font-semibold font-['Outfit']">
                                Do you want to delete this section?
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-12">
                        <button
                            onClick={handleDeleteConfirm}
                            className="opacity-90 text-white text-lg font-bold font-['Outfit'] tracking-wide  py-2 bg-zinc-800 rounded-[25px] shadow px-2"
                        >
                            Yes
                        </button>
                        <button
                            onClick={handleCloseDeleteSection}
                            className="opacity-90 text-white text-lg font-bold font-['Outfit'] tracking-wide  py-2 bg-zinc-800 rounded-[25px] shadow px-2"
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteSection;
