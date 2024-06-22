import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavSearch = () => {
  return (
    <div className="relative flex items-stretch">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute z-10 text-gray-400 left-2 top-1/3"
      />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for anything..."
        className="px-1 md:px-4 md:pl-8 font-semibold py-3 text-xs outline-none tracking-wide rounded-[3px] rounded-r-none border border-neutral-800 text-neutral-800 caret-neutral-800"
      />
      <button className="bg-neutral-800 duration-200 hover:bg-neutral-900 uppercase text-white px-4 py-3 rounded-r-[3px]">
        Search
      </button>
      <div>{/* Dropdown menu for search results */}</div>
    </div>
  );
};

export default NavSearch;
