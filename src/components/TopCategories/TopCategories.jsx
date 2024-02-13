
import { Link } from "react-router-dom";

import programming from "../../assets/images/homepage/cartoon/1.jpg";
import DevelopmentImage from "../../assets/images/homepage/cartoon/programming-concept-illustration_114360-1351.jpg";
import SalesMarktingImage from "../../assets/images/homepage/cartoon/3.jpg";
import DrawingImage from "../../assets/images/homepage/cartoon/4.jpg";
import DataScienec from "../../assets/images/homepage/cartoon/men-woman-wearing-virtual-reality-glasses-working_1262-19284.jpg";
import StrategyImage from "../../assets/images/homepage/cartoon/6.jpg";
import BuisnessImage from "../../assets/images/homepage/cartoon/58074.jpg";
import PhtographyImage from "../../assets/images/homepage/cartoon/42429.jpg";



var CategoriesData = [
  {
    category: "Development",
    img: programming
  },
  {
    category: "Programming",
    img: DevelopmentImage
  },
  {
    category: "Sales & Markting",
    img: SalesMarktingImage
  },
  {
    category: "Drawing",
    img: DrawingImage
  },

  {
    category: "Strategy",
    img: StrategyImage
  },
  {
    category: "Data Science",
    img: DataScienec
  }, {
    category: "Buisness",
    img: BuisnessImage
  },
  {
    category: "Photography",
    img: PhtographyImage
  },
]


function TopCategories() {
  ;
  return (
    <>
      <div className="container my-10 xl:my-20 ">
        <h3 className=" text-3xl text-center xl:text-left font-bold ml-3 mb-5">Top Categories</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap:0 ">
          {CategoriesData.map((item, index) => {
            return (
              <>
                <li key={index} className="my-2 md:my-5">
                  <Link className="flex flex-col justify-center items-center" to={item.category}>
                    <img
                      src={item.img}
                      className="rounded-full border-4 border-secondary-700  h-28 w-28 sm:h-32 sm:w-32 md:w-40 md:h-40 lg:w-56 lg:h-56 transition duration-300 transform hover:scale-105"
                      alt={item.category}
                      loading="lazy"
                    />
                    <h2 className="my-3 font-extrabold text-sm md:text-lg">{item.category}</h2>
                  </Link>
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default TopCategories;
