import courseImage from "../../assets/images/homepage/course_5.jpg";
import CourseCard from "../../shared/Courses/CourseCard";
const coursesOfCategories = [
  {
    category: "programming",
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
    (category, index) => {
      return (
        <div key={index} className="p-2 m-2 bg-gray-100">
          <h2 className="text-blue-400">{category.category}</h2>
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
        </div>
      );
    }
  );

  return <section>{availableCategoriesOfCourses}</section>;
};

export default AllCourses;
