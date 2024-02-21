import React from 'react'


//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



// import images 
import course1 from "../../assets/images/homepage/course_9.jpg";
import course2 from "../../assets/images/homepage/course_8.jpg";
import course3 from "../../assets/images/homepage/course_7.jpg";

const ShopingCartCourses = [
    {
        image: course1,
        author: "Adel nsiem",
        title: "The complete course of programming object for beginners",
        category: "Programming",
        numOfVideos: 150,
        numOfLectures: 4,
        price: 50.00,
        rating: 4.5
    },
    {
        image: course2,
        author: "elzero",
        title: "The complete course of programming object for beginners",
        category: "Programming",
        numOfVideos: 150,
        numOfLectures: 4,
        price: 50.00,
        rating: 4.5
    },
    {
        image: course3,
        author: "Adel nsiem",
        title: "The complete course of programming object for beginners",
        category: "Programming",
        numOfVideos: 150,
        numOfLectures: 4,
        price: 50.00,
        rating: 4.5
    },
    {
        image: course2,
        author: "Adel nsiem",
        title: "The complete course of programming object for beginners",
        category: "Programming",
        numOfVideos: 150,
        numOfLectures: 4,
        price: 50.00,
        rating: 4.5
    },
    {
        image: course1,
        author: "Adel nsiem",
        title: "The complete course of programming object for beginners",
        category: "Programming",
        numOfVideos: 150,
        numOfLectures: 4,
        price: 50.00,
        rating: 4.5
    },
    {
        image: course3,
        author: "Adel nsiem",
        title: "The complete course of programming object for beginners",
        category: "Programming",
        numOfVideos: 150,
        numOfLectures: 4,
        price: 50.00,
        rating: 4.5
    },
    {
        image: course1,
        author: "Adel nsiem",
        title: "The complete course of programming object for beginners",
        category: "Programming",
        numOfVideos: 150,
        numOfLectures: 4,
        price: 50.00,
        rating: 4.5
    },
    {
        image: course2,
        author: "Adel nsiem",
        title: "The complete course of programming object for beginners",
        category: "Programming",
        numOfVideos: 150,
        numOfLectures: 4,
        price: 50.00,
        rating: 4.5
    },



];
function ShopingCart() {
    return (
        <>
            <div className='flex justify-center place-content-center bg-stone-700 bg-opacity-8 p-[1.5rem]'>
                <h1 className='text-white text-[1rem] md:text-[1.5rem] xl:text-[2rem] font-semibold  tracking-wider'>Shopping Cart <FontAwesomeIcon icon={faShoppingCart} /></h1>
            </div>
        </>
    )
}

export default ShopingCart;