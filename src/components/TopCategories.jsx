
import React from 'react'

import programming from '../assets/images/homepage/cartoon/1.jpg'
import DevelopmentImage from '../assets/images/homepage/cartoon/programming-concept-illustration_114360-1351.jpg'
import SalesMarktingImage from '../assets/images/homepage/cartoon/3.jpg'
import DrawingImage from '../assets/images/homepage/cartoon/4.jpg'
import DataScienec from '../assets/images/homepage/cartoon/men-woman-wearing-virtual-reality-glasses-working_1262-19284.jpg'
import StrategyImage from '../assets/images/homepage/cartoon/6.jpg'
import BuisnessImage from '../assets/images/homepage/cartoon/58074.jpg'
import PhtographyImage from '../assets/images/homepage/cartoon/42429.jpg'

function TopCategories() {
    return (

        <>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen pt-8' >
                <h3 className=' text-2xl text-center lg:text-left '>Top Categories</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <div className='ml-12 mt-7 md:ml-10 '>
                        <img src={programming} className=' rounded-full   h-56 w-56 border-2 border-indigo-900' alt="" />
                        <h2 className='my-5 font-bold  ml-16 '>Programming</h2>
                    </div>
                    <div className='ml-12 mt-7 md:ml-10'>
                        <img src={DevelopmentImage} className=' rounded-full   h-56 w-56 border-2 border-indigo-900' alt="" />
                        <h2 className='my-5 font-bold  ml-16 '>Development</h2>
                    </div>
                    <div className='ml-12 mt-7 md:ml-10'>
                        <img src={SalesMarktingImage} className=' rounded-full   h-56 w-56 border-2 border-indigo-900' alt="" />
                        <h2 className='my-5 font-bold  ml-16 '>Sales & Markting</h2>
                    </div>
                    <div className='ml-12 mt-7 md:ml-10'>
                        <img src={DrawingImage} className=' rounded-full   h-56 w-56 border-2 border-indigo-900' alt="" />
                        <h2 className='my-5 font-bold  ml-16 '>Drawing</h2>
                    </div>
                    <div className='ml-12 mt-7 md:ml-10'>
                        <img src={DataScienec} className=' rounded-full   h-56 w-56 border-2 border-indigo-900' alt="" />
                        <h2 className='my-5 font-bold  ml-16 '>Data Science</h2>
                    </div>
                    <div className='ml-12 mt-7 md:ml-10'>
                        <img src={StrategyImage} className=' rounded-full   h-56 w-56 border-2 border-indigo-900' alt="" />
                        <h2 className='my-5 font-bold  ml-16 '>Strategy</h2>
                    </div>
                    <div className='ml-12 mt-7 md:ml-10'>
                        <img src={BuisnessImage} className=' rounded-full   h-56 w-56 border-2 border-indigo-900' alt="" />
                        <h2 className='my-5 font-bold  ml-16 '>Buisness</h2>
                    </div>

                    <div className='ml-12 mt-7 md:ml-10'>
                        <img src={PhtographyImage} className=' rounded-full   h-56 w-56 border-2 border-indigo-900' alt="" />
                        <h2 className='my-5 font-bold  ml-16 '>Photography</h2>
                    </div>



                </div>
            </div>
        </>
    )
}

export default TopCategories