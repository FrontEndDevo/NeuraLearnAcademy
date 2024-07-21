import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InstructorCourseCard from "../../shared/Courses/InstructorCourseCard";
import InstructorSidebar from "./InstructorSidebar";
import DefaultInstructorCourse from "../../shared/Courses/DefaultInstructorCourse";
import Pagination from "../../shared/Pagination";
import { getInstructorCourses } from "../../redux/actions/courses-methods";
import { setIsSpinnerLoading } from "../../redux/slices/popups-slices/spinner-slice";

const useFetchInstructorCourses = (dispatch, access) => {
  useEffect(() => {
    const fetchCourses = async () => {
      dispatch(setIsSpinnerLoading(true));
      await getInstructorCourses(dispatch, access);
      dispatch(setIsSpinnerLoading(false));
    };
    fetchCourses();
  }, [dispatch, access]);
};

const usePagination = (elementsPerPage) => {
  const [paginationIndices, setPaginationIndices] = useState({
    start: 0,
    end: elementsPerPage,
  });

  const updatePagination = useCallback(
    (cur) => {
      const startIndex = (cur - 1) * elementsPerPage;
      const endIndex = startIndex + elementsPerPage;
      setPaginationIndices({ start: startIndex, end: endIndex });
    },
    [elementsPerPage]
  );

  return [paginationIndices, updatePagination];
};

const InstructorCourses = () => {
  const [instructorOption, setInstructorOption] = useState("courses");
  const instructorCourses =
    useSelector((state) => state.courses.instructorCourses) || [];
  const access = useSelector((state) => state.userAuth.access);
  const dispatch = useDispatch();

  useFetchInstructorCourses(dispatch, access);

  const elementsPerPage = 7;
  const [paginationIndices, updatePagination] = usePagination(elementsPerPage);

  const handleInstructorOption = (option) => {
    setInstructorOption(option);
  };

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
      <div className="mx-4 lg:px-10">
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
          getCurrentPage={updatePagination}
        />
      </div>
    </section>
  );
};

export default InstructorCourses;
