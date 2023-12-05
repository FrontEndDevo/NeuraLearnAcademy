import course_one from "../../../assets/images/homepage/course_1.jpg";
import course_two from "../../../assets/images/homepage/course_2.jpg";
import course_three from "../../../assets/images/homepage/course_3.jpg";
import course_four from "../../../assets/images/homepage/course_4.jpg";
import course_five from "../../../assets/images/homepage/course_5.jpg";
import smileIcon from "../../../assets/images/homepage/icon.png";
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
    </section>
  );
};

export default NewCareerRecommendations;
