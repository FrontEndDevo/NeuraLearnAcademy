import { useDispatch, useSelector } from "react-redux";
import { deleteSection } from "../../../redux/actions/courses-methods";
import { setIsSpinnerLoading } from "../../../redux/slices/popups-slices/spinner-slice";
import DeleteSection from "../CreateSections/DeleteSection";
import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import PropTypes from "prop-types";

const NewSection = ({ sectionTitle, onDelete, onEdit, slug, onSelect }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const access = useSelector((state) => state.userAuth.access);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setShowDeleteModal(true);
  };
  const handleConfirmDelete = async () => {
    dispatch(setIsSpinnerLoading(true));

    setShowDeleteModal(false);

    await deleteSection(dispatch, access, slug);

    onDelete();

    dispatch(setIsSpinnerLoading(false));
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-2">
      <SectionHeader
        sectionTitle={sectionTitle}
        onDelete={handleDelete}
        onEdit={onEdit}
        slug={slug}
        onToggle={handleToggle}
      />
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <SectionContent
          dispatch={dispatch}
          access={access}
          slug={slug}
          onSelect={onSelect}
        />
      </div>
      {showDeleteModal && (
        <DeleteSection
          onDelete={handleConfirmDelete}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

NewSection.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default NewSection;