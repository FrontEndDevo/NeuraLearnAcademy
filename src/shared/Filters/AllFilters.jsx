import React, { useState } from "react";
import { faAngleDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Topics from "./Topics";
import Price from "./Price";
import Ratings from "./Ratings";

const AllFilters = React.memo(() => {
  const [areFiltersOpen, setAreFiltersOpen] = useState(true);
  return (
    <>
      <div
        onClick={() => setAreFiltersOpen((prevState) => !prevState)}
        className="items-center justify-between py-3 md:py-4 px-2 rounded-[5px] cursor-pointer border-b-2 border-zinc-600 duration-200 hover:bg-zinc-700 hover:text-white flex"
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faSliders} />
          <h4 className="text-xs font-bold tracking-wide lg:text-sm xl:text-base">
            Filters
          </h4>
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`duration-200 ${
            areFiltersOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div className={`${areFiltersOpen ? "block" : "hidden"}`}>
        <Ratings />
        <Topics />
        <Price />
      </div>
    </>
  );
});

AllFilters.displayName = "AllFilters";

export default AllFilters;
