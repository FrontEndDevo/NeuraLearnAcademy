import PropsTypes from "prop-types";
import {
  faBell,
  faIdCard,
  faLock,
  faPowerOff,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth-methods";
import { useDispatch } from "react-redux";

const profileOptions = [
  {
    id: 1,
    title: "profile info",
    link: "/profile/profileInfo",
    icon: faIdCard,
  },
  {
    id: 2,
    title: "password & security",
    link: "/profile/password&security",
    icon: faLock,
  },
  {
    id: 3,
    title: "privacy",
    link: "/profile/privacy",
    icon: faShield,
  },
  {
    id: 4,
    title: "notification",
    link: "/profile/notification",
    icon: faBell,
  },
];

const ProfileDropdown = ({ showOptions }) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    logout(dispatch);
  };

  return (
    <div
      className={`absolute top-full right-0 gap-2 z-50 duration-200 border-2 bg-white shadow-lg rounded-md ${
        showOptions
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      {profileOptions.map((opt) => (
        <Link
          key={opt.id}
          to={opt.link}
          className="flex items-center gap-2 px-4 py-3 pr-12 text-sm font-semibold capitalize duration-200 cursor-pointer whitespace-nowrap hover:bg-indigo-500 hover:text-white"
        >
          <FontAwesomeIcon icon={opt.icon} />
          {opt.title}
        </Link>
      ))}
      <div
        onClick={handleSignOut}
        className="flex items-center gap-2 px-4 py-3 pr-12 text-sm font-semibold text-red-500 duration-200 cursor-pointer hover:bg-indigo-500 hover:text-white"
      >
        <FontAwesomeIcon icon={faPowerOff} />
        <button className="capitalize">sign out</button>
      </div>
    </div>
  );
};

ProfileDropdown.propTypes = {
  showOptions: PropsTypes.bool.isRequired,
};

export default ProfileDropdown;
