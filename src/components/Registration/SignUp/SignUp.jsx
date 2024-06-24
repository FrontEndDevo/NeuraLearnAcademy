import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/actions/auth-methods";
import NeuraLearnAcademy from "../../../shared/NeuraLearnAcademy";
import RegisterButton from "../../../shared/Registration/RegisterButton";
import { openModal } from "../../../redux/slices/Instructor/OpenClose";
import SucessFailedBox from "../../../shared/Registration/SucessFailedBox";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [role, setRole] = useState("student"); // New state for role
  const [spinner, setSpinner] = useState(false);

  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstName && lastName && email && password && rePassword && role) {
      setSpinner(true);
      await signup(
        dispatch,
        firstName,
        lastName,
        email,
        password,
        rePassword
        // role
      ); // Include role in signup
      setSpinner(false);
      dispatch(openModal("registration"));
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className="flex flex-col items-center px-10 mt-32">
        <div
          style={{
            boxShadow: "0px 4px 4px 3px rgba(0, 0, 0, 0.25)",
          }}
          className="w-full max-w-lg px-6 py-6 rounded-[15px] bg-slate-50"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <NeuraLearnAcademy />

            <div className="flex flex-col w-full gap-4 md:flex-row">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block mb-1 text-base font-semibold text-neutral-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className={`w-full sm:w-96 pl-2 py-2 border  md:w-48`}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block mb-1 text-base font-semibold text-neutral-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={`w-full sm:w-96 pl-2 py-2 border md:w-48`}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-1 text-base font-semibold text-neutral-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full py-2 pl-2 border border-gray-300 sm:w-96 md:w-96"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="password"
                className="block mb-1 text-base font-semibold text-neutral-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`w-full pl-2 mb-1 py-2 border md:w-96 sm:w-96`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="rePassword"
                className="block mb-1 text-base font-semibold text-neutral-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="rePassword"
                className={`w-full sm:w-96 pl-2 mb-2 py-2 border md:w-96`}
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-5 font-semibold md:flex-row">
              <h2 className="mr-4 font-bold underline text-neutral-900">
                Signed up as:
              </h2>
              <div className="flex items-center gap-2 md:gap-8">
                <div className="flex flex-row-reverse items-center gap-2">
                  <label htmlFor="student">Student</label>
                  <input
                    type="radio"
                    name="role"
                    id="student"
                    value="student"
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                <div className="flex flex-row-reverse items-center gap-2">
                  <label htmlFor="instructor">Instructor</label>
                  <input
                    type="radio"
                    name="role"
                    id="instructor"
                    value="instructor"
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <RegisterButton
              keyword="Signup"
              isLoading={spinner}
              clickButton={handleSubmit}
            />

            <h2 className="text-base font-semibold tracking-wide text-black">
              Sign in another way
            </h2>
            {/* start social media icon */}
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
            {/* end social media icon */}
            <div className="text-lg font-bold text-center text-neutral-600 ">
              Already have an account?
              <Link to="/login">
                <span className="text-lg font-bold text-blue-700 underline">
                  {" "}
                  Log in
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <SucessFailedBox
        page="signup"
        navigatePage="/login"
        successMessage="Your account has been created successfully. please verify your email.
          We have sent you an activation link to your email."
      />
    </>
  );
};

export default SignUp;
