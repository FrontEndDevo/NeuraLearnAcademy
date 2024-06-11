import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import CoursesContent from "../../components/Instructor/CoureseContent/CoursesContent";
import SectionInfo from "../../components/Instructor/CreateSections/SectionInfo";

import DeleteSection from "../../components/Instructor/CreateSections/DeleteSection";
import CreateNewSection from './../../components/Instructor/CreateSections/CreateNewSection';


const sectionInfo = document.getElementById(
    "section__info"
);

const deletesection = document.getElementById(
    "deletesection__modal"
);
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
            {modalName === "sectioninfo" &&
                createPortal(<SectionInfo />, sectionInfo)}
      
            {modalName === "deletesection__modal" &&
                createPortal(<DeleteSection />, deletesection)}
        </>
    );
};

export default CoursesContentPage;
