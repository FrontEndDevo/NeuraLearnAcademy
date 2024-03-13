import { Outlet } from "react-router-dom";
import ProfileLists from "../components/ProfileParts/ProfileLists";

const ProfilePage = () => {
  return (
    <section className="container grid grid-cols-4 gap-2 py-20">
      <ProfileLists />
      <div className="col-span-3">
        <Outlet />
      </div>
    </section>
  );
};

export default ProfilePage;
