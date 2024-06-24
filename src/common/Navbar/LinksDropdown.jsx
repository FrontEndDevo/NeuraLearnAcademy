import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  faCubesStacked,
  faDiagramProject,
  faNewspaper,
  faPeopleGroup,
  faPhone,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navListMenuItems = [
  {
    id: 1,
    title: "Home",
    description: "Find the perfect solution for your needs.",
    icon: faCubesStacked,
    link: "/",
    requireAuth: false,
  },
  {
    id: 2,
    title: "My Learnings",
    description: "Continue learning to gain more skills.",
    icon: faDiagramProject,
    link: "/my-learnings",
    requireAuth: true,
  },
  {
    id: 3,
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: faPeopleGroup,
    link: "/about-us",
    requireAuth: false,
  },
  {
    id: 4,
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: faSitemap,
    link: "/contact-us",
    requireAuth: true,
  },
  {
    id: 5,
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: faPhone,
    link: "/contact-us",
    requireAuth: true,
  },
  {
    id: 6,
    title: "News",
    description: "Know more about us, Discover the services we offer.",
    icon: faNewspaper,
    link: "/about-us",
    requireAuth: false,
  },
];

const LinksDropdown = ({ isAuth, showOptions }) => {
  const parentLinkClasses =
    "flex items-center gap-3 px-4 py-3 pr-12 text-sm font-semibold capitalize duration-200 cursor-pointer whitespace-nowrap hover:bg-neutral-100";

  const titleLinkClasses = "text-base text-neutral-900";

  const discriptionLinkClasses = "text-sm whitespace-pre-wrap text-neutral-600";

  const iconLinkClasses = "w-6 h-6 p-2 bg-gray-100 rounded-lg";

  const navLinks = navListMenuItems.map((item) =>
    item.requireAuth ? (
      isAuth ? (
        <Link key={item.id} to={item.link} className={parentLinkClasses}>
          <FontAwesomeIcon icon={item.icon} className={iconLinkClasses} />
          <div>
            <h6 className={titleLinkClasses}>{item.title}</h6>
            <p className={discriptionLinkClasses}>{item.description}</p>
          </div>
        </Link>
      ) : null
    ) : (
      <Link key={item.id} to={item.link} className={parentLinkClasses}>
        <FontAwesomeIcon icon={item.icon} className={iconLinkClasses} />
        <div>
          <h6 className={titleLinkClasses}>{item.title}</h6>
          <p className={discriptionLinkClasses}>{item.description}</p>
        </div>
      </Link>
    )
  );

  return (
    <div
      className={`absolute -right-0 md:-right-56 grid grid-cols-1 md:grid-cols-2 w-[76vw] md:w-[98vw] z-50 gap-2 duration-200 bg-white border-2 rounded-md shadow-lg top-full ${
        showOptions
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      {navLinks}

      {!isAuth && (
        <div className="flex items-center justify-center gap-2 px-4 pb-2 font-semibold uppercase sm:gap-12 md:hidden">
          <Link
            to="/login"
            className="p-4 duration-200 border rounded-lg border-neutral-800 hover:bg-neutral-200"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="p-4 text-white duration-200 rounded-lg bg-neutral-800 hover:bg-neutral-900"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

LinksDropdown.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  showOptions: PropTypes.bool.isRequired,
};

export default LinksDropdown;
