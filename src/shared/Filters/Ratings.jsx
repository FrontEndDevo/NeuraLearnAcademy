import { faAngleDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ratings = [
  { rate: 5, totalCourses: 10 },
  { rate: 4, totalCourses: 15 },
  { rate: 3, totalCourses: 20 },
  { rate: 2, totalCourses: 5 },
  { rate: 1, totalCourses: 8 },
];
const Ratings = () => {
  const [areRatingOpen, setAreRatingOpen] = useState(true);
  const [selectedRating, setSelectedRating] = useState(null);

  // Select the rating.
  const selectRateHandler = (e) => {
    setSelectedRating(+e.target.value);
  };

  // Render the prices.
  const renderRatings = ratings.map((item, index) => (
    <div key={index} className="flex items-center mb-2 text-sm">
      <input
        type="radio"
        id={item.rate}
        name="rating"
        value={item.rate}
        onChange={selectRateHandler}
      />
      <div className="mx-1">
        {Array.from({ length: 5 }, (_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={`text-yellow-500 mr-[2px] ${
              item.rate >= i + 1 ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <label htmlFor={item.rate} className="mr-1 font-semibold capitalize">
        {item.rate}
      </label>
      <span className="text-gray-500 text-opacity-60 ">
        ({item.totalCourses})
      </span>
    </div>
  ));

  return (
    <div className="py-4 border-b-2">
      <div className="items-center justify-between mb-4 flex">
        <h2 className="text-lg font-semibold">Ratings</h2>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={() => setAreRatingOpen((prevState) => !prevState)}
          className={`duration-300 mr-2 text-zinc-800 cursor-pointer ${
            areRatingOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {areRatingOpen && renderRatings}
    </div>
  );
};

export default Ratings;
