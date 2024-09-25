import "../CSS/modal.css";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";

function ModalForm() {
  const {
    isOpen,
    setIsOpen,
    nameRef,
    phoneNumberRef,
    setContactsList,
    contactsList,
  } = useContext(GlobalContext);
  function handleCancelButton() {
    setIsOpen(false);
  }

  function handleNameChange(e) {
    nameRef.current = e.target.value;
  }

  function handlePhoneNUmberChange(e) {
    phoneNumberRef.current = e.target.value;
  }
  function handleConfirmButton() {
    setContactsList([
      ...contactsList,
      {
        name: nameRef.current,
        phoneNumber: phoneNumberRef.current,
      },
    ]);
    setIsOpen(false);
  }

  return (
    <section
      className={`contact-modal ${isOpen ? "display-flex" : "display-none"}`}
    >
      <div id="form-container">
        <div className="header">
          <p className="alert">New Contact</p>
        </div>
        <form id="contactForm">
          <div className="form-label">
            <label className="label-type" htmlFor="name">
              Name
            </label>
            <div className="error"></div>
            <input
              ref={nameRef}
              onChange={handleNameChange}
              type="text"
              id="name"
              name="name"
              className="new-contact-input"
              placeholder="John Smith"
            />
          </div>
          <div className="form-property">
            <label className="label-type" htmlFor="phone">
              Phone Number
            </label>
            <div className="error"></div>
            <input
              ref={phoneNumberRef}
              onChange={handlePhoneNUmberChange}
              type="tel"
              id="phone"
              name="phone"
              className="new-contact-input"
              placeholder="0549876543"
            />
          </div>
          <div className="form-property">
            <label className="label-type" htmlFor="email">
              Email
            </label>
            <div className="error"></div>
            <input
              type="email"
              id="email"
              name="email"
              className="new-contact-input"
              placeholder="john.smith@example.com"
            />
          </div>
          <div className="form-property">
            <label className="label-type">Address</label>
            <div className="error"></div>
            <input
              type="text"
              className="new-contact-input"
              placeholder="123 Main Street, Anytown, USA"
              id="address"
            />
          </div>

          <div className="actions">
            <button
              type="button"
              className="mark-as-read cancelBtn"
              onClick={handleCancelButton}
            >
              Cancel
            </button>
            <button
              id="saveBtn"
              type="button"
              className="read confirmBtn"
              onClick={handleConfirmButton}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ModalForm;
