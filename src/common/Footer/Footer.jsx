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
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

// Social media icons and links.
const items = [
  { name: "Facebook", icon: faFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: faInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: faTwitter, link: "https://twitter.com/" },
  { name: "Linkedin", icon: faLinkedin, link: "https://www.linkedin.com/" },
  { name: "Github", icon: faGithub, link: "https://github.com/" },
];

const Footer = () => {
  // Handle the form submission.
  const handleSubmitSubscribtionFooterForm = (e) => {
    e.preventDefault();
    console.log("You have subscribed successfully!");
  };

  return (
    <div className="w-full mt-10 text-gray-300 bg-neutral-900">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="pt-2 font-bold uppercase">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">
            Subscribe to our educational platform
          </p>
          <p className="py-4">
            The latest courses, articles, and resources, sent to your inbox
            weekly.
          </p>
          <form
            onSubmit={handleSubmitSubscribtionFooterForm}
            className="flex flex-col sm:flex-row"
          >
            <input
              className="w-full p-2 mb-4 mr-4 rounded-md outline-none text-neutral-900"
              type="email"
              placeholder="Email..."
            />
            <button className="p-2 mb-4 font-semibold duration-200 bg-green-800 hover:bg-green-900 rounded-xl">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          Copyrights &copy; 2024 Neura Learn Academy Team, All rights reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((item, index) => {
            return (
              <Link key={index} to={item.link}>
                <FontAwesomeIcon
                  icon={item.icon}
                  className="hover:text-white"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
