import { createContext } from "react";
// Initial State
const initialState = [
  {
    Name: "Emily Johnson",
    PhoneNumber: "0543210987",
    Address: "456 Oak Avenue, Anycity, USA",
    Email: "emily.johnson@example.com",
  },
  {
    Name: "Michael Brown",
    PhoneNumber: "0505551234",
    Address: "789 Elm Street, Anystate, USA",
    Email: "michael.brown@example.com",
  },
  {
    Name: "Sarah Davis",
    PhoneNumber: "0524478714",
    Address: "321 Pine Road, Anyvillage, USA",
    Email: "sarah.davis@example.com",
  },
  {
    Name: "Christopher Wilson",
    PhoneNumber: "0544825478",
    Address: "654 Maple Lane, Anysuburb, USA",
    Email: "christopher.wilson@example.com",
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
