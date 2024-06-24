import { useCallback, useEffect, useState } from "react";
import UserCoursesOptions from "./UserCoursesOptions";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../shared/Pagination";
import CourseCard from "../../shared/Courses/CourseCard";
import { GetUserCourses } from "../../redux/actions/courses-methods";
const userCourses = ["courses", "my lists", "wishlist", "archived", "purchase"];

const UserCourses = () => {
  useEffect(() => {
    console.log(access);
    GetUserCourses(dispatch, access);
  }, [access, dispatch]);

  const dispatch = useDispatch();
  const access = useSelector((state) => state.userAuth.access);
  const usercourse = useSelector((state) => state.courses.userCourses) || [];
  console.log(usercourse);
  // The number of elements to be rendered per page.
  const elementsPerPage = 6;

  const [currentOption, setCurrentOption] = useState(0);
  const [paginationIndices, setPaginationIndices] = useState({
    start: 0,
    end: elementsPerPage,
  });

  // Get the search keyword from the Redux store
  const searchKeyword = useSelector(
    (state) => state.searchCourses.searchKeyword
  );

  // Filter the usercourse array based on the search keyword
  const filteredCourses = usercourse.filter((course) =>
    course.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  // Store these functions inside callback to prevent re-rendering.
  const memorizedUserOptions = useCallback((index) => {
    setCurrentOption(index);
  }, []);

  const memorizedUserCoursesPagination = useCallback((cur) => {
    // Calc the first and last product index that should be rendered.
    const startIndex = (cur - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;

    setPaginationIndices({ start: startIndex, end: endIndex });
  }, []);

  // Detect which page the user in to render the correct title.
  const myLearningsTitle =
    userCourses[currentOption].charAt(0).toUpperCase() +
    userCourses[currentOption].slice(1);
  // Render the correct courses based on the search keyword.
  const correctCoursesArray = searchKeyword ? filteredCourses : usercourse;
  console.log(correctCoursesArray);
  const renderedUserCourses = correctCoursesArray
    .slice(paginationIndices.start, paginationIndices.end)
    .map((course, index) => (
      <CourseCard
        key={index}
        image={course.image}
        title={course.title}
        instructor={course.instructor}
        category={course.category}
        subject={course.subject}
        slug={course.slug}
      />
    ));

  return (
    <section className="container grid grid-cols-1 px-2 mt-40 mb-10 gap-y-10 md:gap-x-8 md:grid-cols-3 lg:gap-10 lg:grid-cols-4">
      <UserCoursesOptions
        option={currentOption}
        chooseUserOption={memorizedUserOptions}
      />
      <div className="col-span-2 lg:col-span-3">
        <h2 className="mx-8 mb-6 text-xl font-bold md:mx-0 md:mb-2 lg:text-2xl">
          {myLearningsTitle}
        </h2>
        {renderedUserCourses.length == 0 ? (
          <p className="mx-auto text-sm font-semibold text-center text-red-600 md:text-base">
            You don&apos;t have any courses yet, buy one.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-4 mx-4 md:mx-0 md:grid-cols-2 lg:grid-cols-3">
            {renderedUserCourses}
          </ul>
        )}
        <Pagination
          elementsPerPage={elementsPerPage}
          length={correctCoursesArray.length}
          getCurrentPage={memorizedUserCoursesPagination}
        />
      </div>
    </section>
  );
};

export default UserCourses;
