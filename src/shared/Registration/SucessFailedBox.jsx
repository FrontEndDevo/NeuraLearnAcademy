import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Failed from "../../components/Registration/SuccessFailed/Failed";
import Success from "../../components/Registration/SuccessFailed/Success";
import PropTypes from "prop-types";

const registrationModalId = document.getElementById("registration__modal");

const SucessFailedBox = ({ page }) => {
  const modalName = useSelector((state) => state.openClose.modalName);

  const errorsSlice = useSelector((state) => state.authErrors);
  const correctError = errorsSlice[page];

  // const authError = useSelector((state) => state.authErrors.page);
  const error = correctError ? Object.values(correctError)[0][0] : null;

  return (
    <>
      {/* Success Modal */}
      {modalName === "registration" &&
        !error &&
        createPortal(<Success />, registrationModalId)}

      {/* Faliure Modal */}
      {modalName === "registration" &&
        error &&
        createPortal(<Failed error={error} />, registrationModalId)}
    </>
  );
};

SucessFailedBox.propTypes = {
  page: PropTypes.string.isRequired,
};

export default SucessFailedBox;
