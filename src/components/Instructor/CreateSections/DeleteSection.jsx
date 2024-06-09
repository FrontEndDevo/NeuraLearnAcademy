
import {
    closeModal,
    openModal,
} from "../../../redux/slices/Instructor/OpenCloseVideo";

import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import BlurModal from "../../../shared/BlurModal";
import contentInfo from "../../../assets/images/Instructor/info.png";
import deletesection from "../../../assets/images/Instructor/delete.png";

const DeleteSection = () => {
    // Input Refs:
    const videoRef = useRef(null);

    // Close the create course modal:
    const dispatch = useDispatch();
    const handleCloseCreateCourse = () => {
        dispatch(closeModal());
    };



    const handleUploadVideo = () => {
        // Click the file input when the "Upload" button is clicked
        videoRef.current.click();
        // Handle video upload logic here
        console.log("Uploading video...");
    };
    return (
        <>
            <BlurModal />
            <div className=" lg:w-[50vw] w-[80vw] h-[40vh]  overflow-y-scroll z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
          
                <button
                    onClick={handleCloseCreateCourse}
                    className=" absolute right-3 top-5 p-1 text-base font-semibold tracking-tight duration-300 rounded-lg md:p-2 bg-zinc-300 hover:bg-zinc-400"
                >
                    Cancel
                </button>
                <div className="px-4 py-6">
                    <div className="mb-4 relative">

                        <div className="w-full px-3 flex flex-col justify-center items-center">
                               
                                <div className="flex items-center justify-center ">
                                    <img src={deletesection} alt="Image" className="h-24 w-24 " />
                            </div>
                            <div className="text-black text-[17px] font-semibold font-['Outfit']">Do you went  Delete this Content ?</div>                            
                        </div>

                    </div>

                    <div className="flex justify-center space-x-12">
                        <button
                            onClick={handleUploadVideo}
                            className="opacity-90 text-white text-lg font-bold font-['Outfit'] tracking-wide  py-2 bg-zinc-800 rounded-[25px] shadow px-2"
                        >
                            No
                        </button>
                        <button
                            className="opacity-90 text-white text-lg font-bold font-['Outfit'] tracking-wide  py-2 bg-zinc-800 rounded-[25px] shadow px-2"
                        >
                            
                            yes
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteSection;
