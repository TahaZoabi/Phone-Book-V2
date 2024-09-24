import { createContext } from "react";
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

// value
const valuesList = {
  initialState,
};

// Create Context
export const GlobalContext = createContext(valuesList);

// Provider Component
export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={valuesList}>
      {children}
    </GlobalContext.Provider>
  );
};
