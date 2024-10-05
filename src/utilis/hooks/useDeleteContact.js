"use client";

import { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext.jsx";

export function useDeleteContact() {
  const initialValue = {
    type: "",
    id: -1,
    name: "",
  };
  const { setContactsList } = useContext(GlobalContext);
  const [deleteState, setDeleteState] = useState(initialValue);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

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
    setIsConfirmOpen((prevState) => !prevState);
    setDeleteState(initialValue);
  }

  return {
    deleteState,
    setDeleteState,
    deleteContact,
    isConfirmOpen,
    setIsConfirmOpen,
  };
}
