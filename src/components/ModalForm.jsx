import "../CSS/modal.css";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";

function ModalForm() {
  const {
    isFormOpen,
    setIsFormOpen,
    formData,
    setContactsList,
    isEditing,
    setIsEditing,
    setFormData,
  } = useContext(GlobalContext);

  function handleCancelButton() {
    setIsFormOpen(false);
    setIsEditing({ mode: false, index: null }); // Reset editing state
    setFormData({ name: "", phoneNumber: "", address: "", email: "" }); // Reset form data
  }

  function handleDataChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleConfirmButton() {
    setContactsList((prevContactsList) => [...prevContactsList, formData]);
    handleCancelButton(); // Close the form after adding
  }

  function handleSaveButton() {
    const { index } = isEditing; // Get the index of the contact to edit

    setContactsList((prevContactsList) => {
      const updatedList = [...prevContactsList];
      updatedList[index] = formData; // Update with the new formData
      return updatedList; // Return the updated list
    });

    setIsEditing({ mode: false });
    setIsFormOpen(false);
  }

  return (
    <section
      className={`contact-modal ${isFormOpen ? "display-flex" : "display-none"}`}
    >
      <div id="form-container">
        <div className="header">
          <p className="alert">
            {isEditing.mode ? "Edit Contact" : "New Contact"}
          </p>
        </div>
        <form id="contactForm">
          <div className="form-label">
            <label className="label-type" htmlFor="name">
              Name
            </label>
            <div className="error"></div>
            <input
              value={formData.name}
              onChange={handleDataChange}
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
              value={formData.phoneNumber}
              onChange={handleDataChange}
              type="tel"
              id="phone"
              name="phoneNumber"
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
              onChange={handleDataChange}
              value={formData.email}
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
              onChange={handleDataChange}
              value={formData.address}
              type="text"
              className="new-contact-input"
              placeholder="123 Main Street, Anytown, USA"
              id="address"
              name="address"
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
              onClick={isEditing.mode ? handleSaveButton : handleConfirmButton}
            >
              {isEditing.mode ? "Save" : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ModalForm;
