/* eslint-disable react/prop-types */
import { faChartLine, faComputer } from "@fortawesome/free-solid-svg-icons";
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
        className="flex flex-col items-center justify-center w-full gap-2 my-4 cursor-pointer lg:my-10"
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
    <aside className="lg:mt-[25vh] grid grid-cols-2 md:grid-cols-1 overflow-hidden px-6 bg-white lg:px-10 lg:h-full lg:py-5 shadow-innerwhite lg:shadow-xl border-2 rounded-b-3xl md:rounded-br-3xl lg:rounded-r-3xl">
      {renderInstructorSidebarOptions}
    </aside>
  );
};

export default InstructorSidebar;
