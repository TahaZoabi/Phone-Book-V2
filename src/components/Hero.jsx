import { useContext, useState } from "react";
import Button from "./Button.jsx";
import { GlobalContext } from "../Contexts/GlobalContext.jsx";
import Contact from "./Contact.jsx";
import logo from "../assets/call.png";
import IconSearch from "./Icons/IconSearch.jsx";
import IconRemove from "./Icons/IconRemove.jsx";
import IconPlus from "./Icons/IconPlus.jsx";
import { initialDataValue } from "../constants/index.js";

function Hero() {
  const { contactsList, setIsFormOpen, setFormData } =
    useContext(GlobalContext);

  function handleClick() {
    setIsFormOpen(true);
    setFormData(initialDataValue);
  }

  const handleReset = () => {
    handleSearch("");
  };

  // Sort the initial state contacts
  const sortedContacts = contactsList.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const [searchValue, setSearchValue] = useState("");
  function handleSearch(value) {
    setSearchValue(value);
  }

  const filteredContacts = searchValue
    ? sortedContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : sortedContacts;

  const { setIsConfirmOpen, setDeleteState } = useContext(GlobalContext);
  function handleDeleteAll() {
    setIsConfirmOpen(true);
    setDeleteState({
      type: "all",
    });
  }
  return (
    <>
      {/* Header */}

      <div className="logo-header">
        <div>
          <img id="logo" src={logo} alt="logo" />
        </div>
        <h1>Phone Book App</h1>
      </div>
      <span className="title">List of Contacts</span>
      <div className="contact-container">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <IconSearch />
          <input
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className="input"
            placeholder="Search Contacts..."
            required
            type="text"
            id="search-input"
          />
          <IconRemove handleReset={handleReset} />
        </form>
        <Button idName="showFormBtn" handleClick={handleClick}>
          New <IconPlus />
        </Button>
      </div>

      {/* Contacts List */}

      {contactsList?.length === 0 ? (
        <div id="empty-list">
          <h3>
            Your Contact List is Empty, <br />
            Please add some Contacts
          </h3>
        </div>
      ) : (
        <div className="phone-contact-list">
          {filteredContacts.map((contact) => (
            <Contact key={contact.name} contact={contact} />
          ))}
        </div>
      )}
      <Button handleClick={handleDeleteAll} idName="delete-all">
        Delete All Contacts
      </Button>
    </>
  );
}

export default Hero;
