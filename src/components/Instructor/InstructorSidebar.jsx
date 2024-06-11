/* eslint-disable react/prop-types */
import {
  faChartLine,
  faCommentDots,
  faComputer,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InstructorSidebarOptions = [
  { icon: faComputer, name: "courses" },
  { icon: faChartLine, name: "activity" },
];
const InstructorSidebar = ({ selectedOption, getInstructorOption }) => {
  const clickInstructorOptionHandler = (opt) => {
    getInstructorOption(opt);
  };

  const renderInstructorSidebarOptions = InstructorSidebarOptions.map(
    (option, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center w-full gap-2 my-10 cursor-pointer"
        onClick={() => clickInstructorOptionHandler(option.name)}
      >
        <FontAwesomeIcon
          icon={option.icon}
          className={`w-10 h-10 duration-200 hover:text-primary-500 ${
            option.name === selectedOption ? "text-primary-500" : ""
          }`}
        />
        <h3 className="text-sm font-bold capitalize">{option.name}</h3>
      </div>
    )
  );

  return (
    <aside className="lg:mt-[25vh] mt-20 grid grid-cols-4 lg:grid-cols-1 overflow-hidden bg-white lg:px-12 lg:rounded-r-3xl lg:h-full lg:py-5 border-r-2 shadow-innerwhite lg:shadow-xl">
      {renderInstructorSidebarOptions}
    </aside>
  );
};

export default InstructorSidebar;
