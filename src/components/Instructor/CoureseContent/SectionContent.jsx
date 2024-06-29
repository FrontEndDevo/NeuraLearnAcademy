import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteSection from "../CreateSections/DeleteSection";
import { faFileAlt, faImage, faPenToSquare, faTrash, faVideo } from "@fortawesome/free-solid-svg-icons";
import RenderTitle from "./RenderTitle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteLecture, getContents } from "../../../redux/actions/courses-methods";
import { setIsSpinnerLoading } from "../../../redux/slices/popups-slices/spinner-slice";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";
import PropTypes from "prop-types";

const SectionContent = ({ dispatch, access, slug, onSelect }) => {
  const sectionData = useSelector(
    (state) => state.courses.getsectionContent[slug] || []
  );
  const [lectures, setLectures] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [lecture, setLecture] = useState(null);

  useEffect(() => {
    const fetchInstructorCoursesContents = async () => {
      dispatch(setIsSpinnerLoading(true));

      await getContents(dispatch, access, slug);

      dispatch(setIsSpinnerLoading(false));
    };
    fetchInstructorCoursesContents();
  }, [dispatch, access, slug]);

  useEffect(() => {
    if (sectionData !== lectures) {
      setLectures(sectionData);
    }
  }, []);

  const handleUpdateLecture = (lecture) => {
    dispatch(openModal({ modalName: "sectioninfo", lecture }));
  };

  const handleDeleteLecture = (lecture) => {
    setLecture(lecture);
    setShowDeleteModal(true);
  };

  const handleConfirmDeleteLecture = async () => {
    dispatch(setIsSpinnerLoading(true));

    const api = renderDeleteLink(lecture);

    await deleteLecture(dispatch, access, api); // Replace with actual action and slug

    setShowDeleteModal(false);

    setLecture(null);

    dispatch(setIsSpinnerLoading(false));
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setLecture(null);
  };

  const renderIcon = (type) => {
    switch (type) {
      case "video":
        return faVideo;
      case "image":
        return faImage;
      case "file":
        return faFileAlt;
      default:
        return faFileAlt;
    }
  };

  const renderDeleteLink = (lecture) => {
    if (lecture.file) return lecture.file.delete_url;
    if (lecture.video) return lecture.video.delete_url;
    if (lecture.image) return lecture.image.delete_url;
    return lecture.text.delete_url;
  };

  const handleClick = (item) => {
    if (item.video) {
      onSelect("video", item.video.file);
    } else if (item.image) {
      onSelect("image", item.image.file);
    } else if (item.text) {
      onSelect("text", item.text.content);
    } else {
      onSelect("file", item.file.file);
    }
  };

  return (
    <div className="w-full transition-all duration-300 ease-in-out">
      {lectures?.map((item, index) => (
        <div
          className="relative pt-2 bg-white shadow-lg cursor-pointer"
          key={index}
        >
          <ul className="space-y-1">
            {Object.keys(item).map((key) => (
              <li
                className="relative border-b border-b-sky-950 border-opacity-80"
                key={key}
              >
                <div className="flex justify-between">
                  <div
                    className="relative cursor-pointer pl-14"
                    onClick={() => handleClick(item)}
                  >
                    <FontAwesomeIcon
                      icon={renderIcon(key)}
                      className="absolute w-6 h-6 text-black transform -translate-y-1/2 left-3 top-1/2"
                    />
                    <div className="w-full py-2 focus:outline-none bg-white rounded-[1px] text-black/opacity-80 text-lg font-medium font-['Outfit']">
                      {RenderTitle(item)}
                    </div>
                  </div>
                  <div className="flex mr-2 space-x-3">
                    <button onClick={() => handleDeleteLecture(item)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    {!item.text && (
                      <button onClick={() => handleUpdateLecture(item)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {showDeleteModal && (
        <DeleteSection
          onDelete={handleConfirmDeleteLecture}
          onClose={handleCloseDeleteModal}
        />
      )}
    </div>
  );
};

SectionContent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  access: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SectionContent;