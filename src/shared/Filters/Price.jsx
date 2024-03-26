import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPrice } from "../../redux/slices/Filters/prices";
const prices = [
  { price: "paid", totalCourses: 10 },
  { price: "free", totalCourses: 5 },
];
const Price = () => {
  const [arePricesOpen, setArePricesOpen] = useState(true);

  const dispatch = useDispatch();

  const selectPriceHandler = (price) => {
    dispatch(setPrice(price.target.value));
  };

  // Render the prices.
  const renderPrices = prices.map((item, index) => (
    <div key={index} className="flex items-center mb-2 text-sm">
      <input
        type="radio"
        id={item.price}
        name="price"
        value={item.price}
        className="mr-2"
        onChange={selectPriceHandler}
      />
      <label htmlFor={item.price} className="mr-1 font-semibold capitalize">
        {item.price}
      </label>
      <span className="text-gray-500 text-opacity-60 ">
        ({item.totalCourses})
      </span>
    </div>
  ));

  return (
    <div className="py-4 border-b-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Price</h2>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={() => setArePricesOpen((prevState) => !prevState)}
          className={`duration-300 mr-2 text-zinc-800 cursor-pointer ${
            arePricesOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {arePricesOpen && renderPrices}
    </div>
  );
};

export default Price;
