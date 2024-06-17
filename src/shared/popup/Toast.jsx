import {
  faCheck,
  faExclamationCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  hideMessage,
  resetToasts,
} from "../../redux/slices/popups-slices/toasts-slice";
import { useEffect, useRef } from "react";
const Toast = ({ showMessage, message, messageType }) => {
  const dispatch = useDispatch();
  const timeoutRef = useRef();

  // hide the toast message when the user clicks on the close button.
  const handleClosingToastMessage = () => {
    dispatch(hideMessage()); // hide the toast message
    timeoutRef.current = setTimeout(() => {
      // reset the toast messages after 1 second to avoid showing the same message again.
      dispatch(resetToasts());
    }, 1000);
  };

  // cleanup the timeout when the component is unmounted.
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // set the icon props based on the message type.
  const iconProps =
    messageType === "success" ? { fade: true } : { bounce: true };

  return (
    <div
      className={`absolute z-50 p-4 duration-500 transform -translate-x-1/2 -translate-y-1/2 select-none left-1/2 ${
        showMessage ? "top-28 opacity-100" : "-top-full opacity-0"
      }`}
    >
      <div className="flex rounded-lg shadow-lg">
        <div
          className={`flex items-center justify-center p-4 ${
            messageType == "success" ? "bg-green-600" : "bg-red-600"
          } rounded-l-lg`}
        >
          <FontAwesomeIcon
            icon={messageType == "success" ? faCheck : faExclamationCircle}
            {...iconProps}
            className="w-5 h-5 text-white"
          />
        </div>

        <div className="flex items-center justify-between w-full p-4 bg-white border border-gray-200 rounded-r-lg border-l-transparent">
          <span>{message}</span>
          <FontAwesomeIcon
            onClick={handleClosingToastMessage}
            icon={faXmark}
            className={`w-5 h-5 p-1 ml-4 text-gray-700 duration-200 rounded-full cursor-pointer ${
              messageType == "success"
                ? "hover:bg-green-600"
                : "hover:bg-red-600"
            } hover:text-white`}
          />
        </div>
      </div>
    </div>
  );
};

Toast.propTypes = {
  showMessage: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
};

export default Toast;
