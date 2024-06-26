import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarLinks = ({ links, isAuth, user }) => {
  const linkClasses =
    "p-2 font-semibold capitalize duration-200 rounded-lg hover:bg-neutral-800 hover:text-white";

  // Filter links based on authentication status.
  const navLinks = links.map((item) => {
    if (item.requireAuth && !isAuth) return null;

    if (
      item.requireAuth &&
      isAuth &&
      item.role == "instructor" &&
      user.is_instructor
    ) {
      console.log(`is_instructor`);

      return (
        <Link key={item.id} to={item.link} className={linkClasses}>
          {item.title}
        </Link>
      );
    }
    if (
      item.requireAuth &&
      isAuth &&
      item.role == "student" &&
      user.is_student
    ) {
      console.log(`is_student`);

      return (
        <Link key={item.id} to={item.link} className={linkClasses}>
          {item.title}
        </Link>
      );
    }

    if (item.role == "both") {
      console.log(`both`);

      return (
        <Link key={item.id} to={item.link} className={linkClasses}>
          {item.title}
        </Link>
      );
    }
  });

  return <div className="flex items-center gap-2 xl:gap-10">{navLinks}</div>;
};

NavbarLinks.propTypes = {
  links: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

export default NavbarLinks;
