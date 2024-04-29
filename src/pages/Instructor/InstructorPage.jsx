import { createPortal } from "react-dom";
import CreateNewCourse from "../../components/Instructor/CreateCourse/CreateNewCourse";
import InstructorCourses from "../../components/Instructor/InstructorCourses";
import { useSelector } from "react-redux";

const newInstructorCourseId = document.getElementById(
  "new__instructor__course"
);
const InstructorPage = () => {
  const modalName = useSelector((state) => state.openClose.modalName);
  return (
    <>
      <InstructorCourses />
      {modalName === "createUserCourse" &&
        createPortal(<CreateNewCourse />, newInstructorCourseId)}
    </>
  );
};

export default InstructorPage;
