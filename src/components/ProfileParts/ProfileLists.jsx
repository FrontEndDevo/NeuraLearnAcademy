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

import { useSelector } from "react-redux";
import ProfileLink from "./ProfileLink";

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
  const [userPhotoUrl, setUserPhotoUrl] = useState(userInfo.photo);

  const userInformation = useSelector((state) => state.userAuth.user);

  const handleIconClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserPhotoUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const userProfileSections = profileSections.map((section, index) => (
    <ProfileLink key={index} section={section} />
  ));

  return (
    <aside className="col-span-6 mx-3 lg:col-span-1 md:col-span-2 md:mx-0">
      <div className="relative flex flex-col w-40 mx-auto">
        <img
          src={userPhotoUrl}
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
        {userInformation.first_name + " " + userInformation.last_name}
      </h1>

      <ul className="flex flex-col gap-4">{userProfileSections}</ul>
    </aside>
  );
};

export default ProfileLists;
