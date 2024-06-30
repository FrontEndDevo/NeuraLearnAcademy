import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileLink = ({ section }) => (
  <NavLink
    to={`/profile/${section.name}`}
    style={({ isActive }) => ({
      borderLeftStyle: isActive ? "solid" : "none",
      borderLeftColor: isActive ? "blue" : "none",
      borderLeftWidth: isActive ? "0.3rem" : "none",
    })}
    className="flex items-center gap-2 p-2 duration-200 cursor-pointer hover:before:hidden"
  >
    <FontAwesomeIcon icon={section.icon} className="w-5 h-5" />
    <span className="text-base font-semibold capitalize">{section.name}</span>
  </NavLink>
);

ProfileLink.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProfileLink;
