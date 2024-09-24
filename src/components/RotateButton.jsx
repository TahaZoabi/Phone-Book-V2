function RotateButton() {
  function handleRotateClick(e) {
    e.preventDefault();
    const body = document.body;
    body.classList.toggle("rotate");
  }

  return (
    <div className="rotation">
      <span className="rotate-btn">
        <svg
          onClick={handleRotateClick}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-rotate-cw"
        >
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      </span>
    </div>
  );
}

export default RotateButton;
