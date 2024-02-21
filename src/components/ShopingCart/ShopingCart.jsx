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
// Cart Data as a Termpoeray Data
const ShopingCartCourses = [
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
    {
        image: course2,
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
function ShopingCart() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const getCurrentPage = (pageIndex, productsPerPage) => {
        setCurrentPage(pageIndex);
    };
    const indexOfLastCourse = currentPage * productsPerPage;
    const indexOfFirstCourse = indexOfLastCourse - productsPerPage;
    const currentProducts = ShopingCartCourses.slice(
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

            <div className="flex flex-col md:flex-row mx-4 mb-10">
                <div className="ml-0 md:ml-10 xl:ml-32 mt-20 w-full md:w-7/12">
                    <div className=" mb-5">
                        <h1 className="text-2xl font-bold">Courses</h1>
                    </div>
                    {ShopingCartCourses.slice(
                        (currentPage - 1) * productsPerPage,
                        currentPage * productsPerPage
                    ).map((item) => {
                        return (
                            <div
                                key={item}
                                className="mb-2 relative flex pl-[1.rem] pr-5 pt-4 pb-3 bg-white rounded-[0.3rem] border-b border-black border-opacity-60"
                            >
                                <div>
                                    <img
                                        src={item.image}
                                        className="ml-2 w-24 md:w-28 h-24"
                                        alt="Cart Image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="ml-5">
                                    <div className="flex ">
                                        <Link className="text-blue-900 hover:text-blue-950 transition duration-300 ease-in-out text-sm font-semibold tracking-tight xl:text-lg">
                                            {item.title}
                                        </Link>
                                        <h2 className="absolute right-1 text-black text-base font-semibold tracking-tight ">
                                            {item.price} $
                                        </h2>
                                    </div>
                                    <h2 className="text-black text-opacity-40 text-base font-medium tracking-tight">
                                        by {item.author}
                                    </h2>
                                    <span className="text-black text-lg ">{item.rating}</span>
                                    {Array.from({ length: item.rating }, (_, index) => (
                                        <FontAwesomeIcon
                                            key={index}
                                            icon={faStar}
                                            className="text-yellow-500 ml-1"
                                        />
                                    ))}
                                    <div className="flex my-1">
                                        <h3 className="text-black text-opacity-40 text-sm font-medium tracking-tight ">
                                            <FontAwesomeIcon className="mr-1" icon={faVideo} />
                                            {item.numOfVideos} videos
                                        </h3>
                                        <h3 className="text-black hidden lg:block text-opacity-40 text-sm font-medium tracking-tight ml-5">
                                            {item.numOfLectures} Lectures
                                        </h3>
                                        <h3 className="text-black hidden lg:block text-opacity-40 text-sm font-medium tracking-tight ml-5">
                                            {item.numOfSections} Sections
                                        </h3>
                                        <button className=" absolute right-1 text-blue-700 text-base font-semibold tracking-tight hover:text-blue-950 transition duration-300 ease-in-out">
                                            <FontAwesomeIcon icon={faTimes} /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <UserCoursesPagination
                        coursesLength={ShopingCartCourses.length}
                        getCurrentPage={getCurrentPage}
                    />
                </div>
                <div className="order-first md:order-none w-full md:w-[316px] h-[214px] pt-4 pl-7 ml-0 md:ml-20 2xl:ml-40 my-5  md:mt-16 bg-white rounded-[1.5rem] shadow-xl flex flex-col justify-center">
                    <h1 className="text-black text-xl font-semibold tracking-tight">
                        Total Price:
                    </h1>
                    <h2 className="text-black text-[32px] font-semibold">$200.00</h2>
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
