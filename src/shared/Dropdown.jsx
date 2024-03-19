import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PropTypes from "prop-types";

/*
 Dropdown Component:
 - options: An array of strings representing the dropdown options.
 - getSelectedOption: A function that will be called when an option is selected. It will receive the selected option as a parameter.
 - label: A string representing the label to display when no option is selected.
 */
const Dropdown = ({ options, getSelectedOption, label }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const selectOptionHandler = (option) => {
    setSelectedOption(option);
    getSelectedOption(option);
    setIsDropdownOpen(false);
  };
  return (
    <div className="relative my-4">
      <div
        onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        className="items-center justify-between py-3 md:py-4 px-2 rounded-[5px] cursor-pointer duration-200 hover:bg-slate-50 border-2 flex"
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
        className={`absolute gap-2 z-50 duration-200 w-full p-2 border-2 bg-white shadow-lg rounded-md ${
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
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  getSelectedOption: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Dropdown;
