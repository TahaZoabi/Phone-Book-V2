import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext.jsx";

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
    setDeleteState("");
  }

  return [deleteContact];
}

export default useDeleteContact;
