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
    const handleSavingCourseInformation = () => {
        // Get the values from the input fields using useRef hooks:
        const title = titleRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        const price = +priceRef.current.value;

        if (!title || !price) {
            setMissingError(true);
        } else {
            // Do something with this course information like sending it to the server.
            console.log(
                `Title: ${title} Description: ${description} Price: ${price} Category: ${category} Thumbnail: ${thumbnail}`
            );
            // Close the modal:
            handleCloseCreateCourse();
        }
    };

    // Classes for styling:
    const labelClasses = "block mb-1 text-sm lg:text-base lg:font-semibold";
    const inputClasses =
        "p-2 text-base rounded-sm w-full mb-2 outline-none caret-indigo-800 border border-black border-opacity-80";
    return (
        <>
            <BlurModal />

            <div className="lg:w-[50vw] w-[95vw] h-[75vh] lg:h-[50vh]  z-50 bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl">
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


                <div className="   px-4 py-4 ">
                        <div>
                            <label htmlFor="title" className={labelClasses}>
                                Title:
                            </label>
                            <input
                                type="text"
                                ref={titleRef}
                                id="title"
                                name="title"
                                className={`${inputClasses} lg:font-bold`}
                            />
                        </div>
                    <div className="flex items-center gap-4 lg:items-end">
                        <button
                            onClick={handleSavingCourseInformation}
                            className={`px-6 py-2 text-lg font-semibold tracking-tight text-white duration-300 rounded-lg hover:animate-pulse ${missingError
                                ? "bg-red-900 hover:bg-red-800"
                                : "bg-stone-900 hover:bg-stone-800"
                                }`}
                        >
                            Save
                        </button>
                        {missingError && (
                            <span className="text-sm italic text-red-700 capitalize">
                                incomplete information
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateNewSection;
