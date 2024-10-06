import userProfilePic from "../assets/user.png";
import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext.jsx";
import IconEdit from "./Icons/IconEdit.jsx";
import IconDelete from "./Icons/IconDelete.jsx";

function Contact({ contact }) {
  const {
    setIsConfirmOpen,
    setDeleteState,
    setIsFormOpen,
    setFormData,
    setIsEditing,
  } = useContext(GlobalContext);

  function handleDeleteClick() {
    setIsConfirmOpen(true);
    setDeleteState({
      type: "individual",
      id: contact.id,
      name: contact.name,
    });
  }

  function handleEditClick() {
    setIsEditing({ mode: true, id: contact.id });
    setIsFormOpen(true);

    setFormData({
      name: contact.name,
      phoneNumber: contact.phoneNumber,
      address: contact.address,
      email: contact.email,
    });
  }

  function handleMouseEnter(e) {
    e.target.classList.add("hover");
  }

  function handleMouseLeave(e) {
    e.target.classList.remove("hover");
  }

  return (
    <div
      className="user-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={userProfilePic}
        alt="User Profile Picture"
        className="user-pic"
      />
      <div className="info">
        <span className="name">{contact.name}</span>
        <span className="description">{contact.phoneNumber}</span>
      </div>
      <div className="status">
        <div className="edit">
          <IconEdit handleEdit={handleEditClick} />
        </div>
        <div className="delete">
          <IconDelete handleDelete={handleDeleteClick} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
