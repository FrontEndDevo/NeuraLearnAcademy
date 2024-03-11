import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
// images
import image1 from "../../../assets/images/LoginSigin/logo.png";
//files
import CopyRights from "../CopyRights/CopyRights";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfir, setPasswordConfir] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(true);
  };

  return (
    <>
      <div className="flex flex-col items-center px-10 pt-10 pb-20">
        <div
          style={{
            boxShadow: "0px 4px 4px 3px rgba(0, 0, 0, 0.25)",
          }}
          className="w-full max-w-md px-8 py-4 rounded-[15px] bg-slate-50"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-3 "
          >
            <div className="flex items-center">
              <img src={image1} className="w-20 md:w-24" alt="logo" loading="lazy" />
              <div className="w-[1px] h-28  bg-neutral-500 mx-2"></div>{" "}
              {/* Adjust the height and margin as needed */}
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

            <div class="flex flex-col md:flex-row">
              <div class="mb-1 md:mr-2">
                <label for="firstName" class="block mb-1 text-base font-semibold text-neutral-600">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  class="w-full pl-2 py-2 border {{ errors.fullName ? 'border-red-500' : 'border-gray-300' }} md:w-40"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label for="fullName2" class="block mb-1 text-base font-semibold text-neutral-600">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  class="w-full pl-2 py-2 border {{ errors.fullName ? 'border-red-500' : 'border-gray-300' }} md:w-40"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
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
                className="w-full pl-2 py-2 border border-gray-300 md:w-80"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                className="w-full pl-2 mb-1 py-2 border border-gray-300 md:w-80"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password.length < 8 && errors && (
                <p className="text-red-700 my-1">
                  password should at least 8 characters
                </p>
              )}

            </div>
            <div>
              <label
                htmlFor="passwordConfir"
                className="block mb-1 text-base font-semibold text-neutral-600"
              >
                Repeat Password
              </label>
              <input
                type="password"
                id="passwordConfir"
                className="w-full pl-2 mb-1 py-2 border border-gray-300 md:w-80"
                value={passwordConfir}
                onChange={(e) => setPasswordConfir(e.target.value)}
              />

            </div>

            <button
              type="submit"
              className="w-5/6 py-1.5 text-xl font-semibold text-white bg-blue-700  hover:bg-blue-600"
            >
              Sign up
            </button>

            <h2 className="text-base font-semibold tracking-wide text-black">
              Sign in another way
            </h2>
            {/* start social media icon */}
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
            {/* end social media icon */}
            <div className="text-lg font-bold text-center text-neutral-600 ">
              Already have an account?
              <Link to='/login'>
                <span className="text-lg font-bold text-blue-700 underline">
                  {" "}
                  Log in
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <CopyRights />
    </>
  );
};

export default SignUp;
