import AddButton from "./AddButton.jsx";

function Input() {
  return (
    <>
      <span className="title">List of Contacts</span>
      <div className="contact-container">
        <form className="search-form">
          <button type="button" aria-label="Search">
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <input
            className="input"
            placeholder="Search Contacts..."
            required
            type="text"
            id="search-input"
          />

          <button type="reset" className="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              id="search-btn"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
        <AddButton />
      </div>
    </>
  );
}

export default Input;
