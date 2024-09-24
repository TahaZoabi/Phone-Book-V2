import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";
import Contact from "./Contact.jsx";

function ContactList() {
  const { initialState } = useContext(GlobalContext);
  const contacts = [...initialState];
  return (
    <>
      {contacts.length === 0 ? (
        <div id="empty-list">
          <h3>
            Your Contact List is Empty, <br />
            Please add some Contacts
          </h3>
        </div>
      ) : (
        <div className="phone-contact-list">
          {contacts.map((contact) => {
            return <Contact key={contact.PhoneNumber} contact={contact} />;
          })}
        </div>
      )}
    </>
  );
}

export default ContactList;
