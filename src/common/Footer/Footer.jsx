import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Sections of the footer.
const sections = [
  {
    title: "Company",
    items: ["Team", "News", "Careers", "Our Mission"],
  },
  {
    title: "Support",
    items: ["FAQs", "Contact Us", "User Forums", "Troubleshooting"],
  },
  {
    title: "Solutions",
    items: ["Online Courses", "Interactive Learning", "Certification Programs"],
  },
  {
    title: "Legal",
    items: ["Cookie Policy", "Privacy Policy", "Terms of Service"],
  },
];

// Social media icons and links.
const socialItems = [
  { name: "Facebook", icon: faFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: faInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: faTwitter, link: "https://twitter.com/" },
  { name: "Linkedin", icon: faLinkedin, link: "https://www.linkedin.com/" },
  { name: "Github", icon: faGithub, link: "https://github.com/" },
];

const FooterSection = ({ title, items }) => (
  <div>
    <h6 className="pt-2 pr-2 mb-2 font-bold uppercase border-b border-indigo-600 rounded-r-xl">
      {title}
    </h6>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="py-1 text-gray-500 hover:text-white">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const handleSubmitSubscriptionForm = (e) => {
    e.preventDefault();
    console.log("You have subscribed successfully!");
  };

  return (
    <div className="w-full p-4 mt-10 text-gray-300 bg-neutral-900">
      <div className="max-w-[1240px] text-center mx-auto grid justify-items-center gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}

        <div className="col-span-2 pt-8 lg:col-span-2 md:col-span-4 md:pt-2">
          <p className="font-bold uppercase">
            Subscribe to our educational platform
          </p>
          <p className="py-4">
            The latest courses, articles, and resources, sent to your inbox
            weekly.
          </p>
          <form
            onSubmit={handleSubmitSubscriptionForm}
            className="flex flex-col sm:flex-row"
          >
            <input
              className="w-full p-2 mb-4 mr-4 rounded-md outline-none text-neutral-900"
              type="email"
              placeholder="Email..."
            />
            <button className="p-2 mb-4 font-semibold duration-200 bg-primary-500 hover:bg-primary-700 rounded-xl">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          Copyrights &copy; 2024{" "}
          <Link
            to="/about"
            className="px-1 border-b border-dashed rounded-lg animate-pulse"
          >
            Neura Learn Academy Team
          </Link>
          , All rights reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {socialItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <FontAwesomeIcon icon={item.icon} className="hover:text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
