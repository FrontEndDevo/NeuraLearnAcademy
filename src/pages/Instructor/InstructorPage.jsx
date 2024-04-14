import { createPortal } from "react-dom";
import CreateNewCourse from "../../components/Instructor/CreateCourse/CreateNewCourse";
import InstructorCourses from "../../components/Instructor/InstructorCourses";
import { useSelector } from "react-redux";

const newInstructorCourseId = document.getElementById(
  "new__instructor__course"
);
const InstructorPage = () => {
  const isCreateCourseOpen = useSelector(
    (state) => state.openClose.openCloseCreateCourse
  );
  return (
    <>
      <InstructorCourses />
      {isCreateCourseOpen &&
        createPortal(<CreateNewCourse />, newInstructorCourseId)}
    </>
  );
};

export default InstructorPage;
