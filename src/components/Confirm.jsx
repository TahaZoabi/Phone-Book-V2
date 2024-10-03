import "../CSS/confirm.css";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";

function Confirm() {
  const {
    isConfirmOpen,
    setIsConfirmOpen,
    setContactsList,
    deleteState,
    setDeleteState,
  } = useContext(GlobalContext);
  function handleCancelClick() {
    setIsConfirmOpen(false);
  }
  function handleConfirmClick() {
    if (deleteState.type === "individual") {
      setContactsList((contactList) =>
        contactList.filter((contact, i) => i !== deleteState.index),
      );
      resetActions();
    } else if (deleteState.type === "all") {
      setContactsList([]);
      resetActions();
    }
  }

  function resetActions() {
    setIsConfirmOpen(false);
    setDeleteState("");
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
