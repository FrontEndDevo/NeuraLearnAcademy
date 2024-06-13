import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import CoursesContent from "../../components/Instructor/CoureseContent/CoursesContent";
import SectionInfo from "../../components/Instructor/CreateSections/SectionInfo";

import DeleteSection from "../../components/Instructor/CreateSections/DeleteSection";
import CreateNewSection from "./../../components/Instructor/CreateSections/CreateNewSection";
import { closeModal } from "../../redux/slices/Instructor/OpenClose";


const sectionInfo = document.getElementById("section__info");

const deletesection = document.getElementById("deletesection__modal");
const newInstructorCourseId = document.getElementById(
  "instructor__course__content"
);

const CoursesContentPage = () => {
const { modalName, slug } = useSelector((state) => state.openClose);
    const dispatch = useDispatch();
    const handleCloseModal = () => {
      dispatch(closeModal());
    };
  return (
    <>
      <CoursesContent />
      {modalName === "createNewSection" &&
        createPortal(
          <CreateNewSection onClose={handleCloseModal} />,
          newInstructorCourseId
        )}
      {modalName === "sectioninfo" &&
        createPortal(
          <SectionInfo onClose={handleCloseModal} slug={slug} />,
          sectionInfo
        )}
      {modalName === "deletesection__modal" &&
        createPortal(
          <DeleteSection onClose={handleCloseModal} />,
          deletesection
        )}
    </>
  );
};

export default CoursesContentPage;
