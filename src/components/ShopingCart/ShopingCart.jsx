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
// Cart Data as a Termpoeray Data
const shopingCartCourses = [
  {
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
];

// calculate Total Price
function calculateTotalPrice(courses) {
  const totalPrice = courses.reduce((total, course) => total + course.price, 0);
  return totalPrice.toFixed(2);
}
function ShopingCart() {
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 4;
  const getCurrentPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const indexOfLastCourse = currentPage * elementsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - elementsPerPage;
  const currentProducts = shopingCartCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
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
        <div className="w-full mt-20 ml-0 md:ml-10 xl:ml-32 md:w-7/12">
          <div className="mb-3">
            <h1 className="text-2xl font-bold">Courses</h1>
          </div>
          {shopingCartCourses
            .slice(
              (currentPage - 1) * elementsPerPage,
              currentPage * elementsPerPage
            )
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="mb-2 relative flex pl-[1.rem] pr-5 pt-4 pb-3 bg-white rounded-[0.3rem] border-b border-black border-opacity-60"
                >
                  <div>
                    <img
                      src={item.image}
                      className="w-24 h-24 ml-2 md:w-28"
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="ml-5">
                    <div className="flex ">
                      <Link className="text-sm font-semibold tracking-tight text-blue-900 transition duration-300 ease-in-out hover:text-blue-950 xl:text-lg">
                        {item.title}
                      </Link>
                      <h2 className="absolute text-base font-semibold tracking-tight text-black right-1 ">
                        ${item.price}
                      </h2>
                    </div>
                    <h2 className="text-base font-medium tracking-tight text-black text-opacity-40">
                      by {item.author}
                    </h2>
                    <span className="text-lg text-black ">{item.rating}</span>
                    {Array.from({ length: 5 }, (_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={
                          index < item.rating ? "text-yellow-500 ml-1" : "ml-1"
                        }
                      />
                    ))}
                    <div className="flex my-1">
                      <h3 className="text-sm font-medium tracking-tight text-black text-opacity-40 ">
                        <FontAwesomeIcon className="mr-1" icon={faVideo} />
                        {item.numOfVideos} videos
                      </h3>
                      <h3 className="hidden ml-5 text-sm font-medium tracking-tight text-black lg:block text-opacity-40">
                        {item.numOfLectures} Lectures
                      </h3>
                      <h3 className="hidden ml-5 text-sm font-medium tracking-tight text-black lg:block text-opacity-40">
                        {item.numOfSections} Sections
                      </h3>
                      <button className="absolute text-base font-semibold tracking-tight text-blue-700 transition duration-300 ease-in-out right-1 hover:text-blue-950">
                        <FontAwesomeIcon icon={faTimes} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          <Pagination
            elementsPerPage={elementsPerPage}
            length={shopingCartCourses.length}
            getCurrentPage={getCurrentPage}
          />
        </div>
        <div className="order-first md:order-none w-full md:w-[316px] h-[214px] pt-4 pl-7 ml-0 md:ml-20 2xl:ml-40 my-5  md:mt-16 bg-white rounded-[1.5rem] shadow-xl flex flex-col justify-center">
          <h1 className="text-xl font-semibold tracking-tight text-black">
            Total Price:
          </h1>
          <h2 className="text-black text-[32px] font-semibold">
            ${calculateTotalPrice(currentProducts)}
          </h2>
          <h3 className="text-black text-sm font-semibold font-['Open Sans'] my-2">
            Courses in Cart: 4
          </h3>
          <button className="w-[150px] mx-auto bg-blue-700 rounded-[25px] p-2 my-2 text-white hover:bg-blue-950 transition duration-300 ease-in-out">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
export default ShopingCart;
