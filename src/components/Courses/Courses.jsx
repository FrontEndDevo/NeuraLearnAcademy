import programmer from "../../assets/images/homepage/programmer.jpg";
import course_one from "../../assets/images/homepage/course_6.jpg";
import course_two from "../../assets/images/homepage/course_7.jpg";
import course_three from "../../assets/images/homepage/course_8.jpg";
import course_four from "../../assets/images/homepage/course_9.jpg";
import course_five from "../../assets/images/homepage/course_1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar as mainStar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";

const categories = [
  "all",
  "programming",
  "web development",
  "bussines",
  "data science",
  "sales & marketing",
];

const settings = {
  dots: true,
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "-100px",
  slidesToShow: 5,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 1500,
  rows: 1,
  slidesPerRow: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerPadding: "20px",
        slidesToShow: 2,
        slidesPerRow: 1,
        arrows: false,
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

const Courses = () => {
  const coursesCategories = categories.map((item, i) => (
    <li
      key={i}
      className="px-8 py-2 text-black duration-300 bg-white border-2 rounded-lg hover:bg-black hover:text-white"
    >
      <button className="capitalize">{item}</button>
    </li>
  ));

  // Prepare the suggested courses array:
  // This is a temporary array of objects (courses) until fetch all of these from DB.
  const suggestedCourses = [
    {
      title: "The complete course of Bussines for beginners",
      img: course_one,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of computer science",
      img: course_two,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course object oriented programming",
      img: course_three,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of programming International",
      img: course_four,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of programming for beginners",
      img: course_five,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of Bussines for beginners",
      img: course_one,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of Bussines for beginners",
      img: course_one,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of computer science",
      img: course_two,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course object oriented programming",
      img: course_three,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of programming International",
      img: course_four,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of programming for beginners",
      img: course_five,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of Bussines for beginners",
      img: course_one,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
  ];

  // Render all courses inside a slider:
  const renderSuggestedCourses = (
    <Slider {...settings}>
      {suggestedCourses.map((item, i) => (
        <div key={i} className="bg-gray-100 border-2">
          <img src={item.img} alt={item.title} className="w-full h-[300px]" />
          <div className="px-3 py-4">
            <h4 className="text-xl font-bold">{item.title}</h4>

            <div className="flex items-center gap-1 my-3 text-gray-600">
              <FontAwesomeIcon icon={faUser} /> <span>{item.instructor}</span>
            </div>

            <div className="flex items-center gap-1 my-3 font-bold">
              <span>{item.review}</span>{" "}
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.floor(item.review) }, (_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={mainStar}
                    className="text-yellow-600"
                  />
                ))}
                {Array.from(
                  { length: 5 - Math.floor(item.review) },
                  (_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  )
                )}
              </div>
            </div>
            <span className="text-xl font-bold">${item.price.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </Slider>
  );

  return (
    <section className="container py-20 text-center">
      <div className="mb-6">
        <h2 className="text-3xl lg:mx-40 lg:text-5xl">
          Build your ideas and implement them with the computer !
        </h2>
        <h4 className="mt-6 text-2xl lg:text-4xl">
          A broad selection of courses
        </h4>
        <p className="mt-8 text-lg text-gray-500">
          Choose from the most popular online courses with new additions
          published every month
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-4 mx-4 my-10 sm:grid-cols-2 md:grid-cols-3 lg:items-center lg:justify-center lg:flex">
        {coursesCategories}
      </ul>

      <div className="relative mx-4 flex flex-col items-center justify-center p-8 bg-[#EEF3F6] border-2 shadow-lg rounded-3xl">
        <img
          src={programmer}
          alt="programmer"
          className="w-[250px] h-[250px] mb-4 lg:absolute -top-2 -left-20 border-8 border-primary-700 rounded-full"
        />
        <div className="flex items-center justify-center font-bold leading-7 text-justify lg:px-[19rem] lg:py-20 py-4">
          <p>
            Welcome, I am your assistant here to introduce you to
            programming,software, and the world of software, and to create your
            first application through a group of courses that qualify you for
            the labor market with the latest existing technologies, knowing that
            programming is fundamental to the technologies that humans have
            achieved.
          </p>
        </div>
        <button className="flex justify-end px-4 py-2 ml-auto text-xl text-white capitalize duration-200 rounded-lg lg:px-8 lg:py-4 lg:text-2xl bg-primary-700 hover:bg-primary-500">
          explore programming
        </button>
      </div>

      {renderSuggestedCourses}
    </section>
  );
};

export default Courses;
