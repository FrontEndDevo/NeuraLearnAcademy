import ProfileLists from "../components/ProfileParts/ProfileLists";

const ProfilePage = () => {
  return (
    <section className="container grid grid-cols-4 gap-2 py-20">
      <ProfileLists />
      <div className="col-span-3">
        <p>Profile Sections</p>
      </div>
    </section>
  );
};

export default ProfilePage;
