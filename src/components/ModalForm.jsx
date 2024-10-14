import "../CSS/modal.css";
import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext.jsx";
import { useForm } from "react-hook-form";
import { initialEditingValue } from "../constants/index.js";
function ModalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {
    isFormOpen,
    setIsFormOpen,
    setContactsList,
    isEditing,
    setIsEditing,
    contactsList,
    setFormData,
    formData,
  } = useContext(GlobalContext);
  function onSubmit(data) {
    const { id } = isEditing;
    if (id) {
      setContactsList((prevContactsList) => {
        const updatedList = [...prevContactsList];
        const index = updatedList.findIndex((c) => c.id === id);
        if (index !== -1) {
          updatedList[index] = { ...formData, id };
        }
        formData.id = id;
        setIsEditing(initialEditingValue);
        return updatedList;
      });
    } else {
      data.id = contactsList.length + 1;
      setContactsList((prevContactsList) => [...prevContactsList, formData]);
      reset();
    }
    setIsFormOpen(false);
  }
  function handleCancelButton() {
    setIsFormOpen(false);
    setIsEditing(initialEditingValue);
    reset();
  }
  return (
    <section
      className={`contact-modal ${isFormOpen ? "display-flex" : "display-none"}`}
    >
      <div id="form-container">
        <div className="header">
          <p className="alert">
            {isEditing.mode ? "Edit Contact" : "New Contact"}{" "}
          </p>
        </div>
        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-property">
            <label className="label-type" htmlFor="name">
              Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name should be 3 characters at least",
                },
              })}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="new-contact-input"
              placeholder={"John Smith"}
            />
            {errors.name && (
              <div className={"error"}>{`${errors.name.message}`}</div>
            )}
            <label className="label-type" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              {...register("phoneNumber", {
                required: "Number is required",
                minLength: { value: 10, message: "Number should be 10 digits" },
                pattern: {
                  value: /^\d+$/,
                  message: "Number should contain only digits",
                },
              })}
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              className="new-contact-input"
              placeholder={"0549876543"}
            />
            {errors.phoneNumber && (
              <div className={"error"}>{`${errors.phoneNumber.message}`}</div>
            )}
            <label className="label-type" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              value={formData.email}
              className="new-contact-input"
              placeholder={"john.smith@example.com"}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <div className={"error"}>{`${errors.email.message}`}</div>
            )}
            <label className="label-type" htmlFor="address">
              Address
            </label>
            <input
              {...register("address", {})}
              className="new-contact-input"
              placeholder={"123 Main Street, AnyTown, USA"}
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            {errors.address && (
              <div className={"error"}>{`${errors.address.message}`}</div>
            )}
          </div>
          <div className="actions">
            <button
              type="button"
              className="mark-as-read cancelBtn"
              onClick={handleCancelButton}
            >
              Cancel
            </button>
            <button type="submit" className="read confirmBtn">
              {isEditing.mode ? "Save" : "Confirm"}{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default ModalForm;
