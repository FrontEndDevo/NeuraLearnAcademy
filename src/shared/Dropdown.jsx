import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

/* eslint-disable react/prop-types */
const Dropdown = ({ options, getSelectedOption, label }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const selectOptionHandler = (option) => {
    setSelectedOption(option);
    getSelectedOption(option);
    setIsDropdownOpen(false);
  };
  return (
    <>
      <div
        onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        className="items-center justify-between py-3 md:py-4 px-2 rounded-[5px] cursor-pointer border-b-2 border-zinc-600 duration-200 hover:bg-zinc-700 hover:text-white flex"
      >
        <h4 className="text-xs font-bold tracking-wide capitalize lg:text-sm xl:text-base">
          {selectedOption ? selectedOption : label}
        </h4>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`duration-200 ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <ul
        className={`z-50 duration-200 w-full p-2 bg-white border shadow-lg rounded-md ${
          isDropdownOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {options.map((opt, i) => (
          <li
            key={i}
            onClick={() => selectOptionHandler(opt)}
            className="px-3 py-2 text-sm font-semibold capitalize duration-200 cursor-pointer hover:bg-indigo-500 hover:text-white"
          >
            {opt}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
