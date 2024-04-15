import { useState } from "react";
import ButtonProfile from "../shared/ButtonProfile";
import ProfileHeader from "../shared/ProfileHeader";

const ProfilePasswordSecurityPage = () => {
  const title = "Security";
  const description =
    "Edit your account settings and change your password here.";
  const inputStyle = "w-full p-2 mt-3 border-2 border-current md:p-4";
  const DEFAULT_DATA = {
    email: "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const [formState, setFormState] = useState(DEFAULT_DATA);
  const Emailhandler = (event) => {
    setFormState({ ...formState, email: event.target.value });
  };
  const passwordhandler = (event) => {
    setFormState({ ...formState, password: event.target.value });
  };
  const newPasswordhandler = (event) => {
    setFormState({ ...formState, newPassword: event.target.value });
  };
  const confirmNewPasswordhandler = (event) => {
    setFormState({ ...formState, confirmNewPassword: event.target.value });
  };
  const submithandler = (event) => {
    event.preventDefault();
    if (formState.newPassword != formState.confirmNewPassword) return;
    console.log(formState);
  };

  return (
    <section className="py-8 border border-b-0 border-gray-400 ">
      <ProfileHeader title={title} description={description} />
      <form className="font-bold leading-8 md:text-xl" onSubmit={submithandler}>
        <div className="px-3 py-8 md:px-5 lg:px-10">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            className="w-full p-2 mt-2 border-2 border-current md:p-4"
            placeholder="ex:aboutrika22@hotmail.com"
            value={formState.email}
            onChange={Emailhandler}
            required
          />
        </div>
        <div className="w-full mt-4 border-b border-gray-400"></div>
        <div className="px-3 py-8 md:px-5 lg:px-10">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            className={inputStyle}
            placeholder="Enter Current Password"
            value={formState.password}
            onChange={passwordhandler}
            required
          />
          <input
            type="password"
            className={inputStyle}
            placeholder="Enter New Password"
            value={formState.newPassword}
            onChange={newPasswordhandler}
            required
          />
          <input
            type="password"
            className={`${inputStyle} mb-3`}
            placeholder="Re-type New Password"
            value={formState.confirmNewPassword}
            onChange={confirmNewPasswordhandler}
            required
          />
          <ButtonProfile>Change Password</ButtonProfile>
        </div>
      </form>
    </section>
  );
};

export default ProfilePasswordSecurityPage;
