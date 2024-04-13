import { faCheck, faPlus, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const createNewCourseBenefits = [
  "Start building your course.",
  "Set the price as appropriate.",
  "Add the appropriate description.",
  "Add models as you wish.",
];
const DefaultInstructorCourse = () => {
  return (
    <li className="px-4 py-12 duration-300 w-[25rem] h-[30rem] cursor-pointer border shadow-lg rounded-3xl">
      <div className="text-center">
        <FontAwesomeIcon icon={faTv} className="w-28 h-28 text-primary-500" />
        <h3 className="mt-2 text-xl font-bold text-indigo-950">
          Create a new course
        </h3>
      </div>

      <div className="my-4">
        {createNewCourseBenefits.map((benefit, i) => (
          <div key={i} className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-sm" />
            <p className="font-semibold text-indigo-950">{benefit}</p>
          </div>
        ))}
      </div>

      <div className="relative py-1 pl-10 pr-4 ml-auto rounded-full mt-[20%] bg-primary-500 w-fit">
        <FontAwesomeIcon
          icon={faPlus}
          className="absolute top-0 p-2 bg-white rounded-full -left-1 text-primary-500"
        />
        <span className="font-semibold text-white">Create</span>
      </div>
    </li>
  );
};

export default DefaultInstructorCourse;
