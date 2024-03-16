import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import SearchBar from "../../shared/SearchBar";
import Filters from "../../shared/Filters/AllFilters";
import PropTypes from "prop-types";

// Slider settings.
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  swipeToSlide: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 3000,
  cssEase: "ease-in-out",
};
const CoursesCategories = ({ categories }) => {
  // Render the courses categories first.
  const renderedCoursesCategories = categories.map((cat, i) => (
    <Link
      key={i}
      to={cat.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-")}
      className={`px-4 py-2 -my-10 duration-200 hover:bg-primary-500 hover:text-white capitalize text-lg font-semibold ${
        cat.toLocaleLowerCase() == "all" ? "bg-primary-500 text-white" : ""
      }`}
    >
      {cat}
    </Link>
  ));
  return (
    <aside>
      <div className="border-b-2 border-gray-700">
        <Slider {...settings}>{renderedCoursesCategories}</Slider>
      </div>
      <SearchBar />
      <Filters />
    </aside>
  );
};

// Prop types for the CoursesCategories component from (ESLint).
CoursesCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CoursesCategories;
