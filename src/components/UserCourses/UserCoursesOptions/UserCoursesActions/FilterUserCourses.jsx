import { faAngleDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sortFilterClasses } from "./SortUserCourses";

const FilterUserCourses = () => {
  return (
    <div className={sortFilterClasses.div}>
      <FontAwesomeIcon icon={faSliders} />
      <h4 className={sortFilterClasses.h4}>Filter</h4>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};
export default FilterUserCourses;
