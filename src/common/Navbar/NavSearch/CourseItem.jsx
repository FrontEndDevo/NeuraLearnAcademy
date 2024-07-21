import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseItem = ({ course }) => (
  <Link
    key={course.slug}
    to={`/UserContentPage/${course.slug}`}
    className="flex items-center gap-2 px-1 py-2 duration-200 rounded-b-md hover:bg-neutral-100"
  >
    <img src={course.image} alt={course.title} className="w-10 h-10 border" />
    <h4 className="text-sm">{course.title}</h4>
    <p className="ml-auto text-xs">{course.instructor}</p>
  </Link>
);

CourseItem.propTypes = {
  course: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseItem;
