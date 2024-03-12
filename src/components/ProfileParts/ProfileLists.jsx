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

  // render the profile sections:
  const userProfileSections = profileSections.map((section, index) => (
    <li key={index}>
      <FontAwesomeIcon icon={section.icon} />
      <span>{section.name}</span>
    </li>
  ));

  return (
    <aside>
      <div className="relative">
        <img
          src={userPhoto}
          alt={userInfo.name}
          className="w-40 h-40 rounded-full"
        />
        <div className="absolute">
          <input
            type="file"
            name="photo"
            id="Photo"
            ref={fileInput}
            className="hidden"
            onChange={handleFileChange}
          />
          <FontAwesomeIcon icon={faCamera} onClick={handleIconClick} />
        </div>
        <h1>{userInfo.name}</h1>
      </div>

      <ul>{userProfileSections}</ul>
    </aside>
  );
};

export default ProfileLists;
