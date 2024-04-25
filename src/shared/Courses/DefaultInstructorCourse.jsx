import { faCheck, faPlus, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/Instructor/OpenClose";
const createNewCourseBenefits = [
  "Start building your course.",
  "Set the price as appropriate.",
  "Add the appropriate description.",
  "Add models as you wish.",
];
const DefaultInstructorCourse = React.memo(() => {
  const [isHovered, setIsHovered] = useState(false);

  const handleEnterCard = () => {
    setIsHovered(true);
  };

  const handleLeaveCard = () => {
    setIsHovered(false);
  };

  const dispatch = useDispatch();
  const handleOpenCreateCourse = () => {
    // Open the create course modal:
    dispatch(openModal("createUserCourse"));
  };

  return (
    <li
      onMouseEnter={handleEnterCard}
      onMouseLeave={handleLeaveCard}
      className="px-4 py-12 duration-200 select-none w-[25rem] h-[30rem] cursor-pointer border shadow-lg rounded-3xl"
      onClick={handleOpenCreateCourse}
    >
      <div className="text-center">
        <FontAwesomeIcon
          icon={faTv}
          className={`w-28 h-28 duration-200 ${
            isHovered
              ? "text-stone-700 translate-y-6"
              : "text-primary-500 translate-y-0"
          }`}
        />
        <h3
          className={`mt-2 text-2xl font-extrabold text-indigo-950 duration-200 ${
            isHovered ? "opacity-0 select-none" : "opacity-100"
          }`}
        >
          Create a new course
        </h3>
      </div>

      {isHovered ? (
        <h4 className="px-6 text-2xl font-extrabold leading-tight text-center text-indigo-950">
          We wish you to build a useful and scientifically strong course for
          students
        </h4>
      ) : (
        <div className="my-4">
          {createNewCourseBenefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-sm" />
              <p className="font-semibold text-indigo-950">{benefit}</p>
            </div>
          ))}
        </div>
      )}

      <div
        className={`relative py-1 pl-10 pr-4 ml-auto duration-200 rounded-full mt-[20%] w-fit ${
          isHovered
            ? "bg-stone-700 -translate-y-2 -translate-x-2"
            : "bg-primary-500 translate-y-0 translate-x-0"
        }`}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className={`absolute top-0 p-2 bg-white rounded-full duration-200 -left-1 ${
            isHovered ? "text-stone-700" : "text-primary-500"
          }`}
        />
        <span className="font-semibold text-white">Create</span>
      </div>
    </li>
  );
});

DefaultInstructorCourse.displayName = "DefaultInstructorCourse";

export default DefaultInstructorCourse;
