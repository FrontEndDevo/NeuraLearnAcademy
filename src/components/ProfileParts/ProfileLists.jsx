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
import { useNavigate } from "react-router-dom";

const userInfo = {
  name: "Ahmed Ashraf",
  photo: userPhoto,
};

const profileSections = [
  {
    name: "profile",
    icon: faIdCard,
  },
  {
    name: "password & security",
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
    name: "close account",
    icon: faBan,
  },
];
const ProfileLists = () => {
  const fileInput = useRef(null);
  const [userPhoto, setUserPhoto] = useState(userInfo.photo); // initial image (Unknown user)

  // handle the icon click to open the file input
  const handleIconClick = () => {
    // trigger the file input
    fileInput.current.click();
  };

  // handle the file change to update the photo of the user profile
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // update the photo
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const navigate = useNavigate();
  const handleClick = (sectionName) => {
    const sanitizedSectionName = sectionName
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s+/g, "-");
    navigate(`/${sanitizedSectionName}`, { replace: true });
  };

  // render the profile sections:
  const userProfileSections = profileSections.map((section, index) => (
    <li
      key={index}
      className="flex items-center gap-2 p-2 duration-200 cursor-pointer hover:before:hidden hover:bg-blue-400"
      onClick={() => handleClick(section.name)}
    >
      <FontAwesomeIcon icon={section.icon} className="w-5 h-5" />
      <span className="text-base font-semibold capitalize">{section.name}</span>
    </li>
  ));

  return (
    <aside>
      <div className="relative flex flex-col">
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
      <h1 className="mt-2 mb-4 text-lg font-semibold">{userInfo.name}</h1>

      <ul className="flex flex-col gap-4">{userProfileSections}</ul>
    </aside>
  );
};

export default ProfileLists;
