import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinksDropdown = ({ links, isAuth, showOptions }) => {
  const linkClasses =
    "flex items-center gap-2 px-4 py-3 pr-12 text-sm font-semibold capitalize duration-200 cursor-pointer whitespace-nowrap hover:bg-indigo-500 hover:text-white";

  const navLinks = links.map((item) =>
    item.requireAuth ? (
      isAuth ? (
        <Link key={item.id} to={item.link} className={linkClasses}>
          {item.title}
        </Link>
      ) : null
    ) : (
      <Link key={item.id} to={item.link} className={linkClasses}>
        {item.title}
      </Link>
    )
  );
  return (
    <div
      className={`absolute right-0 z-50 gap-2 duration-200 bg-white border-2 rounded-md shadow-lg top-full ${
        showOptions
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      {navLinks}
    </div>
  );
};

LinksDropdown.propTypes = {
  links: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired,
  showOptions: PropTypes.bool.isRequired,
};

export default LinksDropdown;
