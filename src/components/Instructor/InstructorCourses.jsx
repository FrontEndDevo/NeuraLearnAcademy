import { useCallback, useEffect, useState } from "react";
import InstructorCourseCard from "../../shared/Courses/InstructorCourseCard";
import InstructorSidebar from "../../components/Instructor/InstructorSideBar";
import DefaultInstructorCourse from "../../shared/Courses/DefaultInstructorCourse";
import { useDispatch, useSelector } from "react-redux";
import { getInstructorCourses } from "../../redux/actions/courses-methods";
import Pagination from "../../shared/Pagination";
const InstructorCourses = () => {
  const instructorCourses = useSelector(
    (state) => state.courseData.instructorCourses
  );
  const access = useSelector((state) => state.userAuth.access);

  const [instructorOption, setInstructorOption] = useState("courses");
  const dispatch = useDispatch();
  useEffect(() => {
    getInstructorCourses(dispatch, access);
  }, []);

  // The number of elements to be rendered per page.
  const elementsPerPage = 7; // Add to this value 1 (DefaultInstructorCourse component)

  const [paginationIndices, setPaginationIndices] = useState({
    start: 0,
    end: elementsPerPage,
  });

  // Memorize the pagination function to avoid re-rendering.
  const memorizedInstructorCoursesPagination = useCallback((cur) => {
    // Calc the first and last product index that should be rendered.
    const startIndex = (cur - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;

    setPaginationIndices({ start: startIndex, end: endIndex });
  }, []);

  // Get the selected option from the sidebar.
  const handleInstructorOption = (option) => {
    setInstructorOption(option);
  };

  // Map through the instructorCourses array and render an InstructorCourseCard component for each course.
  const instructorCoursesList = instructorCourses
    .slice(paginationIndices.start, paginationIndices.end)
    .map((course, index) => <InstructorCourseCard key={index} {...course} />);

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

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-fr">
  <DefaultInstructorCourse />
  {instructorCoursesList}
</ul>
        <Pagination
          elementsPerPage={elementsPerPage}
          length={instructorCourses.length}
          getCurrentPage={memorizedInstructorCoursesPagination}
        />
      </div>
    </section>
  );
};

export default InstructorCourses;
