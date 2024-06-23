import Slider from "react-slick";
import CourseCard from "../../shared/Courses/CourseCard";
import { useSelector } from "react-redux";
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
const NewCareerRecommendations = () => {
  const publicCourses = useSelector((state) => state.courses.publicCourses);
  const renderedCourses = publicCourses != undefined && (
    <Slider {...settings}>
      {publicCourses
        .slice()
        .reverse()
        .map((item, i) => (
          <CourseCard
            key={i}
            image={item.image}
            title={item.title}
            instructor={item.instructor}
            category={item.category}
            price={+item.price}
          />
        ))}
    </Slider>
  );
  return (
    <section
      className={`container ${
        publicCourses != undefined && publicCourses.length > 4 && "py-20"
      }`}
    >
      {publicCourses != undefined && publicCourses.length > 4 && (
        <h2 className="mx-6 mb-10 text-xl font-bold lg:text-3xl lg:mx-0">
          Recommend this if you are looking for a new career path
        </h2>
      )}
      {publicCourses != undefined &&
        publicCourses.length > 4 &&
        renderedCourses}
    </section>
  );
};
export default NewCareerRecommendations;
