import { useThemeContext } from "../../../context/ThemeContext.jsx";
import { ThemeButton } from "./ThemeButton/ThemeButton.jsx";
import { CustomLink } from "./CustomLink/CustomLink.jsx";
import { logo } from "../../../utils/variables.js";
import { useState } from "react";

import "./Navbar.css";

export const Navbar = ({ user, isAdmin }) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  const hideLinks = () => {
    setShowLinks(false);
  };

  const { darkTheme } = useThemeContext();

  return (
    <nav>
      <div className="navbar-logo-container">
        <img className={`navbar-logo ${darkTheme ? "logoDark" : ""}`} src={logo} alt="logo" />
      </div>
      <p className="navbar-user-name">{""}</p>
      <div className="navbar-icons-container">
        <ThemeButton />
        <img className="user-image" alt={""}></img>
        <button className="navbar-links-toggle" onMouseOver={toggleLinks}></button>
      </div>
      {showLinks && (
        <div className="links-container" onMouseLeave={hideLinks}>
          <ul className="navbar-links">
            <li>
              <CustomLink to="/user">vote</CustomLink>
            </li>
            {isAdmin && (
              <li>
                <CustomLink to="/admin">admin</CustomLink>
              </li>
            )}
            <li>
              <CustomLink to="/">logout</CustomLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
