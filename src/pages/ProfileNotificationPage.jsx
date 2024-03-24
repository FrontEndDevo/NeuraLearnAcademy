import ProfileHeader from "../shared/ProfileHeader";
import SwitchComponent from "../shared/SwitichComponent";
/* eslint-disable */
const ProfileNotificationPage = () => {
  const title = "Notifications";
  const description =
    "Turn promotional email notifications from Udemy on or off";
  return (
    <section className="py-8 border border-b-0 border-gray-400 ">
      <ProfileHeader title={title} description={description} />
      <div className="px-3 py-8 font-bold leading-8 md:px-5 lg:px-10 md:text-xl">
        <h3 className="mb-4">I want to receive:</h3>
        <div className="flex items-center justify-between mb-4">
          <p>Promotions, course recommendations, and helpful resources.</p>
          <SwitchComponent />
        </div>
        <div className="flex items-center justify-between mb-4">
          <p>Announcements from instructors whose course(s) I’m enrolled in.</p>
          <SwitchComponent />
        </div>
        <div className="flex items-center justify-between mb-4">
          <p>Don't send me any promotional emails.</p>
          <SwitchComponent />
        </div>

        <button className="px-8 py-3 mt-6 text-white bg-black rounded">
          Save
        </button>
      </div>
    </section>
  );
};

export default ProfileNotificationPage;
