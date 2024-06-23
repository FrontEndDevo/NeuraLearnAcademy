import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarLinks = ({ links, isAuth }) => {
  const linkClasses =
    "p-2 font-semibold capitalize duration-200 rounded-lg hover:bg-neutral-800 hover:text-white";

  // Filter links based on authentication status.
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

  return <div className="flex items-center gap-2 xl:gap-10">{navLinks}</div>;
};

NavbarLinks.propTypes = {
  links: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default NavbarLinks;
