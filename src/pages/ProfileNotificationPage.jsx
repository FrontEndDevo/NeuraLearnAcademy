import ButtonProfile from "../shared/Profile/ButtonProfile";
import ProfileHeader from "../shared/Profile/ProfileHeader";
import Switch from "../shared/Switich";

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
          <Switch />
        </div>
        <div className="flex items-center justify-between mb-4">
          <p>Announcements from instructors whose course(s) I’m enrolled in.</p>
          <Switch />
        </div>
        <div className="flex items-center justify-between mb-4">
          <p>Don't send me any promotional emails.</p>
          <Switch />
        </div>
        <ButtonProfile addStyle={`px-8 py-3`}>Save</ButtonProfile>
      </div>
    </section>
  );
};

export default ProfileNotificationPage;
