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
      className={`absolute -right-0 md:-right-20 grid grid-cols-1 md:grid-cols-2 w-[76vw] md:w-[98vw] z-50 gap-2 duration-200 bg-white border-2 rounded-md shadow-lg top-full ${
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
  isAuth: PropTypes.bool.isRequired,
  showOptions: PropTypes.bool.isRequired,
};

export default LinksDropdown;

// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description }, key) => (
//       <a href="#" key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
//             {" "}
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 text-gray-900 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               className="flex items-center text-sm font-bold"
//             >
//               {title}
//             </Typography>
//             <Typography
//               variant="paragraph"
//               className="text-xs !font-medium text-blue-gray-500"
//             >
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     )
//   );

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-medium">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Resources
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-3 outline-none gap-y-2 outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }
