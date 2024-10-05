import Input from "./Input.jsx";
import ContactList from "./ContactList.jsx";
import { useContext, useState } from "react";
import Button from "./Button.jsx";
import { GlobalContext } from "../GlobalContext.jsx";

function Hero() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearch(value) {
    setSearchValue(value);
  }
  const { setIsConfirmOpen, setDeleteState } = useContext(GlobalContext);
  function handleDeleteAll() {
    setIsConfirmOpen(true);
    setDeleteState({
      type: "all",
    });
  }
  return (
    <>
      <Input searchValue={searchValue} handleSearch={handleSearch} />
      <ContactList searchValue={searchValue} />
      <Button handleClick={handleDeleteAll} idName="delete-all">
        Delete All Contacts
      </Button>
    </>
  );
}

export default Hero;
