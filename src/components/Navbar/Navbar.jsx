import { ThemeButton } from "./ThemeButton/ThemeButton";
import { CustomLink } from "./CustomLink/CustomLink";
import { logo } from "../../utils/variables.js";
import { useState } from "react";

import "./Navbar.css";

export const Navbar = ({ user, isAdmin }) => {
  const [showLinks, setShowLinks] = useState(false);
  const { fullName, image } = user;

  const toggleLinks = () => {
    setShowLinks(true);
  };

  const hideLinks = () => {
    setShowLinks(false);
  };

  return (
    <nav>
      <div className="navbar-logo-container">
        <img className="navbar-logo" src={logo} alt="logo" />
      </div>
      <p className="navbar-user-name">{fullName}</p>
      <div className="navbar-icons-container">
        <ThemeButton />
        <img className="user-image" alt={fullName} src={image}></img>
        <div className="navbar-links-toggle" onMouseOver={toggleLinks}></div>
      </div>
      {showLinks && (
        <div className="links-container" onMouseLeave={hideLinks}>
          <ul className="navbar-links">
            <li>
              <CustomLink to={"/"}>vote</CustomLink>
            </li>
            <li>{isAdmin && <CustomLink to={"admin"}>admin</CustomLink>}</li>
            <li>
              <li>
                <CustomLink to={"/logout"}>logout</CustomLink>
              </li>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
