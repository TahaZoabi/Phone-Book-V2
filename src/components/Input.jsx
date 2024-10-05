import IconSearch from "./Icons/IconSearch.jsx";
import IconRemove from "./Icons/IconRemove.jsx";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";
import Button from "./Button.jsx";
import IconPlus from "./Icons/IconPlus.jsx";

function Input({ searchValue, handleSearch }) {
  const { setIsFormOpen, setFormData } = useContext(GlobalContext);

  function handleClick() {
    setIsFormOpen(true);
    setFormData({ name: "", phoneNumber: "", address: "", email: "" });
  }

  const handleReset = () => {
    handleSearch("");
  };
  return (
    <>
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
    </>
  );
}

export default Input;
