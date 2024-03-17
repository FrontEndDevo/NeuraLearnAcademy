import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import SearchBar from "../../shared/SearchBar";
import Filters from "../../shared/Filters/AllFilters";
import Sort from "../../shared/Sort";
import PropTypes from "prop-types";
import { formatUrlString } from "../../utils/Utils";
import { useEffect, useState } from "react";
import Dropdown from "../../shared/Dropdown";

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
  const isMobile = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      isMobile[1](window.innerWidth < 768);
    });

    return () => {
      window.removeEventListener("resize", () => {
        isMobile[1](window.innerWidth < 768);
      });
    };
  }, [isMobile]);

  // Navigate to the selected category when receive the clicked option from Dropdown component.
  const navigate = useNavigate();
  const selectCategory = (option) => {
    const formattedCategoryForUrl = formatUrlString(option);

    navigate(formattedCategoryForUrl);
  };

  // Render the courses categories first.
  const renderedCoursesCategories = categories.map((cat, i) => {
    const formattedCategoryForUrl = formatUrlString(cat);

    return (
      <Link
        key={i}
        to={formattedCategoryForUrl}
        className={`px-4 py-2 -my-10 duration-200 hover:bg-primary-500 hover:text-white capitalize text-lg font-semibold ${
          cat.toLocaleLowerCase() == "all" ? "bg-primary-500 text-white" : ""
        }`}
      >
        {cat}
      </Link>
    );
  });

  return (
    <aside className="my-10">
      {!isMobile[0] && (
        <div className="border-b-2 border-gray-700">
          <Slider {...settings}>{renderedCoursesCategories}</Slider>
        </div>
      )}
      <div>
        <SearchBar />
        <div
          className={`grid ${
            isMobile[0] ? "grid-cols-2" : "grid-cols-1"
          } gap-4 items-center my-4 md:my-0`}
        >
          {isMobile[0] && (
            <Dropdown
              options={categories}
              label="all"
              getSelectedOption={selectCategory}
            />
          )}
          <Sort />
        </div>
        <Filters />
      </div>
    </aside>
  );
};

// Prop types for the CoursesCategories component from (ESLint).
CoursesCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CoursesCategories;
