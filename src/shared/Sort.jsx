import { faAngleDown, faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const sortOptions = ["most viewed", "highest related", "newest"];

const Sort = React.memo(() => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const chooseSortOption = (option) => {
    setSelectedOption(option);
    setIsSortOpen(false);
  };

  const sortDropdown = sortOptions.map((opt, i) => (
    <li
      key={i}
      onClick={() => chooseSortOption(opt)}
      className="px-3 py-2 text-sm font-semibold capitalize duration-200 cursor-pointer hover:bg-indigo-500 hover:text-white"
    >
      {opt}
    </li>
  ));

  return (
    <div className="relative">
      <div
        onClick={() => setIsSortOpen((prevState) => !prevState)}
        className="items-center justify-between py-3 md:py-4 px-2 rounded-[5px] cursor-pointer border-b-2 border-zinc-600 duration-200 hover:bg-zinc-700 hover:text-white flex"
      >
        <div className="flex items-center gap-2">
          {!selectedOption && <FontAwesomeIcon icon={faArrowDownAZ} />}
          <h4 className="text-xs font-bold tracking-wide lg:text-sm xl:text-base">
            {selectedOption ? selectedOption : "Sort by"}
          </h4>
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`duration-200 ${isSortOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <ul
        className={`absolute z-50 duration-200 w-full p-2 bg-white border shadow-lg rounded-md ${
          isSortOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {sortDropdown}
      </ul>
    </div>
  );
});

Sort.displayName = "Sort";

export default Sort;
