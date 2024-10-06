import { createContext, useState } from "react";
import {
  initialDataValue,
  initialDeleteValue,
  initialEditingValue,
  initialState,
} from "../constants/index.js";

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [contactsList, setContactsList] = useState(initialState);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(initialEditingValue);
  const [deleteState, setDeleteState] = useState(initialDeleteValue);
  const [formData, setFormData] = useState(initialDataValue);

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
