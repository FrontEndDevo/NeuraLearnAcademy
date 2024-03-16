import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseCard = ({
  image,
  title,
  instructor,
  category,
  progress,
  rate,
  price,
  discount,
}) => {
  const courseTitle = title.length <= 50 ? title : title.slice(0, 50) + "...";

  const progressButton =
    progress === 0
      ? "Start Learning"
      : progress === 100
      ? "Review"
      : "Continue Learning";

  return (
    <li className="border shadow-lg rounded-3xl">
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] rounded-t-3xl"
        loading="lazy"
      />
      <div className="px-4 py-2">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-bold text-gray-color-500 md:text-sm">
            {instructor}
          </span>
          <div className="flex gap-1 p-2 cursor-pointer lg:hover:animate-pulse">
            {Array.from({ length: 3 }, (_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-gray-color-500"
              />
            ))}
          </div>
        </div>
        <h3 className="my-4 text-base font-semibold leading-6 tracking-wide lg:text-xl text-gray-color-700">
          {courseTitle}
        </h3>

        {category && (
          <h6 className="px-3 py-1 text-[10px] lg:text-base font-bold text-white rounded-full bg-secondary-700 w-fit">
            {category}
          </h6>
        )}
        {progress != null && (
          <div className="relative my-4">
            <span
              style={{ width: `${progress}%` }}
              className={`absolute top-0 left-0 h-1 rounded-full duration-500 bg-primary-500`}
            />
            <span
              className={`absolute top-0 left-0 h-1 rounded-full w-full bg-[#82818166] -z-10`}
            />
            <p className="text-[9px] mb-4 pt-3 md:text-sm font-semibold">
              {progress}% complete
            </p>
            <Link
              to="/"
              className="flex items-center justify-center px-12 py-2 text-xs text-white duration-300 rounded-full md:px-8 lg:px-10 lg:py-3 md:text-sm bg-primary-500 hover:bg-primary-700"
            >
              {progressButton}
            </Link>
          </div>
        )}
        {rate != null && (
          <div className="flex items-center gap-1 mb-4">
            <p className="text-sm font-semibold">{rate.toFixed(1)}</p>
            <div>
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={i < Math.round(rate) ? solidStar : regularStar}
                  className={
                    i < Math.round(rate) ? "text-yellow-500" : "text-gray-500"
                  }
                />
              ))}
            </div>
          </div>
        )}
        {price != null && (
          <div className="flex items-center gap-2">
            <p
              className={`text-2xl font-bold ${
                discount === 100 ? "text-[#3AA552]" : ""
              }`}
            >
              {discount === 100
                ? "Free"
                : `$${(price - (price * discount) / 100).toFixed(2)}`}
            </p>
            {discount > 0 && discount < 100 && (
              <>
                <span className="text-base font-semibold text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
                <p className="text-base font-semibold">{`${discount}% off`}</p>
              </>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  progress: PropTypes.number,
  rate: PropTypes.number,
  price: PropTypes.number,
  discount: PropTypes.number,
};

export default CourseCard;
