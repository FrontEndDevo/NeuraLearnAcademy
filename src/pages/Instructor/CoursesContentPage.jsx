import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import CoursesContent from "../../components/Instructor/CoureseContent/CoursesContent";
import CreateNewSection from "../../components/Instructor/CreateSections/CreateNewSection";

const newInstructorCourseId = document.getElementById(
    "instructor__course__content"
);
const CoursesContentPage = () => {
    const modalName = useSelector((state) => state.openClose.modalName);
    return (
        <>
            <CoursesContent />
            {modalName === "createNewSection" &&
                createPortal(<CreateNewSection />, newInstructorCourseId)}
        </>
    );
};

export default CoursesContentPage;
