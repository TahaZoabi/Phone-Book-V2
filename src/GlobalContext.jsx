import { createContext, useRef, useState } from "react";

// Initial State
const initialState = [
  {
    name: "Emily Johnson",
    phoneNumber: "0543210987",
    address: "456 Oak Avenue, Anycity, USA",
    email: "emily.johnson@example.com",
  },
  {
    name: "Michael Brown",
    phoneNumber: "0505551234",
    address: "789 Elm Street, Anystate, USA",
    email: "michael.brown@example.com",
  },
  {
    name: "Sarah Davis",
    phoneNumber: "0524478714",
    address: "321 Pine Road, Anyvillage, USA",
    email: "sarah.davis@example.com",
  },
  {
    name: "Christopher Wilson",
    phoneNumber: "0544825478",
    address: "654 Maple Lane, Anysuburb, USA",
    email: "christopher.wilson@example.com",
  },
];

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [contactsList, setContactsList] = useState(initialState);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [deleteState, setDeleteState] = useState("");
  const nameRef = useRef("");
  const phoneNumberRef = useRef("");

  return (
    <GlobalContext.Provider
      value={{
        initialState,
        isFormOpen,
        setIsFormOpen,
        nameRef,
        phoneNumberRef,
        contactsList,
        setContactsList,
        isConfirmOpen,
        setIsConfirmOpen,
        deleteState,
        setDeleteState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
