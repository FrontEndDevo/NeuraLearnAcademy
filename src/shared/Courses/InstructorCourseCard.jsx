import PropTypes from "prop-types";
import {
  faDatabase,
  faSheetPlastic,
  faUserGraduate,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatNumbersInThousands } from "../../utils/Utils";
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

  const numberOfStudents = formatNumbersInThousands(students);

  return (
    <li className="border shadow-lg rounded-3xl duration-300 hover:shadow-innerwhite">
      <img
        src={img}
        alt={title}
        className="w-[25rem] h-[15rem] rounded-t-3xl"
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

        <div className="grid grid-cols-3 justify-items-center items-center">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faVideo} />
            <span className="text-sm tracking-tight">{videos} Videos</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faDatabase} />
            <span className="text-sm tracking-tight ">{sections} Sections</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSheetPlastic} />
            <span className="text-sm tracking-tight ">{quizzes} Quizzes</span>
          </div>
        </div>

        <h6 className="px-3 py-1 text-[10px] my-3 lg:text-base capitalize font-bold text-white rounded-full bg-secondary-900 w-fit">
          {category}
        </h6>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 tracking-tight text-sm">
            <FontAwesomeIcon icon={faUserGraduate} />
            <p className="font-semibold">{numberOfStudents}</p>
            <span className="text-gray-400">({students}) Students</span>
          </div>
          <p className="text-base font-semibold">${price.toFixed(2)}</p>
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
