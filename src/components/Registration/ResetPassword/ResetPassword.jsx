import { useRef, useState } from "react";
import RegisterButton from "../../../shared/Registration/RegisterButton";
import { reset_password } from "../../../redux/actions/auth-methods";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NeuraLearnAcademy from "../../../shared/NeuraLearnAcademy";

const ResetPassword = () => {
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();

  const emailRef = useRef();

  const handleResetPassword = async (e) => {
    setSpinner(true);
    e.preventDefault();
    await reset_password(dispatch, emailRef.current.value);
    setSpinner(false);
  };

  return (
    <div className="text-neutral-900 flex flex-col items-center justify-center py-20 md:w-screen md:h-screen">
      <NeuraLearnAcademy />

      <div className="mx-4 px-10 py-6 md:px-20 md:py-12 text-center border-2 border-indigo-600 rounded shadow-innerwhite">
        <div className="mb-6">
          <h1 className="text-3xl md:text-6xl mb-4 font-extrabold">
            Reset Password
          </h1>
          <p className="text-sm">
            Provide the email address associated with your account to recover
            your password.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Email"
            className="w-full py-2 pl-2 border border-gray-300 focus:border-indigo-700 caret-indigo-700 outline-none duration-300 sm:w-96 md:w-96"
            required
          />
        </div>

        <RegisterButton
          keyword="reset password"
          isLoading={spinner}
          clickButton={handleResetPassword}
        />
        <div className="flex items-center justify-center mt-4 gap-40">
          <Link
            to="/login"
            className="text-gray-500 hover:text-gray-800 duration-200"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="text-gray-500 hover:text-gray-800 duration-200"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
