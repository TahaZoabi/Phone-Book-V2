import "../CSS/confirm.css";
import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext.jsx";
import useDeleteContact from "../hooks/useDeleteContact.jsx";

function ConfirmModal() {
  const [deleteContact] = useDeleteContact();
  const { isConfirmOpen, setIsConfirmOpen, deleteState } =
    useContext(GlobalContext);
  function handleCancelClick() {
    setIsConfirmOpen(false);
  }
  function handleConfirmClick() {
    deleteContact();
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
          Are you sure you want to delete
          {deleteState.type === "individual"
            ? " " + deleteState.name
            : " all contacts"}
          ?
        </p>
        <div className="actions">
          <button
            onClick={handleCancelClick}
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
            aria-label="ConfirmModal"
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
}

export default ConfirmModal;
