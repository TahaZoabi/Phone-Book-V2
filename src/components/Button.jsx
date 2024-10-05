function Button({ idName, handleClick, children }) {
  return (
    <button id={idName} className="pushable" type="button">
      <span className="edge"></span>
      <span className="front" onClick={handleClick}>
        {children}
      </span>
    </button>
  );
}

export default Button;
