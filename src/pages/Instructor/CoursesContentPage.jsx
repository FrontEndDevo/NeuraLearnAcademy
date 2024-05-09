import { createPortal } from "react-dom";
import CreateNewCourse from "../../components/Instructor/CreateCourse/CreateNewCourse";
import { useSelector } from "react-redux";
import CoursesContent from "../../components/Instructor/CoureseContent/CoursesContent";

const newInstructorCourseId = document.getElementById(
    "instructor__course__content"
);
const CoursesContentPage = () => {
    const modalName = useSelector((state) => state.openClose.modalName);
    return (
        <>
            <CoursesContent />
            {modalName === "createUserCourse" &&
                createPortal(<CreateNewCourse />, newInstructorCourseId)}
        </>
    );
};

export default CoursesContentPage;
