import { useEffect, useState } from "react";
import InstructorCourseCard from "../../shared/Courses/InstructorCourseCard";
import InstructorSidebar from "../../components/Instructor/InstructorSideBar";
import DefaultInstructorCourse from "../../shared/Courses/DefaultInstructorCourse";
import { useDispatch, useSelector } from "react-redux";
import { getInstructorCourses } from "../../redux/actions/courses-methods";

const InstructorCourses = () => {
  const instructorCourses = useSelector(
    (state) => state.courseData.instructorCourses
  );
  const access = useSelector((state) => state.userAuth.access);
  const next = instructorCourses?.next;
  const previous = instructorCourses?.previous;
  const [instructorOption, setInstructorOption] = useState("courses");
  const dispatch = useDispatch();
  useEffect(() => {
    getInstructorCourses(dispatch, access, next);
  }, []);

  const handleInstructorOption = (option) => {
    setInstructorOption(option);
  };

  // Map through the instructorCourses array and render an InstructorCourseCard component for each course.
  const instructorCoursesList = instructorCourses?.results?.map(
    (course, index) => <InstructorCourseCard key={index} {...course} />
  );

  return (
    <section className="flex">
      <InstructorSidebar
        selectedOption={instructorOption}
        getInstructorOption={handleInstructorOption}
      />
      <div className="px-10 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold capitalize">
            my {instructorOption}
          </h2>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-16">
          <DefaultInstructorCourse />
          {instructorCoursesList}
        </ul>
      </div>
    </section>
  );
};

export default InstructorCourses;
