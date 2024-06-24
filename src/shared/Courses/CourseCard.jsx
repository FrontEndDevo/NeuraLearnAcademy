import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse } from "../../redux/actions/courses-methods";
import { setIsSpinnerLoading } from "../../redux/slices/popups-slices/spinner-slice";

const CourseCard = (props) => {
  const {
    title,
    overview,
    instructor,
    subject,
    image,
    rate,
    price,
    discount,
    slug,
    type,
  } = props;

  const coursePrice = +price;

  const dispatch = useDispatch();

  const access = useSelector((state) => state.userAuth.access);

  const handleEnrollClick = async () => {
    dispatch(setIsSpinnerLoading(true));

    await enrollCourse(dispatch, access, slug);

    dispatch(setIsSpinnerLoading(false));
  };

  return (
    <li className="duration-300 border shadow-lg rounded-3xl hover:shadow-2xl">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 rounded-t-3xl"
          loading="lazy"
        />
      )}
      <div className="p-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-gray-color-500 md:text-sm">
            {instructor}
          </h4>

          {subject && (
            <p className="px-2 py-1 !text-sm font-bold text-white rounded-full w-fit lg:text-base bg-secondary-700 ">
              {subject}
            </p>
          )}
        </div>

        <h3 className="my-2 text-base font-semibold text-start lg:text-xl text-gray-color-700">
          {title.length <= 50 ? title : title.slice(0, 50) + "..."}
        </h3>

        {overview && (
          <p className="text-xs">
            {overview.length <= 100 ? overview : overview.slice(0, 100) + "..."}
          </p>
        )}

        {type === "Enroll" ? (
          <button
            onClick={() => {
              handleEnrollClick();
            }}
            className="w-full px-12 py-2 my-2 text-xs text-white duration-300 rounded-full md:px-8 lg:px-10 lg:py-3 md:text-sm bg-primary-500 hover:bg-primary-700"
          >
            Enroll Free
          </button>
        ) : (
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
          {coursePrice > 0 && (
            <p
              className={`text-2xl font-bold ${
                discount && discount === 100 ? "text-[#3AA552]" : ""
              }`}
            >
              {discount
                ? discount === 100
                  ? "Free"
                  : `$${(coursePrice - (coursePrice * discount) / 100).toFixed(
                      2
                    )}`
                : `$${coursePrice.toFixed(2)}`}
            </p>
          )}
          {discount > 0 && discount < 100 && (
            <>
              <span className="text-base font-semibold text-gray-500 line-through">
                ${coursePrice.toFixed(2)}
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
  instructor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  overview: PropTypes.string,
  image: PropTypes.string,
  progress: PropTypes.number,
  rate: PropTypes.number,
  discount: PropTypes.number,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default CourseCard;
