import { useCallback, useState } from "react";
import UserCoursesOptions from "./UserCoursesOptions/UserCoursesOptions";
import course1 from "../../assets/images/homepage/course_9.jpg";
import course2 from "../../assets/images/homepage/course_8.jpg";
import course3 from "../../assets/images/homepage/course_7.jpg";
import { Link } from "react-router-dom";
import UserCoursesPagination from "./UserCoursesPagination";
import { useSelector } from "react-redux";
const userCourses = ["courses", "my lists", "wishlist", "archived", "purchase"];
const allUserCourses = [
  {
    image: course1,
    author: "Adel nsiem",
    title: "The complete course of programming object for beginners",
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
    title: "The complete course of object oriented programming for beginners",
    category: "Programming",
    progress: 100,
  },
  {
    image: course3,
    author: "Adel nsiem",
    title: "The complete course of programming for beginners",
    category: "Programming",
    progress: 100,
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
  const [paginationIndices, setPaginationIndices] = useState({
    start: 0,
    end: 6,
  });

  // Get the search keyword from the Redux store
  const searchKeyword = useSelector(
    (state) => state.searchCourses.searchKeyword
  );

  // Filter the allUserCourses array based on the search keyword
  const filteredCourses = allUserCourses.filter((course) =>
    course.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  // Store these functions inside callback to prevent re-rendering.
  const memorizedUserOptions = useCallback((index) => {
    setCurrentOption(index);
  }, []);

  const memorizedUserCoursesPagination = useCallback((cur, productsPerPage) => {
    // Calc the first and last product index that should be rendered.
    const startIndex = (cur - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    setPaginationIndices({ start: startIndex, end: endIndex });
  }, []);

  // Detect which page the user in to render the correct title.
  const myLearningsTitle =
    userCourses[currentOption].charAt(0).toUpperCase() +
    userCourses[currentOption].slice(1);

  // Render all the user courses.
  const correctCoursesArray = searchKeyword ? filteredCourses : allUserCourses;
  const renderedUserCourses = correctCoursesArray
    .slice(paginationIndices.start, paginationIndices.end)
    .map((course, index) => {
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
          <div className="border shadow-lg h-[500px] md:h-[550px] lg:h-[700px] xl:h-[650px] 2xl:h-[600px] rounded-3xl">
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
                <div className="flex gap-1 p-2 cursor-pointer lg:hover:animate-pulse">
                  {Array.from({ length: 3 }, (_, i) => (
                    <span key={i} className={threeDotsClasses} />
                  ))}
                </div>
              </div>

              <h3 className="my-4 text-base font-semibold leading-6 tracking-wide lg:text-xl text-gray-color-700">
                {course.title}
              </h3>
              <h6 className="px-3 py-1 text-[10px] lg:text-base font-bold text-white rounded-full bg-secondary-700 w-fit">
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
                className="flex px-12 py-2 mx-auto text-xs text-white duration-300 rounded-full md:px-8 lg:px-10 lg:py-3 md:text-sm w-fit bg-primary-500 hover:bg-primary-700"
              >
                {progressButton}
              </Link>
            </div>
          </div>
        </li>
      );
    });

  return (
    <section className="container grid grid-cols-1 gap-10 py-10 md:grid-cols-3 lg:gap-20 lg:grid-cols-4">
      <UserCoursesOptions
        option={currentOption}
        chooseUserOption={memorizedUserOptions}
      />
      <div className="col-span-2 lg:col-span-3">
        <h2 className="mx-8 mb-6 text-xl font-bold md:mx-0 md:mb-2 lg:text-2xl">
          {myLearningsTitle}
        </h2>
        <ul className="grid grid-cols-1 gap-4 mx-8 md:mx-0 md:grid-cols-2 lg:grid-cols-3">
          {renderedUserCourses}
        </ul>
        <UserCoursesPagination
          coursesLength={correctCoursesArray.length}
          getCurrentPage={memorizedUserCoursesPagination}
          paginationIndices={paginationIndices}
        />
      </div>
    </section>
  );
};

export default UserCourses;
