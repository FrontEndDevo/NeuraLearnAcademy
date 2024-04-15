/* eslint-disable */
const ProfileHeader = (props) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center md:text-3xl">
        {props.title}
      </h1>
      <p className="pb-8 text-center border-b border-gray-400 text-l md:text-xl">
        {props.description}
      </p>
    </div>
  );
};

export default ProfileHeader;
