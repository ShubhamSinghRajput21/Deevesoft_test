import React from "react";
import "../style/Header.css";
import { useStateValue } from "../utils/StateProvider";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0CTgdV5AUS8tEnZ1d3yinG1w0wbsY5RrxWg&usqp=CAU"
        alt="Logo"
        className="header__logo"
      />
      <h2>Just be You</h2>
      <Link to={!user && "/login"}>
        <div onClick={handleAuthenticaton} className="header__option">
          <span className="header__optionLineOne">
            Hello {!user ? "Guest" : user.email}
          </span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
