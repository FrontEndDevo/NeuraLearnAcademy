import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import course_one from "../../../assets/images/homepage/course_1.jpg";
import course_two from "../../../assets/images/homepage/course_2.jpg";
import course_three from "../../../assets/images/homepage/course_3.jpg";
import course_four from "../../../assets/images/homepage/course_4.jpg";
import course_five from "../../../assets/images/homepage/course_5.jpg";
import smileIcon from "../../../assets/images/homepage/icon.png";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
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
  const renderedCourses = recomendedCourses.map((item, i) => (
    <div key={i} className="bg-gray-200 border-2 w-96">
      <img src={item.img} alt={item.title} className="w-full" />
      <div className="py-4 px-3">
        <h4 className="text-xl font-bold">{item.title}</h4>

        <div className="text-gray-600 flex items-center gap-1 my-3">
          <FontAwesomeIcon icon={faUser} /> <span>{item.instructor}</span>
        </div>

        <div className="my-3 font-bold flex items-center gap-1">
          <span>{item.review}</span>{" "}
          <div>
            {Array.from({ length: 5 }, (_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))}
          </div>
        </div>
        <span className="font-bold text-xl">${item.price.toFixed(2)}</span>
      </div>
    </div>
  ));

  return (
    <section className="py-20 container">
      <div className="flex items-center gap-4 mx-6 lg:mx-0">
        <h2 className="font-bold text-xl lg:text-3xl">
          Recommend this if you are looking for a new career path
        </h2>
        <img
          src={smileIcon}
          alt="smile icon"
          className="w-10 h-10 lg:w-16 lg:h-16"
        />
      </div>
      {renderedCourses}
    </section>
  );
};

export default NewCareerRecommendations;
