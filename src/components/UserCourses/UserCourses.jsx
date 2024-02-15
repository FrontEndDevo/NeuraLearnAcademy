import { useState } from "react";
import UserCoursesOptions from "./UserCoursesOptions/UserCoursesOptions";
import course1 from "../../assets/images/homepage/course_9.jpg";
import course2 from "../../assets/images/homepage/course_8.jpg";
import course3 from "../../assets/images/homepage/course_7.jpg";
import { Link } from "react-router-dom";
const userCourses = ["courses", "my lists", "wishlist", "archived", "purchase"];
const allUserCourses = [
  {
    image: course1,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 40,
  },
  {
    image: course2,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 40,
  },
  {
    image: course3,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 40,
  },
  {
    image: course1,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 40,
  },
  {
    image: course2,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 40,
  },
  {
    image: course3,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 40,
  },
];
const UserCourses = () => {
  const [currentOption, setCurrentOption] = useState(0);

  const chooseAnOptionHandler = (index) => {
    setCurrentOption(index);
  };

  // Detect which page the user in to render the correct title.
  const myLearningsTitle =
    userCourses[currentOption].charAt(0).toUpperCase() +
    userCourses[currentOption].slice(1);

  // User progress button:

  const renderedUserCourses = allUserCourses.map((course, index) => {
    const progressButton =
      course.progress == 0
        ? "Start Learning"
        : course.progress == 100
        ? "Review"
        : "Continue Learning";

    return (
      <li key={index}>
        <div>
          <img src={course.image} alt={course.title} />
          <div>
            <span>{course.author}</span>
            {/* Options (three dots '...') */}
          </div>
          <h4>{course.title}</h4>
          <h6>{course.category}</h6>
          <div>
            <span></span>
            <p>{course.progress}% complete</p>
          </div>
          <Link to="/">{progressButton}</Link>
        </div>
      </li>
    );
  });

  return (
    <section className="container grid grid-cols-4">
      <UserCoursesOptions
        option={currentOption}
        chooseUserOption={chooseAnOptionHandler}
      />
      <div className="col-span-3">
        <h2>{myLearningsTitle}</h2>
        <ul>{renderedUserCourses}</ul>
      </div>
    </section>
  );
};

export default UserCourses;
