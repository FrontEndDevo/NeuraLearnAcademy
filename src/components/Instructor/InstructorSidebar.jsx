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
  {
    icon: faFileSignature,
    name: "assignments",
  },
  { icon: faCommentDots, name: "chat" },
];
const InstructorSidebar = () => {
  const renderInstructorSidebarOptions = InstructorSidebarOptions.map(
    (option, index) => (
      <div
        key={index}
        className="flex items-center flex-col gap-2 justify-center w-full my-6 cursor-pointer"
      >
        <FontAwesomeIcon
          icon={option.icon}
          className="w-10 h-10 duration-200 hover:text-primary-500"
        />
        <h3 className="font-bold text-sm capitalize">{option.name}</h3>
      </div>
    )
  );

  return (
    <aside className="w-[10vw] overflow-hidden h-screen bg-white px-2 py-20 border-r-2 shadow-xl">
      {renderInstructorSidebarOptions}
    </aside>
  );
};

export default InstructorSidebar;
