import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import ButtonProfile from "../shared/ButtonProfile";

const DEFAULT_DATA = {
  firstName: "",
  secondName: "",
  description: "",
  jop: "",
  websiteUrl: "",
  facebookUrl: "",
  twitterUrl: "",
  linkedinUrl: "",
  youtubeUrl: "",
};

const socialNetwork = [
  {
    name: "Website",
    icon: faLaptop,
    key: "websiteUrl",
    bg_color: "EC0707",
    color: "gray",
  },
  {
    name: "Facebook Profile",
    icon: faFacebook,
    key: "facebookUrl",
    bg_color: "EC0707",
    color: "0A48E0",
  },
  {
    name: "Twitter Profile",
    icon: faTwitter,
    key: "twitterUrl",
    bg_color: "EC0707",
    color: "10A7D7",
  },
  {
    name: "LinkedIn Profile",
    icon: faLinkedin,
    key: "linkedinUrl",
    bg_color: "EC0707",
    color: "0A48E0",
  },
  {
    name: "YouTube Profile",
    icon: faYoutube,
    key: "youtubeUrl",
    bg_color: "red",
    color: "white",
  },
];

const ProfileInfoPage = () => {
  const inputStyle = "p-2 border-2 border-current md:p-4 focus:outline-none";

  const [formState, setFormState] = useState(DEFAULT_DATA);

  const handleChange = (event, key) => {
    setFormState({ ...formState, [key]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <section className="relative py-8 border border-b-0 border-gray-400">
      <form
        className="grid grid-cols-8 gap-6 px-3 py-10 font-bold leading-8 md:text-xl md:px-5 lg:px-10"
        onSubmit={handleSubmit}
      >
        {/* First Name input */}
        <input
          type="text"
          className={`${inputStyle} col-span-8 md:col-span-4`}
          placeholder="First Name "
          value={formState.firstName}
          onChange={(e) => handleChange(e, "firstName")}
        />

        {/* Last Name input */}
        <input
          type="text"
          className={`${inputStyle} col-span-8 md:col-span-4`}
          placeholder="Last Name"
          value={formState.secondName}
          onChange={(e) => handleChange(e, "secondName")}
        />

        {/* Description input */}
        <input
          type="text"
          className={`${inputStyle} col-span-8`}
          placeholder="Description"
          value={formState.description}
          onChange={(e) => handleChange(e, "description")}
        />

        {/* Job input */}
        <input
          type="text"
          className={`${inputStyle} col-span-8 md:col-span-6`}
          placeholder="Add your job (Student)"
          value={formState.jop}
          onChange={(e) => handleChange(e, "jop")}
        />

        {/* Add Job button */}
        <ButtonProfile type="button" addStyle={`col-span-8 md:col-span-2`}>
          add jop
        </ButtonProfile>
      </form>

      {/* Divider */}
      <div className="absolute w-full mt-10 border-b border-gray-400"></div>

      {/* Social Networks inputs */}
      <h1 className="col-span-8 mt-16">Social Networks:</h1>
      <form
        className="grid grid-cols-8 gap-6 px-3 py-10 font-bold leading-8 md:text-xl md:px-5 lg:px-10"
        onSubmit={handleSubmit}
      >
        {socialNetwork.map((network, index) => (
          <li
            className="col-span-8 list-none border-2 border-current"
            key={index}
          >
            <FontAwesomeIcon
              icon={network.icon}
              className="w-4 h-4 mx-5 text-lg md:h-6 md:w-6 "
              style={{ color: network.color, background: network.bg_color }}
            />
            <input
              type="url"
              className={`${inputStyle} border-0 border-l-2  md:w-10/12 w-8/12`}
              placeholder={network.name}
              value={formState[network.key]}
              onChange={(e) => handleChange(e, network.key)}
            />
          </li>
        ))}
        {/* Save button */}
        <ButtonProfile addStyle={`py-3 col-span-2`}>Save</ButtonProfile>
      </form>
    </section>
  );
};

export default ProfileInfoPage;
