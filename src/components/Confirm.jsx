import "../CSS/confirm.css";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";

function Confirm() {
  const { isConfirmOpen, setIsConfirmOpen, setContactsList } =
    useContext(GlobalContext);
  function handleCancelButton() {
    setIsConfirmOpen(false);
  }
  function handleConfirmClick() {
    setContactsList([]);
    setIsConfirmOpen(false);
  }

  return (
    <section
      id="confirm-popup"
      className={`confirm-popup ${isConfirmOpen ? " display-flex" : "display-none"}`}
    >
      <div className="card">
        <div className="header">
          <p className="alert-Warning">Confirmation Required</p>
        </div>
        <p id="confirm-text" className="message">
          Do you want to proceed with the changes?
        </p>
        <div className="actions">
          <button
            onClick={handleCancelButton}
            id="confirm-cancelBtn"
            type="button"
            className="cancel-btn"
            aria-label="Cancel"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmClick}
            id="confirm-confirmBtn"
            type="button"
            className="confirm-btn"
            aria-label="Confirm"
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
}

export default Confirm;
