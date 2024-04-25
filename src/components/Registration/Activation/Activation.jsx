import { useNavigate, useParams } from "react-router-dom";
import { verify } from "../../../redux/actions/auth-methods";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileWink } from "@fortawesome/free-regular-svg-icons";
import logo from "../../../assets/images/LoginSigin/logo.png";
import { useState } from "react";
import RegisterButton from "../../../shared/Registration/RegisterButton";
const Activation = () => {
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch();

  // Extract the uid and token from the URL.
  const { uid, token } = useParams();

  // To navigate to the home page after the account is verified.
  const navigate = useNavigate();

  const handleVerifyAccount = async () => {
    setSpinner(true);
    await verify(dispatch, uid, token);
    setSpinner(false);
    navigate("/");
  };

  const stepsParentDiv = "flex flex-col items-center gap-2";
  const stepsClasses =
    "p-4 text-xl md:text-3xl text-indigo-600 border-4 border-indigo-600 rounded-full";

  return (
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
            <FontAwesomeIcon icon={faFaceSmileWink} className={stepsClasses} />
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

          <RegisterButton
            keyword="verify"
            isLoading={spinner}
            clickButton={handleVerifyAccount}
          />
        </div>
      </div>
    </div>
  );
};

export default Activation;
