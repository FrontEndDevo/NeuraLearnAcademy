/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Pagination component accepts the following props:
 * - elementsPerPage: The number of elements to display per page.
 * - length: The total number of elements.
 * - getCurrentPage: A callback function that receives the current page index and elements per page when a page is clicked.
 */
const Pagination = React.memo(({ elementsPerPage, length, getCurrentPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total pages (6 products):
  const totalPages = Math.ceil(length / elementsPerPage);

  // Send back the page index to change the products when click a page number:
  const changePageHandler = (pageIndex) => {
    setCurrentPage(pageIndex);

    // Send page number to parent component.
    getCurrentPage(pageIndex);
  };

  // Previous and next page handlers:
  const previousPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getCurrentPage(currentPage - 1);
    }
  };

  const nextPageHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      getCurrentPage(currentPage + 1);
    }
  };

  // Pagination elements classes to keep JSX lean.
  const pageNumberClasses =
    "relative inline-flex items-center p-2 mx-1 text-sm font-bold text-primary-700 duration-300 rounded-lg hover:bg-primary-500 hover:text-white";

  const prevNextBtnsClasses =
    "py-2 px-4 mx-2 text-xl hover:bg-gray-800 hover:text-white duration-200 rounded-full disabled:text-gray-400 border disabled:border-gray-400 border-black disabled:hover:bg-inherit";

  // Render the page numbers:
  const renderedPages =
    currentPage <= totalPages - 2 &&
    Array.from({ length: 1 }, (_, i) => currentPage + 1 + i).map((item) => (
      <button
        key={item}
        onClick={() => changePageHandler(item)}
        className={pageNumberClasses}
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
      <div className="flex items-center justify-between w-full gap-2">
        <p className="text-xl font-bold select-none">
          Page:{" "}
          <span className="text-[#008374] underline border-b-2 border-[#008374]">
            {currentPage}
          </span>
        </p>
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
              >
                1
              </button>

              {currentPage > 2 && (
                <span className="text-2xl text-primary-700">...</span>
              )}

              {renderedPages}

              {currentPage < totalPages - 1 && (
                <span className="text-2xl text-primary-700">...</span>
              )}

              <button
                onClick={() => changePageHandler(totalPages)}
                className={pageNumberClasses}
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
    </div>
  );
});

// Memoize the component to avoid unnecessary re-renders.
Pagination.displayName = "Pagination";

export default Pagination;
