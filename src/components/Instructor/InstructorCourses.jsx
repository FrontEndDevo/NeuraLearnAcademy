import img1 from "../../assets/images/homepage/course_1.jpg";
import img2 from "../../assets/images/homepage/course_2.jpg";
import img3 from "../../assets/images/homepage/course_3.jpg";
import img4 from "../../assets/images/homepage/course_4.jpg";
import img5 from "../../assets/images/homepage/course_5.jpg";
import img6 from "../../assets/images/homepage/course_6.jpg";
import img7 from "../../assets/images/homepage/course_7.jpg";
import InstructorCourseCard from "../../shared/Courses/InstructorCourseCard";

// Temp data: replace with actual data from API
const instructorCourses = [
  {
    img: img1,
    title: "machine learning",
    videos: 186,
    sections: 25,
    quizzes: 16,
    category: "Web Development",
    students: 82342,
    price: 50,
  },
  {
    img: img2,
    title: "machine learning",
    videos: 186,
    sections: 25,
    quizzes: 16,
    category: "Web Development",
    students: 82342,
    price: 50,
  },
  {
    img: img3,
    title: "machine learning",
    videos: 186,
    sections: 25,
    quizzes: 16,
    category: "Web Development",
    students: 82342,
    price: 50,
  },
  {
    img: img4,
    title: "machine learning",
    videos: 186,
    sections: 25,
    quizzes: 16,
    category: "Web Development",
    students: 82342,
    price: 50,
  },
  {
    img: img5,
    title: "machine learning",
    videos: 186,
    sections: 25,
    quizzes: 16,
    category: "Web Development",
    students: 82342,
    price: 50,
  },
  {
    img: img6,
    title: "machine learning",
    videos: 186,
    sections: 25,
    quizzes: 16,
    category: "Web Development",
    students: 82342,
    price: 50,
  },
  {
    img: img7,
    title: "machine learning",
    videos: 186,
    sections: 25,
    quizzes: 16,
    category: "Web Development",
    students: 82342,
    price: 50,
  },
];

const InstructorCourses = () => {
  const instructorCoursesList = instructorCourses.map((course, index) => (
    <InstructorCourseCard key={index} {...course} />
  ));

  return (
    <section className="p-20">
      <ul className="flex items-center gap-4 flex-wrap">
        {instructorCoursesList}
      </ul>
    </section>
  );
};

export default InstructorCourses;
