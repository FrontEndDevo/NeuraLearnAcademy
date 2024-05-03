import PropTypes from "prop-types";
import {
  faDatabase,
  faListUl,
  faPenToSquare,
  faSheetPlastic,
  faUserGraduate,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatNumbersInThousands, formatUrlString } from "../../utils/Utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/Instructor/OpenClose";
const InstructorCourseCard = ({
  img,
  title,
  subject,
  videos,
  sections,
  quizzes,
  students,
  price,
}) => {
  const courseTitle = title.length <= 50 ? title : title.slice(0, 50) + "...";

  const formattedTitle = formatUrlString(title);

  const numberOfStudents = formatNumbersInThousands(students);

  const dispatch = useDispatch();
  const handleOpenCreateCourse = () => {
    // Open the create course modal:
    dispatch(openModal("createUserCourse"));
  };
  return (
    <li className="duration-300 w-[90vw] md:w-fit lg:w-[25rem] h-[40rem] border shadow-lg rounded-3xl hover:shadow-innerwhite">
      <img
        src={img}
        alt={title}
        className="w-full h-3/5 rounded-t-3xl"
        loading="lazy"
      />

      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="my-4 text-base font-semibold leading-6 tracking-wide lg:text-xl text-gray-color-700">
            {courseTitle}
          </h3>
          <div className="flex gap-1 p-2 cursor-pointer lg:hover:animate-pulse">
            {Array.from({ length: 3 }, (_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-gray-color-500"
              />
            ))}
          </div>
        </div>

        <div className="grid items-center grid-cols-3 justify-items-center">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <FontAwesomeIcon icon={faVideo} />
            <span className="text-sm tracking-tight">{videos} Videos</span>
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row">
            <FontAwesomeIcon icon={faDatabase} />
            <span className="text-sm tracking-tight ">{sections} Sections</span>
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row">
            <FontAwesomeIcon icon={faSheetPlastic} />
            <span className="text-sm tracking-tight ">{quizzes} Quizzes</span>
          </div>
        </div>

        <h6 className="px-3 py-1 text-[10px] my-3 lg:text-base capitalize font-bold text-white rounded-full bg-secondary-900 w-fit">
          {subject}
        </h6>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm tracking-tight">
            <FontAwesomeIcon icon={faUserGraduate} />
            <p className="font-semibold">{numberOfStudents}</p>
            <span className="text-gray-400">({students}) Students</span>
          </div>
          <p className="text-base font-semibold">${price}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mx-2 mt-1 mb-2 md:mt-4">
        <div className="relative flex items-center gap-2">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="absolute top-0 left-0 p-2 bg-white rounded-full md:p-3 text-primary-500"
          />
          <button
            onClick={handleOpenCreateCourse}
            className="p-2 pl-12 text-sm font-semibold text-white duration-200 rounded-full md:text-base bg-primary-500 hover:bg-primary-700"
          >
            Edit
          </button>
        </div>

        <div className="relative flex items-center gap-2">
          <FontAwesomeIcon
            icon={faListUl}
            className="absolute top-0 left-0 p-2 bg-white rounded-full md:p-3 text-primary-500"
          />
          <Link
            to={formattedTitle}
            className="p-2 pl-12 text-sm font-semibold text-white duration-200 rounded-full md:text-base bg-primary-500 hover:bg-primary-700"
          >
            Edit Sections
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between mx-2 mt-1 mb-2 md:mt-4">
        <div className="relative flex items-center gap-2">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="absolute top-0 left-0 p-2 bg-white rounded-full md:p-3 text-primary-500"
          />
          <button
            onClick={handleOpenCreateCourse}
            className="p-2 pl-12 text-sm font-semibold text-white duration-200 rounded-full md:text-base bg-primary-500 hover:bg-primary-700"
          >
            Edit
          </button>
        </div>

        <div className="relative flex items-center gap-2">
          <FontAwesomeIcon
            icon={faListUl}
            className="absolute top-0 left-0 p-2 bg-white rounded-full md:p-3 text-primary-500"
          />
          <Link
            to={formattedTitle}
            className="p-2 pl-12 text-sm font-semibold text-white duration-200 rounded-full md:text-base bg-primary-500 hover:bg-primary-700"
          >
            Edit Sections
          </Link>
        </div>
      </div>
    </li>
  );
};

InstructorCourseCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  videos: PropTypes.number.isRequired,
  sections: PropTypes.number.isRequired,
  quizzes: PropTypes.number.isRequired,
  students: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default InstructorCourseCard;
