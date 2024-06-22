const NavSearch = () => {
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for anything..."
        className="w-full px-1 md:px-4 font-semibold py-3 text-xs border border-r-0 outline-none tracking-wide rounded-[3px] border-zinc-600 caret-gray-color-700"
      />
      <button className="bg-blue-700 text-white px-4 py-3 rounded-r-[3px]">
        Search
      </button>
      <div>{/* Dropdown menu for search results */}</div>
    </div>
  );
};

export default NavSearch;
