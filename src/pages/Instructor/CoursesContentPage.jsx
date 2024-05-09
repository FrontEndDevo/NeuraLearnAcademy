import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import CoursesContent from "../../components/Instructor/CoureseContent/CoursesContent";
import CreateNewSection from "../../components/Instructor/CreateSections/CreateNewSection";
import SectionInfo from "../../components/Instructor/CreateSections/SectionInfo";

const newInstructorCourseId = document.getElementById(
    "instructor__course__content"
);
const sectionInfo = document.getElementById(
    "section__info"
);
const CoursesContentPage = () => {
    const modalName = useSelector((state) => state.openClose.modalName);
    return (
        <>
            <CoursesContent />
            {modalName === "createNewSection" &&
                createPortal(<CreateNewSection />, newInstructorCourseId)}
            {modalName === "sectioninfo" &&
                createPortal(<SectionInfo />, sectionInfo)}
        </>
    );
};

export default CoursesContentPage;
