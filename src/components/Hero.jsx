import Input from "./Input.jsx";
import ContactList from "./ContactList.jsx";
import { useState } from "react";

function Hero() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearch(value) {
    setSearchValue(value);
  }
  return (
    <>
      <Input searchValue={searchValue} handleSearch={handleSearch} />
      <ContactList searchValue={searchValue} />
    </>
  );
}

export default Hero;
