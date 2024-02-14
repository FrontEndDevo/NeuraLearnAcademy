import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArchway,
  faList,
  faMoneyCheckDollar,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
  {
    icon: faMoneyCheckDollar,
    name: "purchase",
  },
];
const UserCoursesOptions = () => {
  const [currentOption, setCurrentOption] = useState(0);

  const chooseAnOptionHandler = (index) => {
    setCurrentOption(index);
  };
  const renderedAllUserOptions = userOptions.map((item, index) => (
    <li
      onClick={() => chooseAnOptionHandler(index)}
      key={index}
      className={`p-4 rounded flex items-center hover:bg-primary-500 hover:text-white gap-4 cursor-pointer duration-200 ${
        index == currentOption
          ? "bg-primary-500 hover:bg-primary-700 text-white"
          : "text-gray-500"
      }`}
    >
      <FontAwesomeIcon icon={item.icon} className="text-2xl" />
      <span className="text-sm font-bold capitalize">{item.name}</span>
    </li>
  ));

  return (
    <aside>
      <ul className="flex flex-col gap-4 border-b-4 ">
        {renderedAllUserOptions}
      </ul>
    </aside>
  );
};

export default UserCoursesOptions;
