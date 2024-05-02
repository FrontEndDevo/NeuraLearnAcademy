import { useState } from "react";
import img1 from "../../assets/images/homepage/course_1.jpg";
import img2 from "../../assets/images/homepage/course_2.jpg";
import img3 from "../../assets/images/homepage/course_3.jpg";
import img4 from "../../assets/images/homepage/course_4.jpg";
import img5 from "../../assets/images/homepage/course_5.jpg";
import img6 from "../../assets/images/homepage/course_6.jpg";
import img7 from "../../assets/images/homepage/course_7.jpg";
import InstructorCourseCard from "../../shared/Courses/InstructorCourseCard";
import InstructorSidebar from "../../components/Instructor/InstructorSideBar";
import DefaultInstructorCourse from "../../shared/Courses/DefaultInstructorCourse";

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
  const [instructorOption, setInstructorOption] = useState("courses");

  const handleInstructorOption = (option) => {
    setInstructorOption(option);
  };

  // Map through the instructorCourses array and render an InstructorCourseCard component for each course.
  const instructorCoursesList = instructorCourses.map((course, index) => (
    <InstructorCourseCard key={index} {...course} />
  ));

  return (
    <section className="flex flex-col lg:flex-row">
      <InstructorSidebar
        selectedOption={instructorOption}
        getInstructorOption={handleInstructorOption}
      />
      <div className="mx-4 lg:px-10 lg:py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="mx-auto text-2xl font-bold capitalize lg:mx-0">
            my {instructorOption}
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 lg:flex lg:flex-wrap lg:items-center lg:justify-center md:grid-cols-2 lg:gap-y-16">
          <div className="md:col-span-2">
            <DefaultInstructorCourse />
          </div>
          {instructorCoursesList}
        </ul>
      </div>
    </section>
  );
};

export default InstructorCourses;
