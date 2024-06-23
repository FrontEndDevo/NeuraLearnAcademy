import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchResultsDropdown from "./SearchResultsDropdown";

const NavSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");

  // Get all the courses from the store.
  const neuraLearnAcademyCourses = useSelector(
    (state) => state.courses.publicCourses
  );

  // Find the courses based on the search keyword.
  const findResults = (keyword) => {
    if (keyword) {
      const results = neuraLearnAcademyCourses.filter((course) =>
        course.title.trim().toLowerCase().includes(keyword)
      );

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchedKeyword = (e) => {
    const keyword = e.target.value.trim().toLowerCase();

    setSearchedKeyword(keyword);

    // Filter the courses based on the search keyword.
    findResults(keyword);
  };

  const handleNavSearch = () => {
    // Filter the courses based on the search keyword.
    findResults(searchedKeyword);
  };

  return (
    <div className="relative flex items-stretch w-full">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute z-10 hidden text-gray-400 md:block left-2 top-1/3"
      />
      <input
        type="text"
        onChange={handleSearchedKeyword}
        name="search"
        id="search"
        placeholder="Search for anything..."
        className="w-full px-2 md:px-4 md:pl-8 font-semibold py-3 text-xs outline-none tracking-wide rounded-[3px] rounded-r-none border border-neutral-800 text-neutral-800 caret-neutral-800"
      />
      <button
        onClick={handleNavSearch}
        className={`bg-neutral-800 duration-200 hover:bg-neutral-900 text-xs md:text-base uppercase px-4 py-3 rounded-r-[3px] ${
          searchResults.length == 0 && searchedKeyword
            ? "text-red-500"
            : "text-white"
        } border border-neutral-800`}
      >
        Search
      </button>
      <SearchResultsDropdown results={searchResults} />
    </div>
  );
};

export default NavSearch;
