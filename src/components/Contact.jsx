import userProfilePic from "../assets/user.png";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../utilis/Contexts/GlobalContext.jsx";
import IconEdit from "./Icons/IconEdit.jsx";
import IconDelete from "./Icons/IconDelete.jsx";
import { useDeleteContact } from "../utilis/hooks/useDeleteContact.js";

function Contact({ contact }) {
  const { setIsFormOpen, setFormData, setIsEditing } =
    useContext(GlobalContext);

  const { deleteState, setDeleteState, setIsConfirmOpen, isConfirmOpen } =
    useDeleteContact();

  function handleDeleteClick() {
    setIsConfirmOpen((prevState) => !prevState);
    console.log(deleteState);
    setDeleteState({
      type: "individual",
      id: contact.id,
      name: contact.name,
    });
  }

  useEffect(() => {
    if (deleteState.type) {
      console.log(isConfirmOpen);
      console.log("Delete state updated: ", { deleteState });
    }
  }, [deleteState, setIsConfirmOpen]);

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
