import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import CoursesContent from "../../components/Instructor/CoureseContent/CoursesContent";
import CreateNewSection from "../../components/Instructor/CreateSections/CreateNewSection";
import SectionInfo from "../../components/Instructor/CreateSections/SectionInfo";
import AddVideo from "../../components/Instructor/CreateSections/AddVideo";
import AddPhoto from "../../components/Instructor/CreateSections/AddPhoto";
import AddText from "../../components/Instructor/CreateSections/AddText";
import AddFile from "../../components/Instructor/CreateSections/AddFile";
import DeleteSection from "../../components/Instructor/CreateSections/DeleteSection";

const newInstructorCourseId = document.getElementById(
    "instructor__course__content"
);
const sectionInfo = document.getElementById(
    "section__info"
);
const addVideo = document.getElementById(
    "addvideo__modal"
);
const addphoto = document.getElementById(
    "addphoto__modal"
);
const addtext = document.getElementById(
    "addtext__modal"
);
const addfile = document.getElementById(
    "addfile__modal"
);
const deletesection = document.getElementById(
    "deletesection__modal"
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
            {modalName === "addvideo__modal" &&
                createPortal(<AddVideo />, addVideo)}
            
            {modalName === "addphoto__modal" &&
                createPortal(<AddPhoto />, addphoto)}
            {modalName === "addtext__modal" &&
                createPortal(<AddText />, addtext)}
            {modalName === "addfile__modal" &&
                createPortal(<AddFile />, addfile)}
            {modalName === "deletesection__modal" &&
                createPortal(<DeleteSection />, deletesection)}
        </>
    );
};

export default CoursesContentPage;
