import { useRef, useState } from "react";
import RegisterButton from "../../../shared/Registration/RegisterButton";
import { reset_password } from "../../../redux/actions/auth-methods";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NeuraLearnAcademy from "../../../shared/NeuraLearnAcademy";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";
import SucessFailedBox from "../../../shared/Registration/SucessFailedBox";

const ResetPassword = () => {
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();

  const emailRef = useRef();

  const handleResetPassword = async (e) => {
    setSpinner(true);
    e.preventDefault();
    await reset_password(dispatch, emailRef.current.value);
    setSpinner(false);
    dispatch(openModal("registration"));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 text-neutral-900 md:w-screen md:h-screen">
        <NeuraLearnAcademy />

        <div className="px-10 py-6 mx-4 text-center bg-white border-2 border-indigo-600 rounded md:px-20 md:py-12 shadow-innerwhite">
          <div className="mb-6">
            <h1 className="mb-4 text-3xl font-extrabold md:text-6xl">
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
              className="w-full py-2 pl-2 duration-300 border border-gray-300 outline-none focus:border-indigo-700 caret-indigo-700 sm:w-96 md:w-96"
              required
            />
          </div>

          <RegisterButton
            keyword="reset password"
            isLoading={spinner}
            clickButton={handleResetPassword}
          />
          <div className="flex items-center justify-center gap-40 mt-4">
            <Link
              to="/login"
              className="text-gray-500 duration-200 hover:text-gray-800"
            >
              Login
            </Link>
            <Link
              to="/login"
              className="text-gray-500 duration-200 hover:text-gray-800"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>

      <SucessFailedBox
        page="reset_password"
        navigatePage="/login"
        successMessage={`Your password has been reset. An email has been sent to ${emailRef.current.value}. Please check your email for reset link.`}
      />
    </>
  );
};

export default ResetPassword;
