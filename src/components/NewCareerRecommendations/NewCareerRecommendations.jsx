import course_one from "../../assets/images/homepage/course_1.jpg";
import course_two from "../../assets/images/homepage/course_2.jpg";
import course_three from "../../assets/images/homepage/course_3.jpg";
import course_four from "../../assets/images/homepage/course_4.jpg";
import course_five from "../../assets/images/homepage/course_5.jpg";
import Slider from "react-slick";
import CourseCard from "../../shared/Courses/CourseCard";

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

// This is a temporary array of objects (courses) until fetch all of these from DB.
const recomendedCourses = [
  {
    title: "The complete course of Bussines for beginners",
    img: course_one,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
  {
    title: "The complete course of Balence",
    img: course_two,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
  {
    title: "The complete course Swintific Rwriting",
    img: course_three,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
  {
    title: "The complete course of Machine Learing",
    img: course_four,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
  {
    title: "The complete course of Artfical for beginners",
    img: course_five,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
  {
    title: "The complete course of Bussines for beginners",
    img: course_one,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
  {
    title: "The complete course of Balence",
    img: course_two,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
  {
    title: "The complete course Swintific Rwriting",
    img: course_three,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
  {
    title: "The complete course of Machine Learing",
    img: course_four,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
  {
    title: "The complete course of Artfical for beginners",
    img: course_five,
    instructor: "Adel nsiem",
    price: 30,
    rate: 4.7,
    category: "web programming",
  },
];
const NewCareerRecommendations = () => {
  // Render all courses inside a slider:
  const renderedCourses = (
    <Slider {...settings}>
      {recomendedCourses.map((item, i) => (
        <CourseCard
          key={i}
          image={item.img}
          title={item.title}
          instructor={item.instructor}
          category={item.category}
          price={item.price}
          rate={item.rate}
        />
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
