import { createContext, useState } from "react";

// Initial State
const initialState = [
  {
    id: 1,
    name: "Emily Johnson",
    phoneNumber: "0543210987",
    address: "456 Oak Avenue, Anycity, USA",
    email: "emily.johnson@example.com",
  },
  {
    id: 2,
    name: "Michael Brown",
    phoneNumber: "0505551234",
    address: "789 Elm Street, Anystate, USA",
    email: "michael.brown@example.com",
  },
  {
    id: 3,
    name: "Sarah Davis",
    phoneNumber: "0524478714",
    address: "321 Pine Road, Anyvillage, USA",
    email: "sarah.davis@example.com",
  },
  {
    id: 4,
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
  const [isEditing, setIsEditing] = useState({
    mode: false,
    id: null,
  });
  const [deleteState, setDeleteState] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        initialState,
        isFormOpen,
        setIsFormOpen,
        formData,
        contactsList,
        setContactsList,
        isConfirmOpen,
        setIsConfirmOpen,
        deleteState,
        setDeleteState,
        isEditing,
        setIsEditing,
        setFormData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
