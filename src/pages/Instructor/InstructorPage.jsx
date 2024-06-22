import { createPortal } from "react-dom";
import CreateNewCourse from "../../components/Instructor/CreateCourse/CreateNewCourse";
import InstructorCourses from "../../components/Instructor/InstructorCourses";
import { useSelector } from "react-redux";
import Spinner from "../../shared/popup/Spinner";
import Toast from "../../shared/popup/Toast";

const newInstructorCourseId = document.getElementById(
  "new__instructor__course"
);

const popupsMessages = document.getElementById("popups");

const InstructorPage = () => {
  const openCloseModal = useSelector((state) => state.openClose);

  return (
    <>
      {createPortal(<Toast />, popupsMessages)}
      {createPortal(<Spinner />, popupsMessages)}

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
