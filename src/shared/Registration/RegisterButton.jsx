import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
const RegisterButton = ({ isLoading, keyword, clickButton }) => {
  return (
    <button
      type="button"
      onClick={clickButton}
      className="py-2 mt-4 font-bold text-white capitalize duration-200 bg-indigo-500 rounded-full outline-none md:mt-8 px-14 hover:bg-indigo-700"
    >
      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
      ) : (
        keyword
      )}
    </button>
  );
};

RegisterButton.propTypes = {
  isLoading: PropTypes.bool,
  keyword: PropTypes.string,
  clickButton: PropTypes.func,
};

export default RegisterButton;
