function AddButton() {
  return (
    <button id="showFormBtn" className="pushable" type="button">
      <span className="edge"></span>
      <span className="front">
        New
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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