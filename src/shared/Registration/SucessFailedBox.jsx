import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import Failed from "../../components/Registration/SuccessFailed/Failed";
import Success from "../../components/Registration/SuccessFailed/Success";
import PropTypes from "prop-types";
import React from "react";

const registrationModalId = document.getElementById("registration__modal");

const SucessFailedBox = React.memo(({ page }) => {
  const modalName = useSelector((state) => state.openClose.modalName);

  const errorsSlice = useSelector((state) => state.authErrors);
  const correctError = errorsSlice[page];

  console.log("correctError", correctError);

  // const authError = useSelector((state) => state.authErrors.page);
  const error = correctError ? Object.values(correctError) : null;

  console.log("error", error);

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
});

SucessFailedBox.propTypes = {
  page: PropTypes.string.isRequired,
};

SucessFailedBox.displayName = "SucessFailedBox";

export default SucessFailedBox;
