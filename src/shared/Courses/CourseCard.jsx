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

  // Classes:
  const progressBarClasses = "absolute top-0 left-0 h-1 rounded-full";
  const threeDotsClasses = "w-2 h-2 rounded-full bg-gray-color-500";

  return (
    <li className="border shadow-lg h-[34rem] md:h-[36rem] lg:h-[44rem] xl:h-[40rem] 2xl:h-[38rem] rounded-3xl">
      <img
        src={image}
        alt={title}
        className="w-full h-1/2 rounded-t-3xl"
        loading="lazy"
      />
      <div className="p-2">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-bold text-gray-color-500 md:text-sm">
            {instructor}
          </span>
          <div className="flex gap-1 p-2 cursor-pointer lg:hover:animate-pulse">
            {Array.from({ length: 3 }, (_, i) => (
              <span key={i} className={threeDotsClasses} />
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
        {progress && (
          <div className="relative my-4">
            <span
              style={{ width: `${progress}%` }}
              className={`${progressBarClasses} duration-500 bg-primary-500`}
            />
            <span
              className={`${progressBarClasses} w-full bg-[#82818166] -z-10`}
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
        {rate && (
          <div>
            <p>{rate.toFixed(1)}</p>
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
        {price && (
          <p>
            $
            {discount
              ? (price - (price * discount) / 100).toFixed(2)
              : price.toFixed(2)}
            {<span>{price.toFixed(2)}</span>}
          </p>
        )}
        {discount && <p>{discount == 100 ? "free" : `${discount}%`}</p>}
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
