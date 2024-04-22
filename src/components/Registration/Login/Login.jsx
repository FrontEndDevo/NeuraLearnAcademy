import { useState } from "react";
import { Link } from "react-router-dom";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

//images
import image1 from "../../../assets/images/LoginSigin/logo.png";
//files & functions
import CopyRights from "../CopyRights/CopyRights";
import { validateEmail, validatePassword } from "../SignUp/SignUp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email, setErrors); // Pass email and setErrors
    validatePassword(password, setErrors); // Pass password and setErrors

    // perform logic

    if (email && password) {
      console.log("Email:", email);
      console.log("Password:", password);
    } else {
      console.error("Error: Please fill in all required fields.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center px-10 pt-20 pb-16">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-bold text-neutral-600 md:text-lg">
            New To NLA ?{" "}
            <Link to="/register">
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
                className={`w-full pl-2 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }  md:w-80`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
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
                className={`w-full pl-2 mb-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }  md:w-80`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
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
                <div className="bg-red-600 p-2.5 rounded-[50%]  ">
                  <FontAwesomeIcon icon={faGoogle} className="text-white" />
                </div>
              </Link>
              <Link>
                <div className="bg-sky-600	 p-2.5 rounded-[50%]  ">
                  <FontAwesomeIcon icon={faLinkedin} className="text-white" />
                </div>
              </Link>
              <Link>
                <div className="bg-blue-700 p-2.5 rounded-[50%]">
                  <FontAwesomeIcon className="text-white" icon={faFacebook} />
                </div>
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
