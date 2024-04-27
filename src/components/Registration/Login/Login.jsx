import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import CopyRights from "../CopyRights/CopyRights";
import { login } from "../../../redux/actions/auth-methods";
import { useDispatch, useSelector } from "react-redux";
import NeuraLearnAcademy from "../../../shared/NeuraLearnAcademy";
import RegisterButton from "../../../shared/Registration/RegisterButton";
import SucessFailedBox from "../../../shared/Registration/SucessFailedBox";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [spinner, setSpinner] = useState(false);

  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );

  const authenticationError = useSelector((state) => state.authErrors);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      setSpinner(true);
      await login(dispatch, email, password);
      setSpinner(false);
      dispatch(openModal("registration"));
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the homepage if the user is authenticated.
    if (isAuthenticated === true) {
      navigate("/");
    }

    // Show error message if user is not authenticated.
    if (authenticationError.authentication) {
      dispatch(openModal("registration"));
    }
  }, [isAuthenticated, authenticationError, navigate, dispatch]);

  return (
    <>
      <div className="flex flex-col items-center px-10 pt-20 pb-16">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-bold text-neutral-600 md:text-lg">
            New To NLA ?{" "}
            <Link to="/signup">
              <span className="text-lg font-bold text-blue-700">
                Create Account
              </span>
            </Link>
          </h1>
        </div>

        <div
          style={{
            boxShadow: "0px 4px 4px 3px rgba(0, 0, 0, 0.25)",
          }}
          className="w-full max-w-md py-6 rounded-[15px] bg-slate-50"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <NeuraLearnAcademy />

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-base font-semibold text-neutral-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full py-2 pl-2 border border-gray-300 md:w-80"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-base font-semibold text-neutral-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full py-2 pl-2 mb-3 border border-gray-300 md:w-80"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <RegisterButton
              keyword="Login"
              isLoading={spinner}
              clickButton={handleSubmit}
            />

            <div className="flex items-center gap-4 text-lg font-semibold">
              <h4>Forget Password?</h4>
              <Link
                to="/reset-password"
                className="inline-block tracking-wide underline"
              >
                Reset Now
              </Link>
            </div>

            <h2 className="font-normal text-black text-1xl md:text-1xl md:font-semibold">
              Continue in another way
            </h2>

            <div className="flex space-x-12 ">
              <Link>
                <button className="p-2 border border-red-600 rounded-full">
                  <FontAwesomeIcon icon={faGoogle} className="text-red-600" />
                </button>
              </Link>
              <Link>
                <button className="p-2 border border-blue-700 rounded-full">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-700"
                  />
                </button>
              </Link>
              <Link>
                <button className="p-2 border border-blue-800 rounded-full">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-800"
                  />
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <SucessFailedBox
        page={authenticationError.authentication ? "authentication" : "login"}
        navigatePage="/"
        successMessage="Login successfully"
      />

      <CopyRights />
    </>
  );
};

export default Login;
