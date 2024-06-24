import { Outlet } from "react-router-dom";
import ProfileLists from "../components/ProfileParts/ProfileLists";

const ProfilePage = () => {
  return (
    <section className="grid grid-cols-6 gap-5 py-20 mt-10 lg:mx-28 lg:grid-cols-4 md:mx-10">
      <ProfileLists />
      <div className="col-span-6 mx-3 md:col-start-3 md:col-span-4 lg:col-start-2 md:mx-0">
        <Outlet />
      </div>
    </section>
  );
};

export default ProfilePage;
