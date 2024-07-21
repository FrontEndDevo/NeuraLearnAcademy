import { faChartLine, faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const InstructorSidebarOptions = [
  { icon: faComputer, name: "courses" },
  { icon: faChartLine, name: "activity" },
];

const SidebarOption = ({ option, selectedOption, onClick }) => (
  <div
    className="flex flex-col items-center justify-center w-full gap-2 my-4 cursor-pointer lg:my-10"
    onClick={() => onClick(option.name)}
  >
    <FontAwesomeIcon
      icon={option.icon}
      className={`w-10 h-10 duration-200 hover:text-primary-500 ${
        option.name === selectedOption ? "text-primary-500" : ""
      }`}
    />
    <h3 className="text-sm font-bold capitalize">{option.name}</h3>
  </div>
);

SidebarOption.propTypes = {
  option: PropTypes.shape({
    icon: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const InstructorSidebar = ({ selectedOption, getInstructorOption }) => (
  <aside className="lg:mt-[25vh] grid grid-cols-2 md:grid-cols-1 overflow-hidden px-6 bg-white lg:px-10 lg:h-full lg:py-5 shadow-innerwhite lg:shadow-xl border-2 rounded-b-3xl md:rounded-br-3xl lg:rounded-r-3xl">
    {InstructorSidebarOptions.map((option, index) => (
      <SidebarOption
        key={index}
        option={option}
        selectedOption={selectedOption}
        onClick={getInstructorOption}
      />
    ))}
  </aside>
);

InstructorSidebar.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  getInstructorOption: PropTypes.func.isRequired,
};

export default InstructorSidebar;
