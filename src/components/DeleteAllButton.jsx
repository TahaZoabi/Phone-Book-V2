import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";

function DeleteAllButton() {
  const { setIsConfirmOpen, setDeleteState } = useContext(GlobalContext);
  function handleDeleteAll() {
    setIsConfirmOpen(true);
    setDeleteState("all");
  }
  return (
    <button id="delete-all" className="pushable" type="button">
      <span className="edge"></span>
      <span className="front delete-btn" onClick={handleDeleteAll}>
        Delete All Contacts
      </span>
    </button>
  );
}

export default DeleteAllButton;
