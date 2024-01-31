import programming from "../../assets/images/homepage/cartoon/1.jpg";
import DevelopmentImage from "../../assets/images/homepage/cartoon/programming-concept-illustration_114360-1351.jpg";
import SalesMarktingImage from "../../assets/images/homepage/cartoon/3.jpg";
import DrawingImage from "../../assets/images/homepage/cartoon/4.jpg";
import DataScienec from "../../assets/images/homepage/cartoon/men-woman-wearing-virtual-reality-glasses-working_1262-19284.jpg";
import StrategyImage from "../../assets/images/homepage/cartoon/6.jpg";
import BuisnessImage from "../../assets/images/homepage/cartoon/58074.jpg";
import PhtographyImage from "../../assets/images/homepage/cartoon/42429.jpg";


import '../TopCategories/topCategories.css'

function TopCategories() {
  return (
    <>
      <div className="container my-20">
        <h3 className=" text-3xl text-center lg:text-left font-bold  ">Top Categories</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
          <div className="ml-12 mt-7 md:ml-10 ">
            <img
              src={programming}
              className=" rounded-full border-4	   h-56 w-56 imgBorderColor "
              alt=""
            />
            <h2 className="my-5 font-black text-lg  ml-14 ">Programming</h2>
          </div>
          <div className="ml-12 mt-7 md:ml-10">
            <img
              src={DevelopmentImage}
              className=" rounded-full   h-56 w-56 border-4 imgBorderColor"
              alt=""
            />
            <h2 className="my-5 font-black text-lg  ml-14 ">Development</h2>
          </div>
          <div className="ml-12 mt-7 md:ml-10">
            <img
              src={SalesMarktingImage}
              className=" rounded-full   h-56 w-56 border-4 imgBorderColor"
              alt=""
            />
            <h2 className="my-5 font-black text-lg ml-14 ">Sales & Markting</h2>
          </div>
          <div className="ml-12 mt-7 md:ml-10">
            <img
              src={DrawingImage}
              className=" rounded-full   h-56 w-56 border-4 imgBorderColor"
              alt=""
            />
            <h2 className="my-5 font-black text-lg  ml-20 ">Drawing</h2>
          </div>
          <div className="ml-12 mt-7 md:ml-10">
            <img
              src={DataScienec}
              className=" rounded-full   h-56 w-56 border-40 imgBorderColor"
              alt=""
            />
            <h2 className="my-5 font-black text-lg  ml-14  ">Data Science</h2>
          </div>
          <div className="ml-12 mt-7 md:ml-10">
            <img
              src={StrategyImage}
              className=" rounded-full   h-56 w-56 border-4 imgBorderColor"
              alt=""
            />
            <h2 className="my-5 font-black text-lg  ml-14 ">Strategy</h2>
          </div>
          <div className="ml-12 mt-7 md:ml-10">
            <img
              src={BuisnessImage}
              className=" rounded-full   h-56 w-56 border-4 imgBorderColor"
              alt=""
            />
            <h2 className="my-5 font-black text-lg  ml-14 ">Buisness</h2>
          </div>

          <div className="ml-12 mt-7 md:ml-10">
            <img
              src={PhtographyImage}
              className=" rounded-full   h-56 w-56 border-4 imgBorderColor"
              alt=""
            />
            <h2 className="my-5 font-black text-lg  ml-14 ">Photography</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCategories;
