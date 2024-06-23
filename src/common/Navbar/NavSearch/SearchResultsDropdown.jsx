import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchResultsDropdown = ({ results }) => {
  const coursesResults = results.slice(0, 10).map((course) => (
    <Link
      key={course.slug}
      to={course.slug}
      className="flex items-center gap-2 px-1 py-2 duration-200 rounded-b-md hover:bg-neutral-100"
    >
      <img src={course.image} alt={course.title} className="w-10 h-10 border" />
      <h4 className="text-sm">{course.title}</h4>
      <p className="ml-auto text-xs">{course.instructor}</p>
    </Link>
  ));

  return (
    <div
      className={`absolute w-full right-0 z-50 gap-2 duration-200 bg-white rounded-b-md shadow-lg mt-1 top-full ${
        results.length > 0
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      {coursesResults}
    </div>
  );
};

SearchResultsDropdown.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResultsDropdown;
