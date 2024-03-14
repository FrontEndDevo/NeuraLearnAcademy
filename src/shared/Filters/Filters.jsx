import React from "react";
import { faAngleDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sortFilterClasses } from "../../components/UserCourses/UserCoursesOptions/UserCoursesActions/SortUserCourses";

const Filters = React.memo(() => {
  return (
    <div className={sortFilterClasses.div}>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faSliders} />
        <h4 className={sortFilterClasses.header}>Filter</h4>
      </div>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
});

Filters.displayName = "Filters";

export default Filters;
