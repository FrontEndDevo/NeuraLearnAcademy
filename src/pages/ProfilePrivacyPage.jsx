import ButtonProfile from "../shared/Profile/ButtonProfile";
import ProfileHeader from "../shared/Profile/ProfileHeader";
import Switch from "../shared/Switich";

const ProfilePrivacyPage = () => {
  const title = "Privacy";
  const description = "Modify your privacy settings here.";
  return (
    <section className="py-8 border border-b-0 border-gray-400 ">
      <ProfileHeader title={title} description={description} />
      <div className="px-3 py-8 font-bold leading-8 md:px-5 lg:px-10 md:text-xl">
        <h3 className="mb-4">Profile page settings:</h3>
        <div className="flex items-center justify-between mb-4">
          <p>Share social platforms on my profile.</p>
          <Switch />
        </div>
        <div className="flex items-center justify-between mb-4">
          <p>Share social platforms on my profile.</p>
          <Switch />
        </div>
        
        <ButtonProfile addStyle={`px-8 py-3`}>Save</ButtonProfile>
      </div>
    </section>
  );
};

export default ProfilePrivacyPage;
