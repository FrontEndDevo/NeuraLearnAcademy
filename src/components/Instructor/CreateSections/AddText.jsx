
import {
    closeModal,
    openModal,
} from "../../../redux/slices/Instructor/OpenCloseVideo";

import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import BlurModal from "../../../shared/BlurModal";
import contentInfo from "../../../assets/images/Instructor/info.png";
import addVideo from "../../../assets/images/Instructor/video.png";

const AddText = () => {
    // Input Refs:
    const videoRef = useRef(null);
    const textContentRef = useRef(null);

    const handleTextContentChange = () => {
        const textContent = textContentRef.current.value;
        // Handle the text content change here
        console.log("Text content:", textContent);
    };
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
            <div className="lg:w-[50vw] w-[80vw] h-[40vh]  overflow-y-scroll z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
                <div className="flex justify-between items-center w-full px-4 py-4 bg-zinc-100 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[30px] rounded-br-[30px] border-b-[12px] border-sky-800">
                    <div className="flex items-center gap-2 mx-auto">
                        <h2 className="text-base font-extrabold lg:text-2xl text-indigo-950">
                            content Info
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
                <div className="px-4 py-6">
                    <div className="mb-4 ">

                        <div className="w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500">
                            <div className="w-full cursor-pointer">
                                <input
                                    type="text"
                                    id="text-content"
                                    ref={textContentRef}
                                    className="w-full px-4 py-7 bg-zinc-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-base font-semibold font-['Open Sans'] tracking-wide"
                                    placeholder="Enter text content"
                                    onChange={handleTextContentChange}
                                />
                            </div>
                        </div>



                    </div>

                    <div className="flex justify-between">
                        <button
                            onClick={handleUploadVideo}
                            className="opacity-90 text-white text-lg font-bold font-['Outfit'] tracking-wide  py-2.5 bg-zinc-800 rounded-[25px] shadow px-5"
                        >
                            Upload
                        </button>
                        <button
                            className=" text-white py-2 px-4 hover:bg-sky-900 bg-sky-800 rounded-[25px] shadow  opacity-90  text-[22px] font-bold font-['Outfit'] tracking-wid"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddText;
