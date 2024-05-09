import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLaptop,
  faLanguage,
  faBookOpen,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";

import ButtonProfile from "../shared/Profile/ButtonProfile";
import profileImg from "../assets/images/profile/unknown_user.webp";

import { useSelector } from "react-redux";
import { updateUserData } from "../redux/actions/courses-methods";

const DEFAULT_DATA = {
  firstName: "",
  secondName: "",
  description: "",
  Job: "",
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
  const iconStyle = "w-3 h-3 mx-2 text-lg text-gray-500 md:h-5 md:w-5";
  const email = "754d383336@emailbbox.pro";
  // const email = useSelector((state) => state.userAuth.user.email);
  const [formState, setFormState] = useState(DEFAULT_DATA);
  const access = useSelector((state) => state.userAuth.access);
  const handleStoringUserData = (event, key) => {
    setFormState({ ...formState, [key]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
   updateUserData(
      access,
      email,
      formState.firstName,
      formState.secondName
    );
  };

  const userData = {
    name: "Ahmed Ashraf",
    description: "No risk No Fun",
    job: "Job tittle",
    learning: "4 Learning",
    archived: "2 Achieved",
  };

  const socialNetworkS = socialNetwork.map((network, index) => (
    <li className="col-span-8 list-none border-2 border-current" key={index}>
      <FontAwesomeIcon
        icon={network.icon}
        className="w-4 h-4 mx-5 text-lg md:h-6 md:w-6 "
        style={{ color: network.color, background: network.bg_color }}
      />
      <input
        type="url"
        className={`${inputStyle} border-y-0 border-r-0 border-l-2  md:w-10/12 w-8/12 `}
        placeholder={network.name}
        value={formState[network.key]}
        onChange={(e) => handleStoringUserData(e, network.key)}
      />
    </li>
  ));

  return (
    <section className="relative pb-8 border border-b-0 border-gray-400">
      <div className="flex flex-wrap justify-between gap-2 p-4">
        <div className="flex">
          <img
            src={profileImg}
            alt={`${userData.name} image`}
            className="w-20 mr-3"
          />
          <div>
            <h1 className="font-bold">{userData.name}</h1>
            <p className="text-gray-500">{userData.description}</p>
            <p className="text-gray-500">{userData.job}</p>
          </div>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faBookOpen} className={iconStyle} />
            <span className="font-bold text-blue-600">{userData.learning}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faArchive} className={iconStyle} />
            <span className="font-bold text-blue-600">{userData.archived}</span>
          </p>
        </div>
      </div>
      <div className="absolute w-full border-b border-gray-400"></div>
      {/* {error &&
        error.length > 0 &&
        error.map((error, index) => (
          <div key={index}>
            {Object.keys(error).map((key) => (
              <p key={key}>
                {key}: {error[key]}
              </p>
            ))}
          </div>
        ))} */}
      <form
        className="grid grid-cols-12 gap-6 px-3 py-10 font-bold leading-8 md:text-xl md:px-5 lg:px-10"
        onSubmit={handleSubmit}
      >
        {/* First Name input */}
        <input
          type="text"
          className={`${inputStyle} col-span-12 md:col-span-6`}
          placeholder="First Name "
          value={formState.firstName}
          onChange={(e) => handleStoringUserData(e, "firstName")}
        />

        {/* Last Name input */}
        <input
          type="text"
          className={`${inputStyle} col-span-12 md:col-span-6`}
          placeholder="Last Name"
          value={formState.secondName}
          onChange={(e) => handleStoringUserData(e, "secondName")}
        />

        {/* Description input */}
        <input
          type="text"
          className={`${inputStyle} col-span-12`}
          placeholder="Description"
          value={formState.description}
          onChange={(e) => handleStoringUserData(e, "description")}
        />

        {/* Job input */}
        <input
          type="text"
          className={`${inputStyle} col-span-12 md:col-span-7 lg:col-span-8`}
          placeholder="Add your job (Student)"
          value={formState.Job}
          onChange={(e) => handleStoringUserData(e, "Job")}
        />

        {/* Add Job button */}
        <button
          type="button"
          className="flex items-center justify-between h-12 col-span-7 text-white bg-black rounded-full md:h-14 s md:col-span-5 lg:col-span-4"
        >
          <span className=" text-black bg-white border-gray-400 rounded-full border-[2px] py-[0.4rem] md:py-[0.8rem] mr-3 w-full">
            + Add{" "}
          </span>
          <p className="w-full">a Job</p>
        </button>
      </form>

      {/* Divider */}
      <div className="absolute w-full border-b border-gray-400"></div>

      {/* Social Networks inputs */}
      <h1 className="col-span-8 mt-6 mb-3 ml-10 font-bold">Social Networks:</h1>
      <form
        className="grid grid-cols-8 gap-6 px-3 py-10 pt-0 font-bold leading-8 md:text-xl md:px-5 lg:px-10"
        onSubmit={handleSubmit}
      >
        {socialNetworkS}
        {/* Save button */}
        <div className="flex justify-between col-span-8">
          <ButtonProfile
            addStyle={`py-0 md:py-2 w-4/12 lg:w-2/12 md:w-3/12 bg-transparent border border-2 rounded-full  flex items-center justify-between`}
            type="button"
          >
            <FontAwesomeIcon
              icon={faLanguage}
              className="text-lg text-blue-600 h-7 w-7"
            />
            <p className="text-black">EN</p>
          </ButtonProfile>
          <ButtonProfile addStyle={`md:py-3 md:w-3/12 lg:w-2/12 px-4`}>
            Save
          </ButtonProfile>
        </div>
      </form>
    </section>
  );
};

export default ProfileInfoPage;
