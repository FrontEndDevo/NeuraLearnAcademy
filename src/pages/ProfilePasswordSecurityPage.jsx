import { useState } from "react";
import ButtonProfile from "../shared/Profile/ButtonProfile";
import ProfileHeader from "../shared/Profile/ProfileHeader";

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
  const emailHandler = (event) => {
    setFormState({ ...formState, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setFormState({ ...formState, password: event.target.value });
  };
  const newPasswordHandler = (event) => {
    setFormState({ ...formState, newPassword: event.target.value });
  };
  const confirmNewPasswordHandler = (event) => {
    setFormState({ ...formState, confirmNewPassword: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (formState.newPassword != formState.confirmNewPassword) return;
    console.log(formState);
  };

  return (
    <section className="py-8 border border-b-0 border-gray-400 ">
      <ProfileHeader title={title} description={description} />
      <form className="font-bold leading-8 md:text-xl" onSubmit={submitHandler}>
        <div className="px-3 py-8 md:px-5 lg:px-10">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            className="w-full p-2 mt-2 border-2 border-current md:p-4"
            placeholder="ex:aboutrika22@hotmail.com"
            value={formState.email}
            onChange={emailHandler}
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
            onChange={passwordHandler}
            required
          />
          <input
            type="password"
            className={inputStyle}
            placeholder="Enter New Password"
            value={formState.newPassword}
            onChange={newPasswordHandler}
            required
          />
          <input
            type="password"
            className={`${inputStyle} mb-3`}
            placeholder="Re-type New Password"
            value={formState.confirmNewPassword}
            onChange={confirmNewPasswordHandler}
            required
          />
          <ButtonProfile>Change Password</ButtonProfile>
        </div>
      </form>
    </section>
  );
};

export default ProfilePasswordSecurityPage;
