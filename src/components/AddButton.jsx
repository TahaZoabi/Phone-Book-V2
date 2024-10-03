import { useContext } from "react";
import { GlobalContext } from "../GlobalContext.jsx";

function AddButton() {
  const { setIsFormOpen, setFormData } = useContext(GlobalContext);

  function handleClick() {
    setIsFormOpen(true);
    setFormData({ name: "", phoneNumber: "", address: "", email: "" });
  }

  return (
    <button id="showFormBtn" className="pushable" type="button">
      <span className="edge"></span>
      <span className="front" onClick={handleClick}>
        New
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-plus"
          role="img"
          aria-label="Add new contact"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </span>
    </button>
  );
}

export default AddButton;
