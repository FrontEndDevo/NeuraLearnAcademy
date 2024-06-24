import { createPortal } from "react-dom";
import CreateNewCourse from "../../components/Instructor/CreateCourse/CreateNewCourse";
import InstructorCourses from "../../components/Instructor/InstructorCourses";
import { useSelector } from "react-redux";

const newInstructorCourseId = document.getElementById(
  "new__instructor__course"
);

const InstructorPage = () => {
  const openCloseModal = useSelector((state) => state.openClose);

  return (
    <>
      <InstructorCourses />

      {openCloseModal.modalName === "instructorCourse" &&
        createPortal(
          <CreateNewCourse
            instructorCourseDetails={
              openCloseModal.courseDetails ? openCloseModal.courseDetails : null
            }
          />,
          newInstructorCourseId
        )}
    </>
  );
};

export default InstructorPage;
