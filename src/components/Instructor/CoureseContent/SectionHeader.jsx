import { faAngleDown, faAngleUp, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";
import PropTypes from "prop-types";

const SectionHeader = ({ sectionTitle, onDelete, onEdit, slug, onToggle }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCreateCourse = () => {
    dispatch(openModal({ modalName: "sectioninfo", slug }));
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(); 
  };

  return (
    <div className="flex justify-between px-4 py-3 bg-sky-950 md:px-7 md:py-3">
      <span className="font-semibold text-white">{sectionTitle}</span>
      <div className="flex space-x-3 text-white cursor-pointer">
        <button onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={onEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={handleOpenCreateCourse}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <FontAwesomeIcon
          className="mt-1"
          icon={isOpen ? faAngleUp : faAngleDown}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default SectionHeader;