import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../redux/slices/searchCourses";

const SearchBar = React.memo(() => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  // To store the final value of the search input.
  const searchInputRef = useRef();

  const dispatch = useDispatch();
  // Store the search keyword in the redux store.
  const searchCoursesHandler = () => {
    dispatch(setSearchKeyword(searchInputRef.current.value));
  };

  return (
    <div className="md:my-6">
      <div className="items-center justify-between hidden md:flex">
        <h4 className="text-xs font-bold tracking-wide lg:text-base">
          Search for a course
        </h4>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={() => setIsSearchOpen((prevState) => !prevState)}
          className={`duration-300 mr-2 text-zinc-800 cursor-pointer ${
            isSearchOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <form
        className={`relative duration-300 w-full xl:w-5/6 mt-6 ${
          isSearchOpen
            ? "opacity-100 translate-y-0"
            : "md:opacity-0 md:-translate-y-5"
        }`}
      >
        <input
          ref={searchInputRef}
          type="text"
          name="courses"
          id="courses"
          placeholder="Write a course name"
          className="w-full px-1 md:px-4 font-semibold py-3 text-xs border border-r-0 outline-none tracking-wide rounded-[3px] border-zinc-600 caret-gray-color-700"
          disabled={!isSearchOpen}
        />
        <FontAwesomeIcon
          onClick={searchCoursesHandler}
          icon={faMagnifyingGlass}
          className={`absolute top-0 cursor-pointer right-0 px-2 rounded-r-[3px] w-[35px] h-[42px] text-white bg-zinc-600 duration-200 hover:bg-zinc-800 ${
            !isSearchOpen ? "pointer-events-none" : ""
          }`}
        />
      </form>
    </div>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;
