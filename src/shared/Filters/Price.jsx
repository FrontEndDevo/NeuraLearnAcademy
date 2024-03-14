import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const prices = [
  { price: "paid", totalCourses: 10 },
  { price: "free", totalCourses: 5 },
];
const Price = () => {
  const [arePricesOpen, setArePricesOpen] = useState(true);
  const [selectedPrices, setSelectedPrices] = useState([]);

  // Select the price.
  const selectPriceHandler = (e) => {
    const selectedPrice = e.target.value;
    // If the price is already selected, remove it from the selected prices.
    if (selectedPrices.includes(selectedPrice)) {
      setSelectedPrices((prevPrices) =>
        prevPrices.filter((price) => price !== selectedPrice)
      );
      // If the price is not selected, add it to the selected prices.
    } else {
      setSelectedPrices((prevPrices) => [...prevPrices, selectedPrice]);
    }
  };
  // Render the prices.
  const renderPrices = prices.map((item, index) => (
    <div key={index} className="flex items-center mb-2 text-sm">
      <input
        type="checkbox"
        id={item.price}
        name={item.price}
        value={item.price}
        className="mr-2"
        checked={selectedPrices.includes(item.price)}
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
      <div className="items-center justify-between hidden mb-4 md:flex">
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
