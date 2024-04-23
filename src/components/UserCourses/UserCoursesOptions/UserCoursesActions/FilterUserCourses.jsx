import { faAngleDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sortFilterClasses } from "./SortUserCourses";

const FilterUserCourses = () => {
  return (
    <div className={sortFilterClasses.div}>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faSliders} />
        <h4 className={sortFilterClasses.header}>Filter</h4>
      </div>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};
export default FilterUserCourses;
