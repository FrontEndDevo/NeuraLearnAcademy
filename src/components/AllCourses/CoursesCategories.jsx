import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";

const allCategories = [
  "all",
  "programming",
  "development",
  "data science",
  "business",
  "marketing",
  "sales",
  "drawing",
  "photography",
  "category_1",
  "category_2",
  "category_3",
  "category_4",
];
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
const CoursesCategories = () => {
  // Render the courses categories first.
  const renderedCoursesCategories = allCategories.map((cat, i) => (
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
    </aside>
  );
};

export default CoursesCategories;
