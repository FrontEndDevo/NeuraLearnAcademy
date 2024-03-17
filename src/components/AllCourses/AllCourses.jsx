import { Link } from "react-router-dom";
import courseImage from "../../assets/images/homepage/course_5.jpg";
import CourseCard from "../../shared/Courses/CourseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const coursesOfCategories = [
  {
    category: "programming",
    courses: [
      {
        image: courseImage,
        instructor: "Instructor 1",
        title: "Course 1",
        rate: 4,
        price: 19.99,
        discount: 10,
      },
      {
        image: courseImage,
        instructor: "Instructor 2",
        title: "Course 2",
        rate: 4.2,
        price: 24.99,
        discount: 20,
      },
      {
        image: courseImage,
        instructor: "Instructor 3",
        title: "Course 3",
        rate: 4.7,
        price: 29.99,
        discount: 0,
      },
      {
        image: courseImage,
        instructor: "Instructor 4",
        title: "Course 4",
        rate: 4.9,
        price: 34.99,
        discount: 100,
      },
    ],
  },
  {
    category: "marketing",
    courses: [
      {
        image: courseImage,
        instructor: "Instructor 1",
        title: "Course 1",
        rate: 4.5,
        price: 19.99,
        discount: 10,
      },
      {
        image: courseImage,
        instructor: "Instructor 2",
        title: "Course 2",
        rate: 4.2,
        price: 24.99,
        discount: 20,
      },
      {
        image: courseImage,
        instructor: "Instructor 3",
        title: "Course 3",
        rate: 4.7,
        price: 29.99,
        discount: 15,
      },
      {
        image: courseImage,
        instructor: "Instructor 4",
        title: "Course 4",
        rate: 4.9,
        price: 34.99,
        discount: 25,
      },
    ],
  },
  {
    category: "sales",
    courses: [
      {
        image: courseImage,
        instructor: "Instructor 1",
        title: "Course 1",
        rate: 4.5,
        price: 19.99,
        discount: 10,
      },
      {
        image: courseImage,
        instructor: "Instructor 2",
        title: "Course 2",
        rate: 4.2,
        price: 24.99,
        discount: 20,
      },
      {
        image: courseImage,
        instructor: "Instructor 3",
        title: "Course 3",
        rate: 4.7,
        price: 29.99,
        discount: 15,
      },
      {
        image: courseImage,
        instructor: "Instructor 4",
        title: "Course 4",
        rate: 4.9,
        price: 34.99,
        discount: 25,
      },
    ],
  },
  {
    category: "development",
    courses: [
      {
        image: courseImage,
        instructor: "Instructor 1",
        title: "Course 1",
        rate: 4.5,
        price: 19.99,
        discount: 10,
      },
      {
        image: courseImage,
        instructor: "Instructor 2",
        title: "Course 2",
        rate: 4.2,
        price: 24.99,
        discount: 20,
      },
      {
        image: courseImage,
        instructor: "Instructor 3",
        title: "Course 3",
        rate: 4.7,
        price: 29.99,
        discount: 15,
      },
      {
        image: courseImage,
        instructor: "Instructor 4",
        title: "Course 4",
        rate: 4.9,
        price: 34.99,
        discount: 25,
      },
    ],
  },
  {
    category: "drawing",
    courses: [
      {
        image: courseImage,
        instructor: "Instructor 1",
        title: "Course 1",
        rate: 4.5,
        price: 19.99,
        discount: 10,
      },
      {
        image: courseImage,
        instructor: "Instructor 2",
        title: "Course 2",
        rate: 4.2,
        price: 24.99,
        discount: 20,
      },
      {
        image: courseImage,
        instructor: "Instructor 3",
        title: "Course 3",
        rate: 4.7,
        price: 29.99,
        discount: 15,
      },
      {
        image: courseImage,
        instructor: "Instructor 4",
        title: "Course 4",
        rate: 4.9,
        price: 34.99,
        discount: 25,
      },
    ],
  },
  {
    category: "photography",
    courses: [
      {
        image: courseImage,
        instructor: "Instructor 1",
        title: "Course 1",
        rate: 4.5,
        price: 19.99,
        discount: 10,
      },
      {
        image: courseImage,
        instructor: "Instructor 2",
        title: "Course 2",
        rate: 4.2,
        price: 24.99,
        discount: 20,
      },
      {
        image: courseImage,
        instructor: "Instructor 3",
        title: "Course 3",
        rate: 4.7,
        price: 29.99,
        discount: 15,
      },
      {
        image: courseImage,
        instructor: "Instructor 4",
        title: "Course 4",
        rate: 4.9,
        price: 34.99,
        discount: 25,
      },
    ],
  },
];

const AllCourses = () => {
  const availableCategoriesOfCourses = coursesOfCategories.map(
    (category, index) => (
      <div key={index} className="relative p-2 m-2">
        <h2 className="mb-4 text-xl font-bold capitalize text-indigo-950">
          {category.category}
        </h2>
        <ul className="flex items-center gap-4">
          {category.courses.map((course, i) => (
            <CourseCard
              key={i}
              image={course.image}
              title={course.title}
              instructor={course.instructor}
              rate={course.rate}
              price={course.price}
              discount={course.discount}
            />
          ))}
        </ul>
        <Link
          to={category.category
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "-")}
          className="absolute bottom-2 right-2 h-[90%] p-5 flex items-center duration-200 hover:opacity-75 justify-center bg-white opacity-50"
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-3xl" />
        </Link>
        <Link
          to={category.category
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "-")}
          className="absolute text-lg font-bold duration-500 top-2 right-4 text-indigo-950 hover:text-indigo-700"
        >
          Show all
        </Link>
      </div>
    )
  );

  return <section>{availableCategoriesOfCourses}</section>;
};

export default AllCourses;
