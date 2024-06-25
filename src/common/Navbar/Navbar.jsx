import { Link } from "react-router-dom";
import nlaLogo from "../../assets/images/LoginSigin/logo.png";
import NavSearch from "./NavSearch/NavSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import defaultUserPicture from "../../assets/images/profile/unknown_user.webp";
import ProfileDropdown from "./ProfileDropdown";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavbarLinks from "./NavbarLinks";
import LinksDropdown from "./LinksDropdown";

const navbarOptions = [
  {
    id: 1,
    title: "home",
    link: "/",
    requireAuth: false,
  },

  {
    id: 2,
    title: "my learnings",
    link: "/my-learnings",
    requireAuth: true,
  },
  {
    id: 3,
    title: "contact us",
    link: "/contact-us",
    requireAuth: true,
  },
  {
    id: 4,
    title: "about us",
    link: "/about-us",
    requireAuth: false,
  },
];

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLinksDropdown, setShowLinksDropdown] = useState(false);
  const isMobile = useState(window.innerWidth < 1024);

  // Handle window resizing (smaller than the laptop screen (1024px)).
  useEffect(() => {
    window.addEventListener("resize", () => {
      isMobile[1](window.innerWidth < 1024);
    });

    return () => {
      window.removeEventListener("resize", () => {
        isMobile[1](window.innerWidth < 1024);
      });
    };
  }, [isMobile]);

  const userAuth = useSelector((state) => state.userAuth);
  const { isAuthenticated, user } = userAuth;

  const handleTogglingProfileDropdown = () => {
    setShowProfileDropdown((prevState) => !prevState);
  };

  const handleTogglingLinksDropdown = () => {
    setShowLinksDropdown((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 z-50 flex flex-col items-center justify-between w-screen gap-4 px-6 py-4 bg-white shadow-lg lg:flex-row lg:pr-20">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center w-1/2 gap-14">
          <Link to="/" className="flex items-center gap-2">
            <img src={nlaLogo} alt="NeuraLearnAcademy" className="w-10 h-10" />
            <h1 className="text-xl font-bold tracking-widest md:hidden lg:block xl:hidden">
              <span className="text-primary-500">N</span>
              <span className="text-[#FFD23F]">L</span>
              <span className="text-[#337357]">A</span>
            </h1>
            <h1 className="hidden text-xl font-bold md:block lg:hidden xl:block">
              NeuraLearnAcademy
            </h1>
          </Link>
          {!isMobile[0] && <NavSearch />}
        </div>

        <div className="flex items-center gap-4 xl:gap-10">
          {!isMobile[0] && (
            <NavbarLinks links={navbarOptions} isAuth={isAuthenticated} />
          )}

          {isMobile[0] && (
            <div>
              <div
                onClick={handleTogglingLinksDropdown}
                className="relative flex items-center gap-1 p-2 duration-200 cursor-pointer rounded-xl hover:bg-gray-200"
              >
                <span className="font-semibold capitalize">resources</span>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`w-2 h-2 duration-200 ${
                    showLinksDropdown ? "transform rotate-180" : ""
                  }`}
                />
                <LinksDropdown
                  isAuth={isAuthenticated}
                  showOptions={showLinksDropdown}
                />
              </div>
            </div>
          )}

          {!isAuthenticated && (
            <div className="flex items-center gap-4 font-semibold uppercase">
              <Link
                to="/login"
                className="hidden px-4 py-2 duration-200 border rounded-lg md:block border-neutral-800 hover:bg-neutral-200"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="hidden px-4 py-2 text-white duration-200 rounded-lg md:block bg-neutral-800 hover:bg-neutral-900"
              >
                Sign Up
              </Link>
            </div>
          )}

          {isAuthenticated && (
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
                  showProfileDropdown ? "transform rotate-180" : ""
                }`}
              />
              <ProfileDropdown showOptions={showProfileDropdown} />
            </div>
          )}
        </div>
      </div>
      {isMobile[0] && <NavSearch />}
    </nav>
  );
};

export default Navbar;
