/* eslint-disable react/prop-types */
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArchway,
  faList,
  faMoneyCheckDollar,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import UserCoursesActions from "./UserCoursesActions";
import SearchBar from "../../shared/SearchBar";

const userOptions = [
  {
    icon: faTableList,
    name: "courses",
  },
  {
    icon: faList,
    name: "my lists",
  },
  {
    icon: faHeart,
    name: "wishlist",
  },
  {
    icon: faArchway,
    name: "archived",
  },
];

const UserCoursesOptions = React.memo(({ option, chooseUserOption }) => {
  const renderedAllUserOptions = userOptions.map((item, index) => (
    <li
      onClick={() => chooseUserOption(index)}
      key={index}
      className={`p-2 md:p-4 rounded flex items-center hover:bg-primary-500 hover:text-white gap-2 md:gap-4 cursor-pointer duration-200 ${
        index == option
          ? "bg-primary-500 hover:bg-primary-700 text-white"
          : "text-gray-500"
      }`}
    >
      <FontAwesomeIcon icon={item.icon} className="text-sm md:text-2xl" />
      <span className="text-xs font-bold capitalize md:text-sm">
        {item.name}
      </span>
    </li>
  ));

  return (
    <aside>
      <ul className="flex flex-wrap justify-center gap-4 md:border-b-4 md:flex-col">
        {renderedAllUserOptions}
        <li className="flex items-center gap-2 p-2 text-red-400 duration-200 rounded cursor-not-allowed md:p-4 md:gap-4">
          <FontAwesomeIcon
            icon={faMoneyCheckDollar}
            className="text-sm md:text-2xl"
          />
          <span className="text-xs font-bold capitalize md:text-sm">
            purchased (coming soon)
          </span>
        </li>
      </ul>
      <div className="grid grid-cols-1 mx-auto md:block">
        <SearchBar />
        <UserCoursesActions />
      </div>
    </aside>
  );
});

UserCoursesOptions.displayName = "UserCoursesOptions";

export default UserCoursesOptions;
