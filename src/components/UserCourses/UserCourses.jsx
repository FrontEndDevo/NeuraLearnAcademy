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
    progress: 0,
  },
  {
    image: course2,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 10,
  },
  {
    image: course3,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 30,
  },
  {
    image: course1,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 50,
  },
  {
    image: course2,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 80,
  },
  {
    image: course3,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 100,
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

  const renderedUserCourses = allUserCourses.map((course, index) => {
    // Classes
    const progressBarClasses = "absolute top-0 left-0 h-1 rounded-full";
    const threeDotsClasses = "w-2 h-2 rounded-full bg-gray-color-500";

    // User progress button:
    const progressButton =
      course.progress == 0
        ? "Start Learning"
        : course.progress == 100
        ? "Review"
        : "Continue Learning";
    return (
      <li key={index}>
        <div className="border shadow-lg h-[550px] rounded-3xl">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-1/2 rounded-t-3xl"
          />
          <div className="p-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold text-gray-color-500 md:text-sm">
                {course.author}
              </span>
              <div className="flex gap-1 p-2 cursor-pointer hover:animate-pulse">
                {Array.from({ length: 3 }, (_, i) => (
                  <span key={i} className={threeDotsClasses} />
                ))}
              </div>
            </div>
            <h4 className="my-4 text-xl font-semibold leading-6 tracking-wide text-gray-color-700">
              {course.title}
            </h4>
            <h6 className="px-3 text-[10px] md:text-base font-bold text-white rounded-full bg-secondary-700 w-fit">
              {course.category}
            </h6>
            <div className="relative my-4">
              <span
                style={{ width: `${course.progress}%` }}
                className={`${progressBarClasses} duration-500 bg-primary-500`}
              />
              <span
                className={`${progressBarClasses} w-full bg-[#82818166] -z-10`}
              />
              <p className="text-[9px] pt-3 md:text-sm font-semibold">
                {course.progress}% complete
              </p>
            </div>
            <Link
              to="/"
              className="flex px-10 py-3 mx-auto text-xs text-white duration-300 rounded-full md:text-sm w-fit bg-primary-500 hover:bg-primary-700"
            >
              {progressButton}
            </Link>
          </div>
        </div>
      </li>
    );
  });

  return (
    <section className="container grid grid-cols-4 gap-20 py-10">
      <UserCoursesOptions
        option={currentOption}
        chooseUserOption={chooseAnOptionHandler}
      />
      <div className="col-span-3">
        <h2 className="mb-2 text-2xl font-bold">{myLearningsTitle}</h2>
        <ul className="grid grid-cols-3 gap-4">{renderedUserCourses}</ul>
      </div>
    </section>
  );
};

export default UserCourses;
