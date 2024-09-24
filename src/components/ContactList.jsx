function ContactList() {
  return (
    <>
      <div id="empty-list">
        <h3>
          Your Contact List is Empty, <br />
          Please add some Contacts
        </h3>
      </div>
      <div className="phone-contact-list"></div>
    </>
  );
}

export default ContactList;
