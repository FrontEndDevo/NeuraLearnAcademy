import { Link } from "react-router-dom";
import nlaLogo from "../../assets/images/LoginSigin/logo.png";
import NavSearch from "./NavSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import defaultUserPicture from "../../assets/images/profile/unknown_user.webp";

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
  const navbarLinks = navLinks.map((item) => (
    <li key={item.id}>
      <Link to={item.link}>{item.title}</Link>
    </li>
  ));
  return (
    <nav>
      <div>
        <div>
          <img src={nlaLogo} alt="NeuraLearnAcademy" />
          <h1>NeuraLearnAcademy</h1>
        </div>
        <NavSearch />
      </div>

      <div>
        <ul>{navbarLinks}</ul>
        <div>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

        <div>
          <div>
            <img src={defaultUserPicture} alt="My profile" />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div>{/* Dropdown menu for profile options */}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
