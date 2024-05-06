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
  category,
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

  // Courses properties like videos, sections, and quizzes:
  const courseProperties = [
    { title: "Videos", icon: faVideo, value: videos },
    { title: "Sections", icon: faDatabase, value: sections },
    { title: "Quizzes", icon: faSheetPlastic, value: quizzes },
  ].map((item, i) => (
    <div
      key={i}
      className="flex flex-col items-center flex-wrap justify-center text-center gap-2 lg:flex-row"
    >
      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
      <span className="text-sm tracking-tight">
        {item.value} {item.title}
      </span>
    </div>
  ));

  return (
    <li className="duration-300 border shadow-lg rounded-3xl hover:shadow-innerwhite">
      <img
        src={img}
        alt={title}
        className="w-full h-60 rounded-t-3xl"
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

        <div className="grid gap-4 grid-cols-3">{courseProperties}</div>

        <h6 className="px-3 py-1 text-[10px] my-2 lg:text-base capitalize font-bold text-white rounded-full bg-secondary-900 text-center md:text-start md:w-fit">
          {category}
        </h6>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm tracking-tight">
            <FontAwesomeIcon icon={faUserGraduate} />
            <p className="font-semibold">{numberOfStudents}</p>
            <span className="text-gray-400">({students}) Students</span>
          </div>
          <p className="text-base font-semibold">${price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mx-2 mt-2 mb-4 md:mt-4 flex-wrap gap-4">
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
  category: PropTypes.string.isRequired,
  videos: PropTypes.number.isRequired,
  sections: PropTypes.number.isRequired,
  quizzes: PropTypes.number.isRequired,
  students: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default InstructorCourseCard;
