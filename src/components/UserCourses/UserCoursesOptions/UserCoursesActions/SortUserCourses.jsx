import { faAngleDown, faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const sortFilterClasses = {
  div: "items-center justify-center xl:justify-evenly gap-1 xl:gap-2 py-3 md:py-4 px-2 rounded-[5px] cursor-pointer border-2 border-zinc-600 duration-200 hover:bg-zinc-700 hover:text-white flex",
  h4: "text-xs font-bold tracking-wide lg:text-sm xl:text-base",
};

const SortUserCourses = () => {
  return (
    <div className={sortFilterClasses.div}>
      <FontAwesomeIcon icon={faArrowDownAZ} />
      <h4 className={sortFilterClasses.h4}>Sort</h4>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};

export default SortUserCourses;
