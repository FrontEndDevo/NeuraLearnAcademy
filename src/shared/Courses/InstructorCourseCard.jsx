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
import { formatNumbersInThousands } from "../../utils/Utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/Instructor/OpenClose";
const InstructorCourseCard = ({
  slug,
  image,
  title,
  subject,
  videos = 0,
  sections = 0,
  quizzes = 0,
  students = 0,
  price,
}) => {
  const courseTitle = title.length <= 50 ? title : title.slice(0, 50) + "...";

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
      className="flex flex-col flex-wrap items-center justify-center gap-2 text-center lg:flex-row"
    >
      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
      <span className="text-sm tracking-tight">
        {item.value} {item.title}
      </span>
    </div>
  ));

  return (
    <li className="duration-300 border shadow-lg cursor-pointer rounded-3xl hover:shadow-innerwhite">
      <Link to={`/CoursesContentPage/${slug}`}>
        <img
          src={image}
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

          <div className="grid grid-cols-3 gap-4">{courseProperties}</div>

          <h6 className="px-3 py-1 text-[10px] my-3 lg:text-base capitalize font-bold text-white rounded-full bg-secondary-900 w-fit">
            {subject}
          </h6>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm tracking-tight">
              <FontAwesomeIcon icon={faUserGraduate} />
              <p className="font-semibold">{numberOfStudents}</p>
              <span className="text-gray-400">({students}) Students</span>
            </div>
            <p className="text-base font-semibold">
              ${parseFloat(price).toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
      <div className="z-50 flex items-center justify-between mx-2 mt-1 mb-4 md:mt-4">
        <div className="relative flex items-center gap-2">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="absolute top-0 left-0 p-2 text-red-500 bg-white rounded-full md:p-3"
          />
          <button
            onClick={handleOpenCreateCourse}
            className="p-2 pl-12 text-sm font-semibold text-white duration-200 bg-red-500 rounded-full md:text-base hover:bg-red-700"
          >
            Delete
          </button>
        </div>

        <div className="relative flex items-center gap-2">
          <FontAwesomeIcon
            icon={faListUl}
            className="absolute top-0 left-0 p-2 bg-white rounded-full md:p-3 text-primary-500"
          />
          <button
            onClick={handleOpenCreateCourse}
            className="p-2 pl-12 text-sm font-semibold text-white duration-200 rounded-full bg-primary-500 md:text-base hover:bg-primary-700"
          >
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};

InstructorCourseCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string,
  videos: PropTypes.number,
  sections: PropTypes.number,
  quizzes: PropTypes.number,
  students: PropTypes.number,
};

export default InstructorCourseCard;
