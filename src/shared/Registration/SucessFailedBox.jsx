import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Failed from "../../components/Registration/SuccessFailed/Failed";
import Success from "../../components/Registration/SuccessFailed/Success";
import PropTypes from "prop-types";
import React from "react";

const registrationModalId = document.getElementById("registration__modal");

const SucessFailedBox = React.memo(
  ({ page = "login", navigatePage = "/", successMessage = "" }) => {
    let modalName = useSelector((state) => state.openClose.modalName);

    // Get the error state from the redux store.
    const errorsSlice = useSelector((state) => state.authErrors);

    // Check first the authentication error and then the page error, because the authentication error is the parent error.
    const correctError =
      errorsSlice[errorsSlice.authentication ? "authentication" : page];

    // Get the error message from the error object.
    const error = correctError ? Object.values(correctError) : null;

    // Set the modal name to registration if the user is not on the login page to open the error modal.
    if (errorsSlice.authentication) {
      modalName = "registration";
    }

    return (
      <>
        {/* Success Modal */}
        {modalName === "registration" &&
          !error &&
          page !== "login" &&
          createPortal(
            <Success navigatePage={navigatePage} message={successMessage} />,
            registrationModalId
          )}

        {/* Faliure Modal */}
        {modalName === "registration" &&
          error &&
          createPortal(<Failed error={error} />, registrationModalId)}
      </>
    );
  }
);

SucessFailedBox.propTypes = {
  page: PropTypes.string.isRequired,
  navigatePage: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
};

SucessFailedBox.displayName = "SucessFailedBox";

export default SucessFailedBox;
