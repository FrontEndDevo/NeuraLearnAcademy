import { Link, useParams } from "react-router-dom";
import { activation, login } from "../../../redux/actions/auth-methods";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileWink } from "@fortawesome/free-regular-svg-icons";
import logo from "../../../assets/images/LoginSigin/logo.png";
import { useEffect, useState } from "react";
import RegisterButton from "../../../shared/Registration/RegisterButton";
import SucessFailedBox from "../../../shared/Registration/SucessFailedBox";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";
const Activation = () => {
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch();

  // Extract the uid and token from the URL.
  const { uid, token } = useParams();

  // Handle the account activation.
  const handleActivateAccount = async () => {
    setSpinner(true);
    await activation(dispatch, uid, token);
    setSpinner(false);
    dispatch(openModal("registration"));
  };

  // Get the activation error and the user information from the redux store.
  const activateError = useSelector((state) => state.authErrors);
  const userInfo = useSelector((state) => state.userAuth.user);

  useEffect(() => {
    // Login the user if the account was created and activated.
    const loginUserIfActivated = async () => {
      if (activateError.activation == null && userInfo !== null) {
        await login(dispatch, userInfo.email, userInfo.password);
      }
    };
    loginUserIfActivated();
  }, [activateError, userInfo, dispatch]);

  const stepsParentDiv = "flex flex-col items-center gap-2";
  const stepsClasses =
    "p-4 text-xl md:text-3xl text-indigo-600 border-4 border-indigo-600 rounded-full";

  return (
    <>
      <div className="container flex flex-col items-center justify-center py-20 md:w-screen md:h-screen">
        <img src={logo} alt="Neura Learn Academy" className="w-40 h-40 mb-10" />
        <div className="px-10 py-6 text-center bg-gray-200 rounded">
          <div className="flex items-center justify-center mb-4">
            <h1 className="px-4 py-2 text-lg font-bold border-b-2 border-indigo-600 rounded-b-lg md:text-2xl w-fit font-playfair">
              Activate your Account:
            </h1>
          </div>

          <div className="grid items-center justify-around grid-cols-2 gap-4 mb-10 text-sm font-bold capitalize md:text-base md:flex">
            <div className={stepsParentDiv}>
              <span>create account</span>
              <FontAwesomeIcon icon={faCheck} className={stepsClasses} />
            </div>
            <div className={stepsParentDiv}>
              <span>verify email</span>
              <FontAwesomeIcon icon={faEnvelope} className={stepsClasses} />
            </div>
            <div className={`${stepsParentDiv} opacity-50 col-span-2`}>
              <span>good luck</span>
              <FontAwesomeIcon
                icon={faFaceSmileWink}
                className={stepsClasses}
              />
            </div>
          </div>
          <div className="text-xs font-semibold tracking-wide md:text-lg">
            <p className="mb-2">
              Thank you for registering with us. You are one step away from
              enjoying the most famous online educational courses.
            </p>
            <p className="mb-2">
              In order to activate your account please click the button below
            </p>

            <div>
              <RegisterButton
                keyword="verify"
                isLoading={spinner}
                clickButton={handleActivateAccount}
              />
              <div className="flex flex-col items-center justify-between gap-4 mt-4 md:flex-row">
                <div>
                  <Link
                    to="/registration"
                    className="italic font-semibold text-indigo-600 duration-200 hover:text-indigo-800"
                  >
                    Create Account
                  </Link>
                </div>
                <div>
                  Already have an account? &nbsp;
                  <Link
                    to="/login"
                    className="italic font-semibold text-indigo-600 duration-200 hover:text-indigo-800"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SucessFailedBox
        page="activation"
        navigatePage="/"
        successMessage="Account activated successfully"
      />
    </>
  );
};

export default Activation;
