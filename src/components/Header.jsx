import logo from "../assets/call.png";

function Header() {
  return (
    <>
      <div className="logo-header">
        <div>
          <img id="logo" src={logo} alt="logo" />
        </div>
        <h1>Phone Book App</h1>
      </div>
    </>
  );
}

export default Header;
