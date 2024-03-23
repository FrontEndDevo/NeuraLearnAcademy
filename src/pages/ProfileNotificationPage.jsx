import ProfileHeader from "../shared/ProfileHeader";
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
        <p className="mb-4">
          Promotions, course recommendations, and helpful resources.
        </p>
        <p className="mb-4">
          Announcements from instructors whose course(s) I’m enrolled in.
        </p>
        <p className="mb-4">Don't send me any promotional emails.</p>
        <button className="px-8 py-3 mt-6 text-white bg-black rounded">
          Save
        </button>
      </div>
    </section>
  );
};

export default ProfileNotificationPage;
