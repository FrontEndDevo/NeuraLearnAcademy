import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import course_one from "../../assets/images/homepage/course_1.jpg";
import course_two from "../../assets/images/homepage/course_2.jpg";
import course_three from "../../assets/images/homepage/course_3.jpg";
import course_four from "../../assets/images/homepage/course_4.jpg";
import course_five from "../../assets/images/homepage/course_5.jpg";
import { faUser, faStar as mainStar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
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
  // This is a temporary array of objects (courses) until fetch all of these from DB.
  const recomendedCourses = [
    {
      title: "The complete course of Bussines for beginners",
      img: course_one,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of Balence",
      img: course_two,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course Swintific Rwriting",
      img: course_three,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of Machine Learing",
      img: course_four,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of Artfical for beginners",
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
      title: "The complete course of Balence",
      img: course_two,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course Swintific Rwriting",
      img: course_three,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of Machine Learing",
      img: course_four,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
    {
      title: "The complete course of Artfical for beginners",
      img: course_five,
      instructor: "Adel nsiem",
      price: 30,
      review: 4.7,
    },
  ];

  // Render all courses inside a slider:
  const renderedCourses = (
    <Slider {...settings}>
      {recomendedCourses.map((item, i) => (
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
    <section className="container py-20">
      <h2 className="mx-6 mb-10 text-xl font-bold lg:text-3xl lg:mx-0">
        Recommend this if you are looking for a new career path
      </h2>
      {renderedCourses}
    </section>
  );
};

export default NewCareerRecommendations;
