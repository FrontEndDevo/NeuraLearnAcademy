import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faClock } from "@fortawesome/free-solid-svg-icons";
const CoursesContent = () => {
  return (
    <>
      <header className="p-10 bg-[#004682] text-white">
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
    </>
  );
};

export default CoursesContent;
