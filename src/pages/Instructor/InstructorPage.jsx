import { createPortal } from "react-dom";
import CreateNewCourse from "../../components/Instructor/CreateCourse/CreateNewCourse";
import InstructorCourses from "../../components/Instructor/InstructorCourses";

const newInstructorCourseId = document.getElementById(
  "new__instructor__course"
);
const InstructorPage = () => {
  return (
    <>
      <InstructorCourses />
      {createPortal(<CreateNewCourse />, newInstructorCourseId)}
    </>
  );
};

export default InstructorPage;
