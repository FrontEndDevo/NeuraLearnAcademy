import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function TopCategories() {
  const allCategories = useSelector((state) => state.courses.subjectCourses);

  const renderCategories = allCategories.map((item) => {
    return (
      <li key={item.id} className="my-2 md:my-5">
        <Link
          className="flex flex-col items-center justify-center"
          to={`/all-courses/${item.slug}`}
        >
          <img
            src={item.image}
            className="transition duration-300 transform border-4 rounded-full border-secondary-700 h-28 w-28 sm:h-32 sm:w-32 md:w-40 md:h-40 lg:w-56 lg:h-56 hover:scale-105"
            alt={item.title}
            loading="lazy"
          />
          <h2 className="my-3 text-sm font-extrabold md:text-lg">
            {item.title}
          </h2>
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className="container my-10 xl:my-20 ">
        <h3 className="mb-5 ml-3 text-3xl font-bold text-center xl:text-left">
          Top Categories
        </h3>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {renderCategories}
        </ul>
      </div>
    </>
  );
}

export default TopCategories;
