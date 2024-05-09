import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faClock,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ebook from "../../../assets/images/Instructor/ebook.gif";
import plus from "../../../assets/images/Instructor/plus.png";
import summarizerImage from "../../../assets/images/homepage/ai-creative.png";
import robbotAssist from "../../../assets/images/Instructor/robootAssist.png";
const CoursesContent = () => {
    return (
        <>
            <header className="p-10  bg-[#004682] text-white">
                <h1 className="text-2xl font-bold">Course Machine learning</h1>
                <p>Course Machine learning this the best course.</p>
                <p className="text-sm mt-4 mb-2">
                    <span>
                        {" "}
                        <FontAwesomeIcon icon={faGraduationCap} />0 Students
                    </span>
                </p>
                <p className="text-sm">
                    <span>
                        <FontAwesomeIcon icon={faClock} /> Last updated
                    </span>
                    <span>2/7/2024</span>
                </p>
            </header>

            <div className=" bg-white h-screen flex justify-around pt-10">
                <div className=" ">
                    <img className=" w-80" src={ebook} alt="ebook image" loading="lazy" />
                </div>

                <div className=" flex  space-x-3">
                    <div className=" text-xl">
                        <button className="bg-white rounded-[10px] shadow px-5 py-5 flex flex-col justify-center items-center opacity-90 text-sky-800  font-bold  tracking-wide cursor-pointer ">
                          <img src={plus} className="w-8 py-1.5" alt="plus image" loading="lazy" />
                            <span className="">New Sections</span>
                        </button>
                    </div>
                    <div className=" text-xl">
                        <button className="bg-white rounded-[10px] shadow px-5 py-5 flex flex-col justify-center items-center opacity-90 text-sky-800  font-bold  tracking-wide cursor-pointer ">
                            <img src={summarizerImage} className="w-8 py-1.5" alt="plus image" loading="lazy" />

                            <span className="">Summarizer</span>
                        </button>
                    </div>
                    <div className=" text-xl">
                        <button className="bg-white rounded-[10px] shadow px-5 py-5 flex flex-col justify-center items-center opacity-90 text-sky-800  font-bold  tracking-wide cursor-pointer ">
                            <img src={robbotAssist} className="w-8 py-1.5" alt="plus image" loading="lazy" />

                            <span className="">Questions</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesContent;
