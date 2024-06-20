import { useCallback, useEffect, useState } from "react";
import InstructorCourseCard from "../../shared/Courses/InstructorCourseCard";
import InstructorSidebar from "../../components/Instructor/InstructorSideBar";
import DefaultInstructorCourse from "../../shared/Courses/DefaultInstructorCourse";
import { useDispatch, useSelector } from "react-redux";
import { getInstructorCourses } from "../../redux/actions/courses-methods";
import Pagination from "../../shared/Pagination";
import { setIsSpinnerLoading } from "../../redux/slices/popups-slices/spinner-slice";
import { setToastMessage } from "../../redux/slices/popups-slices/toasts-slice";
const InstructorCourses = () => {
  const [instructorOption, setInstructorOption] = useState("courses");

  const instructorCourses =
    useSelector((state) => state.courses.instructorCourses) || [];
  const access = useSelector((state) => state.userAuth.access);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchInstructorCourses = async () => {
      try {
        // Show the spinner.
        dispatch(setIsSpinnerLoading(true));

        await getInstructorCourses(dispatch, access);
      } catch (error) {
        // Show the error message to the user.
        dispatch(
          setToastMessage({
            message: "Can't fetch your courses. Please try again later.",
            type: "error",
          })
        );
      } finally {
        // Close the spinner.
        dispatch(setIsSpinnerLoading(false));
      }
    };
    fetchInstructorCourses();
  }, [dispatch, access]);

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
    .map((course, index) => (
      <InstructorCourseCard key={index} {...course} userAccess={access} />
    ));

  return (
    <section className="flex flex-col lg:gap-0 md:gap-14 md:flex-row">
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

        <ul className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-fr">
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
