import PropTypes from "prop-types";
import CourseItem from "./CourseItem";

const SearchResultsDropdown = ({ results }) => {
  const maxHeight = Math.min(results.length * 60, 288); // 60px per item, max height 288px (6 items)

  return (
    <div
      className={`absolute w-full right-0 z-40 gap-2 duration-200 bg-white rounded-b-md shadow-lg mt-1 top-full overflow-y-auto ${
        results.length > 0
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
      style={{ maxHeight: `${maxHeight}px` }}
    >
      {results.slice(0, 10).map((course) => (
        <CourseItem key={course.slug} course={course} />
      ))}
    </div>
  );
};

SearchResultsDropdown.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      instructor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchResultsDropdown;
