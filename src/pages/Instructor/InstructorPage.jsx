import InstructorCourses from "../../components/Instructor/InstructorCourses";
import InstructorSidebar from "../../components/Instructor/InstructorSideBar";

const InstructorPage = () => {
  return (
    <div className="flex">
      <InstructorSidebar />
      <InstructorCourses />
    </div>
  );
};

export default InstructorPage;
