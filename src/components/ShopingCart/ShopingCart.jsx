import { useState } from "react";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import images
import course1 from "../../assets/images/homepage/course_9.jpg";
import course2 from "../../assets/images/homepage/course_8.jpg";
import course3 from "../../assets/images/homepage/course_7.jpg";
import course4 from "../../assets/images/homepage/course_4.jpg";
import course5 from "../../assets/images/homepage/course_5.jpg";
import { Link } from "react-router-dom";
import Pagination from "../../shared/Pagination";
// import files
function ShopingCart() {
  // store courses data
  const [shopingCartCourses, setShopingCartCourses] = useState([
    {
      id: 1,
      image: course5,
      author: "Adel nsiem",
      title: "The complete course of programming object for beginners",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      numOfSections: 8,
      price: 100.0,
      rating: 3,
    },
    {
      id: 2,
      image: course4,
      author: "elzero",
      title: "The complete course of programming object for beginners",
      category: "Programming",
      numOfVideos: 120,
      numOfLectures: 5,
      numOfSections: 8,
      price: 300.0,
      rating: 2.5,
    },
    {
      id: 3,
      image: course5,
      author: "Karim abdelazim",
      title: "Data Structure",
      category: "Programming",
      numOfVideos: 50,
      numOfLectures: 10,
      price: 400.0,
      rating: 5,
    },
    {
      id: 4,
      image: course2,
      author: "Adel nsiem",
      title: "The complete course of programming object for beginners",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      numOfSections: 8,
      price: 300.0,
      rating: 3.5,
    },
    {
      id: 5,
      image: course4,
      author: "Adel nsiem",
      title: "React Js",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      price: 50.0,
      rating: 4.5,
    },
    {
      id: 6,
      image: course4,
      author: "Adel nsiem",
      title: "React Js",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      price: 50.0,
      rating: 4.5,
    },
    {
      id: 7,
      image: course4,
      author: "Adel nsiem",
      title: "React Js",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      price: 50.0,
      rating: 4.5,
    },
    {
      id: 8,
      image: course3,
      author: "Adel nsiem",
      title: "The complete course of programming object for beginners",
      category: "Programming",
      numOfVideos: 150,
      numOfSections: 8,
      numOfLectures: 4,
      price: 50.0,
      rating: 4.5,
    },
    {
      id: 9,
      image: course1,
      author: "Adel nsiem",
      title: "The complete course of programming object for beginners",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      numOfSections: 8,
      price: 50.0,
      rating: 4.5,
    },
    {
      id: 10,
      image: course1,
      author: "Adel nsiem",
      title: "The complete course of programming object for beginners",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      numOfSections: 8,
      price: 50.0,
      rating: 4.5,
    },
    {
      id: 11,
      image: course1,
      author: "Adel nsiem",
      title: "The complete course of programming object for beginners",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      numOfSections: 8,
      price: 50.0,
      rating: 4.5,
    },
    {
      id: 12,
      image: course1,
      author: "Adel nsiem",
      title: "The complete course of programming object for beginners",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      numOfSections: 8,
      price: 50.0,
      rating: 4.5,
    },
    {
      id: 13,
      image: course3,
      author: "Adel nsiem",
      title: "The complete course of programming object for beginners",
      category: "figma",
      numOfVideos: 150,
      numOfLectures: 4,
      numOfSections: 8,
      price: 50.0,
      rating: 3,
    },
  ]);
  // use pagination
  const elementsPerPage = 6;
  const [paginationIndices, setPaginationIndices] = useState({
    start: 0,
    end: elementsPerPage,
  });

  const getCurrentPage = (cur) => {
    // Calc the first and last product index that should be rendered.
    const startIndex = (cur - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;

    setPaginationIndices({ start: startIndex, end: endIndex });
  };

  // calculate the total price pf cart courses
  const calculateTotalPrice = (courses) =>
    +courses.reduce((total, course) => total + course.price, 0).toFixed(2);
  const totalPrice = calculateTotalPrice(shopingCartCourses);

  // remove element I clicked on it:
  const handleRemoveCourse = (courseId) => {
    const updatedCourses = shopingCartCourses.filter(
      (course) => course.id !== courseId
    );
    setShopingCartCourses(updatedCourses);
  };

  return (
    <>
      {/* Header Of Shopping Cart */}
      <div className="flex justify-center place-content-center bg-stone-700 bg-opacity-8 p-[1.5rem] w-full">
        <h1 className="text-white text-[1rem] md:text-[1.5rem] xl:text-[2rem] font-semibold tracking-wider">
          Shopping Cart <FontAwesomeIcon icon={faShoppingCart} />
        </h1>
      </div>

      {/* render courses */}
      <div className="flex flex-col mx-4 mb-8 md:flex-row">
        <div className="w-full mt-20 ml-0 md:ml-10 xl:ml-32 md:w-11/12 lg:w-7/12">
          <div className="mb-3">
            <h1 className="text-2xl font-bold text-center md:text-left md:ml-4 ">
              Courses
            </h1>
          </div>
          {shopingCartCourses
            .slice(paginationIndices.start, paginationIndices.end)
            .map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col pt-4 pb-3 pl-3 pr-5 mb-2 ml-1 bg-white border-b border-black rounded-lg md:flex-row border-opacity-60"
              >
                <img
                  src={item.image}
                  className="w-screen h-32 mb-1 md:w-32 md:h-28 md:mb-0"
                  alt={item.title}
                  loading="lazy"
                />
                <div className="flex-grow md:ml-5">
                  <div className="">
                    <Link
                      to={`/${item.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-base tracking-tight text-blue-900 transition duration-300 ease-in-out hover:text-blue-950 md:text-lg md:font-semibold "
                    >
                      {item.title}
                    </Link>
                  </div>
                  <h2 className="mt-1 text-base font-medium tracking-tight text-black text-opacity-40 md:text-sm md:mt-0">
                    by {item.author}
                  </h2>
                  <span className="text-lg text-black">{item.rating}</span>
                  {Array.from({ length: 5 }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={
                        index < item.rating
                          ? "text-yellow-500 ml-1"
                          : "ml-1"
                      }
                    />
                  ))}
                  <div className="flex flex-wrap my-1">
                    <h3 className="text-sm font-medium tracking-tight text-black text-opacity-40">
                      <FontAwesomeIcon className="mr-1" icon={faVideo} />
                      {item.numOfVideos} videos
                    </h3>
                    <h3 className="hidden ml-5 text-sm font-medium tracking-tight text-black lg:block text-opacity-40">
                      {item.numOfLectures} Lectures
                    </h3>
                    <h3 className="hidden ml-5 text-sm font-medium tracking-tight text-black lg:block text-opacity-40">
                      {item.numOfSections} Sections
                    </h3>
                  </div>
                  <h2 className="text-base font-semibold tracking-tight text-black md:absolute md:right-1 md:top-8 lg:top-10 xl:top-4 md:text-lg">
                    ${item.price}
                  </h2>
                  <button
                    onClick={() => handleRemoveCourse(item.id)}
                    className="w-full px-4 py-2 mt-1 text-base font-semibold tracking-tight text-white transition duration-300 ease-in-out bg-blue-900 md:mt-0 md:absolute md:right-1 md:bottom-2 md:text-blue-700 hover:text-blue-950 md:bg-white hover:bg-blue-300 md:hover:bg-white md:w-auto md:py-0 md:px-2 rounded-xl"
                  >
                    <FontAwesomeIcon icon={faTimes} /> Remove
                  </button>
                </div>
              </div>
            ))}
          <Pagination
            elementsPerPage={elementsPerPage}
            length={shopingCartCourses.length}
            getCurrentPage={getCurrentPage}
          />
        </div>
      </div>

      <div className="order-first md:order-none w-full  md:w-[300px]  lg:w-[316px] h-[214px] pt-4 pl-7 ml-0 md:ml-10 2xl:ml-40 my-5  md:mt-16 bg-white rounded-[1.5rem] shadow-xl flex flex-col justify-center">
        <h1 className="text-xl font-semibold tracking-tight text-black"></h1>

        <h1 className="text-xl font-semibold tracking-tight text-black">
          Total Price:
        </h1>
        <h2 className="text-black text-[32px] font-semibold">
          ${totalPrice}
        </h2>
        <h3 className="text-black text-sm font-semibold font-['Open Sans'] my-2">
          Courses in Cart: {shopingCartCourses.length}
        </h3>
        <button className="w-[9.3rem] mx-auto bg-blue-700 rounded-[1.5rem] p-2 my-2 text-white hover:bg-blue-950 transition duration-300 ease-in-out">
          Checkout
        </button>
      </div>

    </>
  );
}

export default ShopingCart;
