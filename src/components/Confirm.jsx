import "../CSS/confirm.css";

function Confirm() {
  return (
    <section id="confirm-popup" className="confirm-popup">
      <div className="card">
        <div className="header">
          <p className="alert-Warning">Confirmation Required</p>
        </div>
        <p id="confirm-text" className="message">
          Do you want to proceed with the changes?
        </p>
        <div className="actions">
          <button
            id="confirm-cancelBtn"
            type="button"
            className="cancel-btn"
            aria-label="Cancel"
          >
            Cancel
          </button>
          <button
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
