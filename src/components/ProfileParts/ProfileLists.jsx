import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userPhoto from "../../assets/images/profile/unknown_user.webp";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const userInfo = {
  name: "Ahmed Ashraf",
  photo: userPhoto,
};

const profileSections = [
  "profile",
  "password & security",
  "privacy",
  "notification",
  "close account",
];
const ProfileLists = () => {
  // render the profile sections:
  const userProfileSections = profileSections.map((section, index) => (
    <li key={index}>{section}</li>
  ));

  return (
    <aside>
      <div>
        <img src={userInfo.photo} alt={userInfo.name} />
        <div>
          <input type="file" name="photo" id="Photo" />
          <FontAwesomeIcon icon={faCamera} />
        </div>
        <h1>{userInfo.name}</h1>
      </div>

      <ul>{userProfileSections}</ul>
    </aside>
  );
};

export default ProfileLists;
