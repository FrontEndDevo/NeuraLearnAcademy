import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SortUserCourses from "./SortUserCourses";
import FilterUserCourses from "./FilterUserCourses";

const UserCoursesActions = React.memo(() => {
  const [areActionsOpen, setAreActionsOpen] = useState(false);

  return (
    <div className="md:my-6">
      <div className="items-center justify-between hidden md:flex">
        <h4 className="text-xs font-bold tracking-wide lg:text-base">
          List Actions
        </h4>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={() => setAreActionsOpen((prevState) => !prevState)}
          className={`duration-300 mr-2 text-zinc-800 cursor-pointer ${
            areActionsOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`grid items-center grid-cols-2 relative duration-300 w-full gap-4 xl:w-5/6 mt-6 ${
          areActionsOpen
            ? "opacity-100 translate-y-0"
            : "md:opacity-0 md:-translate-y-5"
        }`}
      >
        <SortUserCourses />
        <FilterUserCourses />
      </div>
    </div>
  );
});

UserCoursesActions.displayName = "UserCoursesActions";

export default UserCoursesActions;
