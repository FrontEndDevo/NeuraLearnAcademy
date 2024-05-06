import { useCallback, useState } from "react";
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
import Pagination from "../../shared/Pagination";

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
];

const InstructorCourses = () => {
  const [instructorOption, setInstructorOption] = useState("courses");

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

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 auto-rows-fr">
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
