import {
    faArrowRight,
    faGraduationCap,
    faClock,
    faTrash,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    closeModal,
    openModal,
} from "../../../redux/slices/Instructor/OpenClose";
import failure from "../../../assets/images/Instructor/Failure.png";

import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import BlurModal from "../../../shared/BlurModal";
import contentInfo from "../../../assets/images/Instructor/info.png";
import addFile from "../../../assets/images/Instructor/addFile.png";
import addVideo from "../../../assets/images/Instructor/addVideo.png";
import addPhoto from "../../../assets/images/Instructor/addPhoto.png";
import addText from "../../../assets/images/Instructor/addText.png";
import list from "../../../assets/images/Instructor/list.png";
const SectionInfo = () => {
    const [missingError, setMissingError] = useState(false);
    // Input Refs:
    const titleRef = useRef("");
    // Close the create course modal:
    const dispatch = useDispatch();
    const handleCloseCreateCourse = () => {
        dispatch(closeModal());
    };

    const handleOpenCourseConetent = () => {
        // Open the create course modal:
        dispatch(openModal("sectioninfo"));
    };
    const handleEditing = () => {
        console.log("edited");
    };
    return (
        <>
            <BlurModal />

            <div className="lg:w-[50vw] w-[80vw] h-[50vh] lg:h-[70vh]   overflow-y-scroll z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
                <div className="flex justify-between items-center w-full px-4 py-4 bg-zinc-100 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[30px] rounded-br-[30px] border-b-[12px] border-sky-800">
                    <div className="flex items-center gap-2 mx-auto">
                        <h2 className="text-base font-extrabold lg:text-2xl text-indigo-950">
                            section Info
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
                        <div className="flex items-center md:ml-4 mt-3">
                            <div className="flex justify-center items-center px-3 py-2.5 text-sm font-medium text-center bg-sky-800 text-white">
                                Lecture
                            </div>
                            <div className="relative w-full flex items-center">
                                <input
                                    type="text"
                                    ref={titleRef}
                                    id="title"
                                    className="w-full placeholder:text-black placeholder:text-base placeholder:font-bold px-4 py-2 bg-zinc-100 h-full outline-none border border-black border-opacity-80 sm:w-[70%] md:w-[40%] "
                                    placeholder="Introduction"
                                />
                                <FontAwesomeIcon
                                    className="ml-2 text-sky-800 cursor-pointer text-xl sm:ml-4"
                                    icon={faPenToSquare}
                                    onClick={handleEditing}
                                />
                            </div>
                        </div>
                    </form>

                    <h2 className="text-black text-base font-semibold mt-12 mb-6">
                        Select your type content :
                    </h2>
                    <div className="flex flex-col justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-3 lg:space-x-8">
                        <div className="w-full md:w-auto">
                            <button
                                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                                className="bg-white rounded-[10px]   px-3 py-3 md:px-7 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
                            >
                                <img
                                    src={addVideo}
                                    className="w-8 py-1.5"
                                    alt="plus image"
                                    loading="lazy"
                                />
                                <span className="">Video</span>
                            </button>
                        </div>
                        <div className="w-full md:w-auto">
                            <button
                                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                                className="bg-white rounded-[10px] shadow  px-3 py-3 md:px-7 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
                            >
                                <img
                                    src={addPhoto}
                                    className="w-8 py-1.5"
                                    alt="plus image"
                                    loading="lazy"
                                />
                                <span className="">Photo</span>
                            </button>
                        </div>
                        <div className="w-full md:w-auto">
                            <button
                                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                                className="bg-white rounded-[10px] shadow  px-3 py-3 md:px-7 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
                            >
                                <img
                                    src={addText}
                                    className="w-8 py-1.5"
                                    alt="plus image"
                                    loading="lazy"
                                />
                                <span className="">Text</span>
                            </button>
                        </div>
                        <div className="w-full md:w-auto">
                            <button
                                style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
                                className="bg-white rounded-[10px] shadow  px-3 py-3 md:px-7 flex flex-col justify-center items-center opacity-90 text-[#004682] font-bold cursor-pointer w-full"
                            >
                                <img
                                    src={addFile}
                                    className="w-8 py-1.5"
                                    alt="plus image"
                                    loading="lazy"
                                />
                                <span className="">File</span>
                            </button>
                        </div>
                    </div>

                    <div style={{ boxShadow: '0px 2px 6px 4px rgba(0, 0, 0, 0.10)', }} className="px-10 flex flex-col justify-center items-center  mt-10 bg-white rounded-tl-[100px] rounded-tr-[100px] shadow">
                        <div className=" flex">
                            <img
                                className="w-8"
                                src={list}
                                alt="list image"
                                loading="lazy"
                            />
                            <h2 className="text-black text-[17px] font-semibold font-['Outfit'] my-5">
                                Selected  Content List
                            </h2>
                         
                        </div>
                        
                        <img
                            className="w-20 my-2"
                            src={failure}
                            alt="failure image"
                            loading="lazy"
                        />
                        <h2 className="text-center opacity-40 text-lg font-semibold font-['Open Sans'] mb-10">
                            No content created
                        </h2>
                    </div>

                    <div className="flex justify-end  mt-12">
                        <button
                            onClick={handleOpenCourseConetent}
                            className="px-5 py-2 opacity-90 text-lg font-bold font-['Outfit'] tracking-wide text-white duration-700  bg-sky-800 hover:bg-sky-950 rounded-[25px] shadow"
                        >
                            Next
                            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionInfo;
