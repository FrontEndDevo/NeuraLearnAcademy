import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../../assets/images/LoginSigin/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import CopyRights from "../CopyRights/CopyRights";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };
  const validatePassword = () => {
    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    } else {
      let passwordStrength = "Weak";

      // Check password strength based on criteria (e.g., length, uppercase, lowercase, numbers, special characters)
      if (
        password.length >= 8 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*]/.test(password)
      ) {
        passwordStrength = "Strong";
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: `Password strength: ${passwordStrength}`,
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password is weak, choose stronge password.",
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    // Perform login logic here
  };

  return (
    <>
      <div className="flex flex-col items-center px-5 pt-24 pb-8 md:px-10">
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
            background: "#EFEFEA",
            boxShadow: "0px 4px 4px 3px rgba(0, 0, 0, 0.25)",
            borderRadius: 15,
          }}
          className="w-full max-w-md py-6"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex items-center">
              <img src={image1} className="w-24" alt="Logo" />
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
                }  md:w-[335px]`}
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
                className={`w-full pl-2 mb-5 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }   md:w-[335px]`}
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
              className="w-3/4 py-3 text-xl font-semibold text-white bg-blue-700 hover:bg-blue-600"
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
                <div
                  style={{
                    backgroundColor: "#DB4437",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon icon={faGoogle} style={{ color: "white" }} />
                </div>
              </Link>
              <Link>
                <div
                  style={{
                    backgroundColor: "#0077B5",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "white" }}
                  />
                </div>
              </Link>
              <Link>
                <div
                  style={{
                    backgroundColor: "blue",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "white" }}
                  />
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
