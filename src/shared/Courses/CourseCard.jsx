import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse } from "../../redux/actions/courses-methods";

const CourseCard = ({
  image,
  title,
  instructor,
  category,
  rate,
  price,
  discount,
  overview,
  subject,
  slug,
  type
}) => {
  const courseTitle = title.length <= 50 ? title : title.slice(0, 50) + "...";
  const dispatch = useDispatch();
  const access = useSelector((state) => state.userAuth.access);
  const handleEnrollClick = () => {
    enrollCourse(dispatch, access ,slug)
  }
  return (
    <li className="duration-300 border shadow-lg rounded-3xl hover:shadow-innerwhite">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-60 rounded-t-3xl"
            loading="lazy"
          />
        )}
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
          <h3 className="my-2 text-base font-semibold text-start lg:text-xl text-gray-color-700">
            {courseTitle}
          </h3>

          {subject && (
            <h6 className="px-3 py-1 text-[10px] lg:text-base font-bold text-white rounded-full bg-secondary-700 w-fit">
              {subject}
            </h6>
          )}
          {type === "Enroll" ? (
            <button
            onClick={() => {
              handleEnrollClick();
              }}
              className="w-full px-12 py-2 my-4 text-xs text-white duration-300 rounded-full md:px-8 lg:px-10 lg:py-3 md:text-sm bg-primary-500 hover:bg-primary-700"
            >
              Enroll Free
            </button>
          )
            :
            (
              <Link
                to={`/UserContentPage/${slug}`}
                className="flex items-center justify-center px-12 py-2 my-4 text-xs text-white duration-300 rounded-full md:px-8 lg:px-10 lg:py-3 md:text-sm bg-primary-500 hover:bg-primary-700"
              >
                Start Learning
              </Link>
          )}
     
         
          {rate != null && (
            <div className="flex flex-wrap items-center gap-1 my-4 md:flex-nowrap">
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
          <div className="flex flex-wrap items-center gap-2 mt-2 md:flex-nowrap">
            {price != null && (
              <p
                className={`text-2xl font-bold ${discount && discount === 100 ? "text-[#3AA552]" : ""
                  }`}
              >
                {discount
                  ? discount === 100
                    ? "Free"
                    : `$${(price - (price * discount) / 100).toFixed(2)}`
                  : `$${price.toFixed(2)}`}
              </p>
            )}
            {discount > 0 && discount < 100 && (
              <>
                <span className="text-base font-semibold text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
                <p className="text-base font-semibold">{`${discount}% off`}</p>
              </>
            )}
          </div>
        </div>
    </li>
  );
};

CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string,
  progress: PropTypes.number,
  rate: PropTypes.number,
  discount: PropTypes.number,
};

export default CourseCard;
