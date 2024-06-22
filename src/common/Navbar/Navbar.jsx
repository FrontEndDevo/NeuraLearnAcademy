import { Link } from "react-router-dom";
import nlaLogo from "../../assets/images/LoginSigin/logo.png";
import NavSearch from "./NavSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import defaultUserPicture from "../../assets/images/profile/unknown_user.webp";
import ProfileDropdown from "./ProfileDropdown";
import { useState } from "react";

const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "my learnings",
    link: "/my-learnings",
  },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTogglingProfileDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const navbarLinks = navLinks.map((item) => (
    <Link
      to={item.link}
      key={item.id}
      className="p-2 font-semibold capitalize duration-200 rounded-lg hover:bg-neutral-800 hover:text-white"
    >
      {item.title}
    </Link>
  ));

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-screen px-6 py-4 pr-20 bg-white shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src={nlaLogo} alt="NeuraLearnAcademy" className="w-10 h-10" />
          <h1 className="text-xl font-bold">NeuraLearnAcademy</h1>
        </div>
        <NavSearch />
      </div>

      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-10">{navbarLinks}</ul>
        <div className="flex items-center gap-4 font-semibold uppercase">
          <Link
            to="/login"
            className="px-4 py-2 duration-200 border rounded-lg border-neutral-800 hover:bg-neutral-200"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-white duration-200 rounded-lg bg-neutral-800 hover:bg-neutral-900"
          >
            Sign Up
          </Link>
        </div>

        <div
          onClick={handleTogglingProfileDropdown}
          className="relative flex items-center gap-1 pr-1 duration-200 rounded-full cursor-pointer hover:bg-gray-200"
        >
          <img
            src={defaultUserPicture}
            alt="My profile"
            className="w-8 h-8 p-1 border rounded-full border-neutral-800"
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            className={`w-2 h-2 duration-200 ${
              showDropdown ? "transform rotate-180" : ""
            }`}
          />
          <ProfileDropdown showOptions={showDropdown} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
