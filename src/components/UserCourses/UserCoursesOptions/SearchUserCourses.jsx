import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchUserCourses = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="my-6">
      <div className="items-center justify-between hidden md:flex">
        <h4 className="text-xs font-bold tracking-wide lg:text-base">
          Search your enrollments
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
          type="text"
          name="courses"
          id="courses"
          placeholder="Search my courses"
          className="w-full px-1 md:px-4 font-semibold py-3 text-xs xl:text-base border border-r-0 outline-none tracking-wide rounded-[3px] border-zinc-600 caret-gray-color-700"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute top-0 right-0 px-1 rounded-r-[3px] w-[29px] h-[42px] xl:h-[50px] text-white bg-zinc-600"
        />
      </form>
    </div>
  );
};

export default SearchUserCourses;
