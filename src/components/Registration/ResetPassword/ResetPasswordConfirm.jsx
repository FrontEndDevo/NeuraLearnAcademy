import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset_password_confirm } from "../../../redux/actions/auth-methods";
import RegisterButton from "../../../shared/Registration/RegisterButton";
import NeuraLearnAcademy from "../../../shared/NeuraLearnAcademy";

const ResetPasswordConfirm = () => {
  const [spinner, setSpinner] = useState(false);
  // To navigate to the home page after the account is verified.
  const dispatch = useDispatch();

  const passwordRef = useRef();
  const rePasswordRef = useRef();

  const { uid, token } = useParams();

  const handleResetPasswordConfirm = async (e) => {
    e.preventDefault();

    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;

    if (password == rePassword) {
      setSpinner(true);
      await reset_password_confirm(dispatch, uid, token, password, rePassword);
      setSpinner(false);
    }
  };

  const inputClasses =
    "w-full py-2 pl-2 border border-gray-300 focus:border-indigo-700 caret-indigo-700 outline-none duration-300 sm:w-96 md:w-96";

  return (
    <div className="text-neutral-900 flex flex-col items-center justify-center py-20 md:w-screen md:h-screen">
      <NeuraLearnAcademy />

      <div className="mx-4 px-10 py-6 md:px-20 md:py-12 text-center border-2 border-indigo-600 rounded shadow-innerwhite">
        <div className="mb-6">
          <h1 className="text-3xl md:text-6xl mb-4 font-extrabold">
            Confirm Password Reset
          </h1>
          <p className="text-sm">
            Enter the new password to reset your account password.
          </p>
        </div>

        <div className="flex items-center flex-col justify-center gap-6">
          <input
            type="password"
            id="new_password"
            name="new_password"
            ref={passwordRef}
            placeholder="New Password"
            className={inputClasses}
            required
          />
          <input
            type="password"
            id="re_new_password"
            name="re_new_password"
            ref={rePasswordRef}
            placeholder="Confirm New Password"
            className={inputClasses}
            required
          />
        </div>

        <RegisterButton
          keyword="reset password now"
          isLoading={spinner}
          clickButton={handleResetPasswordConfirm}
        />
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
