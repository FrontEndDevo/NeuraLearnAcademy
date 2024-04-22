import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userPhoto from "../../assets/images/profile/unknown_user.webp";
import {
  faBan,
  faBell,
  faCamera,
  faIdCard,
  faLock,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const userInfo = {
  name: "Ahmed Ashraf",
  photo: userPhoto,
};

const profileSections = [
  {
    name: "profileInfo",
    icon: faIdCard,
  },
  {
    name: "password&security",
    icon: faLock,
  },
  {
    name: "privacy",
    icon: faShield,
  },
  {
    name: "notification",
    icon: faBell,
  },
  {
    name: "close-account",
    icon: faBan,
  },
];

const ProfileLists = () => {
  const fileInput = useRef(null);
  const [userPhoto, setUserPhoto] = useState(userInfo.photo);

  const handleIconClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const userProfileSections = profileSections.map((section, index) => (
    <NavLink
      key={index}
      to={`/profile/${section.name}`}
      style={({ isActive }) => ({
        borderLeftStyle: isActive ? "solid" : "none",
        borderLeftColor: isActive ? "blue" : "none",
        borderLeftWidth: isActive ? "0.3rem" : "none",
      })}
      className="flex items-center gap-2 p-2 duration-200 cursor-pointer hover:before:hidden"
    >
      <FontAwesomeIcon icon={section.icon} className="w-5 h-5" />
      <span className="text-base font-semibold capitalize">{section.name}</span>
    </NavLink>
  ));

  return (
    <aside className="col-span-6 mx-3 lg:col-span-1 md:col-span-2 md:mx-0">
      <div className="relative flex flex-col w-40 mx-auto">
        <img
          src={userPhoto}
          alt={userInfo.name}
          className="w-40 h-40 rounded-full"
        />
        <div className="absolute bottom-0 left-28">
          <input
            type="file"
            name="photo"
            id="Photo"
            ref={fileInput}
            className="hidden"
            onChange={handleFileChange}
          />
          <FontAwesomeIcon
            icon={faCamera}
            onClick={handleIconClick}
            className="w-5 h-5 p-2 rounded-full cursor-pointer bg-zinc-300"
          />
        </div>
      </div>
      <h1 className="mt-2 mb-4 text-lg font-semibold text-center">
        {userInfo.name}
      </h1>

      <ul className="flex flex-col gap-4">{userProfileSections}</ul>
    </aside>
  );
};

export default ProfileLists;
