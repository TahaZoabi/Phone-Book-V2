// Initial State
export const initialState = [
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

export const initialDeleteValue = {
  type: "",
  id: -1,
  name: "",
};

export const initialDataValue = {
  name: "",
  phoneNumber: "",
  address: "",
  email: "",
};

export const initialEditingValue = {
  mode: false,
  id: null,
};
