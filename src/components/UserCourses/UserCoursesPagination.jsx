/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const UserCoursesPagination = React.memo((props) => {
  const [currentPage, setCurrentPage] = useState(1);
  // Pagination elements classes to keep JSX lean.
  const pageNumberClasses =
    "relative inline-flex items-center p-2 mx-1 text-sm font-bold text-primary-700 duration-300 rounded-lg hover:bg-primary-500 hover:text-white";

  const prevNextBtnsClasses =
    "py-2 px-4 mx-2 text-xl hover:bg-gray-800 hover:text-white duration-200 rounded-full disabled:text-gray-400 border disabled:border-gray-400 border-black disabled:hover:bg-inherit";

  // Number of products we want to show per page:
  const productsPerPage = 6;

  // Calculate the total pages (6 products):
  const totalPages = Math.ceil(props.coursesLength / productsPerPage);

  // Send back the page index to change the products when click a page number:
  const changePageHandler = (pageIndex) => {
    setCurrentPage(pageIndex);

    // Send page number to parent component.
    props.getCurrentPage(pageIndex, productsPerPage);
  };

  const previousPageHandler = () => {
    setCurrentPage(currentPage - 1);
    props.getCurrentPage(currentPage - 1, productsPerPage);
  };

  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
    props.getCurrentPage(currentPage + 1, productsPerPage);
  };

  const renderedPages =
    currentPage <= totalPages - 2 &&
    Array.from({ length: 1 }, (_, i) => currentPage + 1 + i).map((item) => (
      <button
        key={item}
        onClick={() => changePageHandler(item)}
        className={pageNumberClasses}
        page-number={item}
      >
        {item}
      </button>
    ));

  return (
    <div
      className={`${
        totalPages <= 1 ? "hidden" : "flex"
      } flex-col items-center justify-center flex-1 gap-4 mx-2 mt-8 md:flex-row`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex">
          <button
            disabled={currentPage == 1}
            onClick={previousPageHandler}
            className={prevNextBtnsClasses}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div>
            <button
              onClick={() => changePageHandler(1)}
              className={pageNumberClasses}
              page-number={1}
            >
              1
            </button>

            {currentPage != 1 && (
              <span className="text-2xl text-primary-700">...</span>
            )}

            {renderedPages}

            {currentPage != totalPages - 2 && (
              <span className="text-2xl text-primary-700">
                {currentPage != totalPages - 1 && "..."}
              </span>
            )}

            <button
              onClick={() => changePageHandler(totalPages)}
              className={pageNumberClasses}
              page-number={totalPages}
            >
              {totalPages}
            </button>
          </div>

          <button
            disabled={currentPage == totalPages}
            className={prevNextBtnsClasses}
            onClick={nextPageHandler}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
});

UserCoursesPagination.displayName = "UserCoursesPagination";

export default UserCoursesPagination;
