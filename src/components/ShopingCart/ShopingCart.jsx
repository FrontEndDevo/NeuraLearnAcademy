import React, { useState } from "react";
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
// import files
import UserCoursesPagination from "../UserCourses/UserCoursesPagination";
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
    }, {
      id: 6,
      image: course4,
      author: "Adel nsiem",
      title: "React Js",
      category: "Programming",
      numOfVideos: 150,
      numOfLectures: 4,
      price: 50.0,
      rating: 4.5,
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }
  ])
  // use pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const getCurrentPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const indexOfLastCourse = currentPage * productsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - productsPerPage;
  const currentProducts = shopingCartCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  //calculate the number of pages to render elments
  const totalPages = Math.ceil(shopingCartCourses.length / productsPerPage)

  // calculate the total price pf cart courses  
  const calculateTotalPrice = (courses) => +(courses.reduce((total, course) => total + course.price, 0).toFixed(2));
  const totalPrice = calculateTotalPrice(shopingCartCourses);

  // remove elementt i click on it
  const handleRemoveCourse = (courseId) => {
    const updatedCourses = shopingCartCourses.filter((course) => course.id !== courseId);
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
      <div className="flex flex-col md:flex-row mx-4 mb-8">
        <div className="ml-0 md:ml-10 xl:ml-32 mt-20 w-full md:w-11/12 lg:w-7/12">
          <div className="mb-3">
            <h1 className="text-2xl font-bold text-center md:text-left md:ml-4 ">Courses</h1>
          </div>
          {shopingCartCourses
            .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
            .map((item) => (
              <div key={item.id} className="mb-2 relative flex flex-col md:flex-row pl-3 pr-5 pt-4 pb-3 bg-white rounded-lg border-b border-black border-opacity-60 ml-1">
                <img src={item.image} className=" w-screen h-32  md:w-32  md:h-28 mb-1 md:mb-0" alt={item.title} loading="lazy" />
                <div className="md:ml-5 flex-grow">
                  <div className="">
                    <Link to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-900 hover:text-blue-950 transition duration-300 ease-in-out text-base md:text-lg md:font-semibold tracking-tight ">
                      {item.title}
                    </Link>
                  </div>
                  <h2 className="text-black text-opacity-40 text-base md:text-sm font-medium tracking-tight mt-1 md:mt-0">
                    by {item.author}
                  </h2>
                  <span className="text-black text-lg">{item.rating}</span>
                  {Array.from({ length: 5 }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={index < item.rating ? "text-yellow-500 ml-1" : "ml-1"}
                    />
                  ))}
                  <div className="flex flex-wrap my-1">
                    <h3 className="text-black text-opacity-40 text-sm font-medium tracking-tight">
                      <FontAwesomeIcon className="mr-1" icon={faVideo} />
                      {item.numOfVideos} videos
                    </h3>
                    <h3 className="text-black hidden lg:block text-opacity-40 text-sm font-medium tracking-tight ml-5">
                      {item.numOfLectures} Lectures
                    </h3>
                    <h3 className="text-black hidden lg:block text-opacity-40 text-sm font-medium tracking-tight ml-5">
                      {item.numOfSections} Sections
                    </h3>

                  </div>
                  <h2 className=" md:absolute md:right-1 md:top-8 lg:top-10 xl:top-4 text-black text-base md:text-lg font-semibold tracking-tight">
                    ${item.price}
                  </h2>
                  <button onClick={() => handleRemoveCourse(item.id)} className="mt-1 md:mt-0 md:absolute md:right-1 md:bottom-2 text-white md:text-blue-700 text-base font-semibold tracking-tight hover:text-blue-950 transition duration-300 ease-in-out bg-blue-900 md:bg-white hover:bg-blue-300 md:hover:bg-white w-full py-2 md:w-auto md:py-0 px-4 md:px-2 rounded-xl">
                    <FontAwesomeIcon icon={faTimes} /> Remove
                  </button>
                </div>
              </div>
            ))}
          <UserCoursesPagination
            coursesLength={shopingCartCourses.length}
            getCurrentPage={getCurrentPage}
            totalPages={totalPages}
          />
        </div>
        <div className="order-first md:order-none w-full  md:w-[300px]  lg:w-[316px] h-[214px] pt-4 pl-7 ml-0 md:ml-10 2xl:ml-40 my-5  md:mt-16 bg-white rounded-[1.5rem] shadow-xl flex flex-col justify-center">
          <h1 className="text-black text-xl font-semibold tracking-tight">
            Total Price:
          </h1>
          <h2 className="text-black text-[32px] font-semibold">${totalPrice}</h2>
          <h3 className="text-black text-sm font-semibold font-['Open Sans'] my-2">
            Courses in Cart: {shopingCartCourses.length}
          </h3>
          <button className="w-[9.3rem] mx-auto bg-blue-700 rounded-[1.5rem] p-2 my-2 text-white hover:bg-blue-950 transition duration-300 ease-in-out">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
export default ShopingCart;
