import { useState } from "react";
import { Link, redirect } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import image1 from "../../../assets/images/LoginSigin/logo.png";
import CopyRights from "../CopyRights/CopyRights";
import { login } from "../../../redux/actions/auth-methods";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    // perform logic

    if (email && password) {
      login(dispatch, email, password);
    } else {
      console.error("Error: Please fill in all required fields.");
    }
  };

  if (isAuthenticated) {
    return redirect("/");
  }

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
            <div className="flex items-center">
              <img src={image1} className="w-24" alt="Logo" loading="lazy" />
              <div className="w-[1px] h-28 bg-neutral-500 mx-2"></div>
              <div>
                <div className="font-bold text-black text-1xl md:text-2xl">
                  <span className="text-2xl font-bold text-blue-700">N</span>
                  eura
                </div>
                <div className="font-bold text-black text-1xl md:text-2xl">
                  <span className="text-2xl font-bold text-blue-700">L</span>
                  earn
                </div>
                <div className="font-bold text-black text-1xl md:text-2xl">
                  <span className="text-2xl font-bold text-blue-700">A</span>
                  cademy
                </div>
              </div>
            </div>

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

            <button
              type="submit"
              className="w-[72%] py-2.5  text-xl font-semibold text-white bg-blue-700  hover:bg-blue-900"
            >
              Log in
            </button>

            <Link
              to="/forgot-password"
              className="inline-block text-base font-semibold tracking-wide text-black underline"
            >
              Forgot Password
            </Link>

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

      <CopyRights />
    </>
  );
};

export default Login;
