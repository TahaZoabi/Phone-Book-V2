import "../CSS/modal.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext.jsx";

function ModalForm() {
  const [errors, setErrors] = useState({});
  const {
    isFormOpen,
    setIsFormOpen,
    formData,
    setContactsList,
    isEditing,
    setIsEditing,
    setFormData,
    contactsList,
  } = useContext(GlobalContext);

  function handleCancelButton() {
    setIsFormOpen(false);
    setIsEditing({ mode: false, index: null }); // Reset editing state
    setFormData({ name: "", phoneNumber: "", address: "", email: "" }); // Reset form data
    setErrors({}); // Reset errors
  }

  function handleDataChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear specific error on input
  }

  function handleConfirmButton() {
    formData.id = contactsList.length + 1;
    if (!validateInputs()) return; // Validate before proceeding
    setContactsList((prevContactsList) => [...prevContactsList, formData]);
    handleCancelButton(); // Close the form after adding
  }

  function handleSaveButton() {
    if (!validateInputs()) return; // Validate before proceeding

    const { id } = isEditing;

    setContactsList((prevContactsList) => {
      const updatedList = [...prevContactsList];
      const index = updatedList.findIndex((c) => c.id === id); // Find the index directly

      if (index !== -1) {
        updatedList[index] = { ...formData, id };
      }
      formData.id = id;
      return updatedList; // Return the updated list
    });

    setIsEditing({ mode: false, id: null });
    setIsFormOpen(false);
  }

  function validateInputs() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Contact name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Contact name must be 3 letters at least";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Contact phone number is required";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number should only contain digits";
    } else if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors); // Update errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
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
          {["name", "phoneNumber", "email", "address"].map((field) => (
            <div className="form-property" key={field}>
              <label className="label-type" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {errors[field] && <div className="error">{errors[field]}</div>}
              {/* Conditionally render error */}
              <input
                value={formData[field]}
                onChange={handleDataChange}
                type={field === "phoneNumber" ? "tel" : "text"}
                id={field}
                name={field}
                className="new-contact-input"
                placeholder={
                  field === "name"
                    ? "John Smith"
                    : field === "phoneNumber"
                      ? "0549876543"
                      : field === "email"
                        ? "john.smith@example.com"
                        : "123 Main Street, Anytown, USA"
                }
              />
            </div>
          ))}
          <div className="actions">
            <button
              type="button"
              className="mark-as-read cancelBtn"
              onClick={handleCancelButton}
            >
              Cancel
            </button>
            <button
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
