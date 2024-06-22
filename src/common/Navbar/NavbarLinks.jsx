import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarLinks = ({ isAuth }) => {
  return (
    <div className="flex items-center gap-10">
      <Link
        to="/"
        className="p-2 font-semibold capitalize duration-200 rounded-lg hover:bg-neutral-800 hover:text-white"
      >
        home
      </Link>

      {isAuth && (
        <Link
          to="/my-learnings"
          className="p-2 font-semibold capitalize duration-200 rounded-lg hover:bg-neutral-800 hover:text-white"
        >
          my learnings
        </Link>
      )}

      <Link
        to="/contact-us"
        className="p-2 font-semibold capitalize duration-200 rounded-lg hover:bg-neutral-800 hover:text-white"
      >
        contact us
      </Link>

      <Link
        to="/about-us"
        className="p-2 font-semibold capitalize duration-200 rounded-lg hover:bg-neutral-800 hover:text-white"
      >
        about us
      </Link>
    </div>
  );
};

NavbarLinks.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default NavbarLinks;
