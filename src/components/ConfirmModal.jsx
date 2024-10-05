import "../CSS/confirm.css";
import { useDeleteContact } from "../utilis/hooks/useDeleteContact.js";

function ConfirmModal() {
  const {
    deleteState,
    setDeleteState,
    deleteContact,
    isConfirmOpen,
    setIsConfirmOpen,
  } = useDeleteContact();

  function handleCancelClick() {
    setIsConfirmOpen((prevState) => !prevState);
    setDeleteState({
      type: "",
      id: -1,
      name: "",
    });
    console.log("state was canceled");
    console.log(deleteState);
  }
  function handleConfirmClick() {
    deleteContact();
    console.log("should be deleted");
    console.log(deleteState);
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
