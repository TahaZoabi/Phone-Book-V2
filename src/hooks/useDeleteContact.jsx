import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext.jsx";
import { initialDeleteValue } from "../constants/index.js";

function useDeleteContact() {
  const { setIsConfirmOpen, setContactsList, deleteState, setDeleteState } =
    useContext(GlobalContext);

  function deleteContact() {
    if (deleteState.type === "individual") {
      setContactsList((contactList) =>
        contactList.filter((contact) => contact.id !== deleteState.id),
      );
    } else if (deleteState.type === "all") {
      setContactsList([]);
    }
    resetActions();
  }

  function resetActions() {
    setIsConfirmOpen(false);
    setDeleteState(initialDeleteValue);
  }

  return [deleteContact];
}

export default useDeleteContact;
