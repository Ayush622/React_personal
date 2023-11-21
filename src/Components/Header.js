import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [loginLabel, setLoginLable] = useState("Login");

  const buttonClicked = () => {
    if (loginLabel === "Login") {
      return setLoginLable("Logout");
    }
    return setLoginLable("Login");
  };
  return (
    <div className="header">
      <div className="logo">
        <img className="image" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="loginLable" onClick={() => buttonClicked()}>
            {loginLabel}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
