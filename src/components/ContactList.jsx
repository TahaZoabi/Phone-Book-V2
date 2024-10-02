import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";
import Contact from "./Contact.jsx";

function ContactList({ searchValue }) {
  const { contactsList } = useContext(GlobalContext);
  // Sort the initial state contacts
  const sortedContacts = contactsList.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const filteredContacts = searchValue
    ? sortedContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : sortedContacts;

  return (
    <>
      {contactsList?.length === 0 ? (
        <div id="empty-list">
          <h3>
            Your Contact List is Empty, <br />
            Please add some Contacts
          </h3>
        </div>
      ) : (
        <div className="phone-contact-list">
          {filteredContacts.map((contact, index) => (
            <Contact key={contact.name} contact={contact} index={index} />
          ))}
        </div>
      )}
    </>
  );
}

export default ContactList;
