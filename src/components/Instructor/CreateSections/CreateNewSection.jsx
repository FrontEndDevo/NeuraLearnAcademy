import {
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closeModal } from "../../../redux/slices/Instructor/OpenClose";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import BlurModal from "../../../shared/BlurModal";

const CreateNewSection = () => {
    const [thumbnail, setThumbnail] = useState("");
    const [category, setCategory] = useState("all");
    const [missingError, setMissingError] = useState(false);
    // Input Refs:
    const titleRef = useRef("");
    const descriptionRef = useRef("");
    const priceRef = useRef(0);
    // Close the create course modal:
    const dispatch = useDispatch();
    const handleCloseCreateCourse = () => {
        dispatch(closeModal());
    };
    // Handle the saving of the course information:
    // const handleSavingCourseInformation = () => {
    //     // Get the values from the input fields using useRef hooks:
    //     const title = titleRef.current.value.trim();
    //     const description = descriptionRef.current.value.trim();
    //     const price = +priceRef.current.value;

    //     if (!title || !price) {
    //         setMissingError(true);
    //     } else {
    //         // Do something with this course information like sending it to the server.
    //         console.log(
    //             `Title: ${title} Description: ${description} Price: ${price} Category: ${category} Thumbnail: ${thumbnail}`
    //         );
    //         // Close the modal:
    //         handleCloseCreateCourse();
    //     }
    // };


    return (
        <>
            <BlurModal />

            <div className="lg:w-[50vw] w-[80vw] h-[50vh] lg:h-[45vh]  z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
                <div className="flex justify-between items-center w-full px-4 py-4 bg-zinc-100 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[30px] rounded-br-[30px] border-b-8 border-sky-800">
                    <div className="flex items-center gap-2 mx-auto">
                        <h2 className="text-base font-extrabold lg:text-2xl text-indigo-950">Content Info</h2>
                        <FontAwesomeIcon icon={faCircleInfo} className="text-blue-500 h-9 w-9" />
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
                        <label className="text-black text-xl font-semibold font-['Open Sans']">Title:</label>
                        <div className="flex items-center md:ml-4 mt-3">
                            <div className="flex justify-center items-center px-5 py-2.5 text-sm font-medium text-center bg-sky-800  text-white">
                                Lecture
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    ref={titleRef}
                                    id="title"
                                    className=" px-4 py-2 bg-zinc-100  h-full  rounded-sm w-full  outline-none  border border-black border-opacity-80"
                                    placeholder="Name anything"
                                />
                            </div>
                        </div>
                    </form>

                    <div className="flex justify-end mt-12">
                        <button
                            // onClick={handleSavingCourseInformation}
                            className="px-6 py-2 opacity-90 text-lg font-bold font-['Outfit'] tracking-wide text-white duration-300 hover:animate-pulse bg-sky-800 rounded-[25px] shadow"
                        >
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CreateNewSection;
