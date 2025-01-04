import { useThemeContext } from "../../../context/ThemeContext.jsx";
import { logOut } from "../../../utils/authentication/signOut.js";
import { ThemeButton } from "./ThemeButton/ThemeButton.jsx";
import { CustomLink } from "./CustomLink/CustomLink.jsx";
import { logo } from "../../../utils/variables.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

export const Navbar = ({ user, isAdmin = true }) => {
  const [showLinks, setShowLinks] = useState(false);
  const { darkTheme } = useThemeContext();
  const navigate = useNavigate();

  const toggleLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  const hideLinks = () => {
    setShowLinks(false);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

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
            <CustomLink to="/user">vote</CustomLink>
            {isAdmin && <CustomLink to="/admin">admin</CustomLink>}
            <CustomLink onClick={handleLogout}>logout</CustomLink>
          </ul>
        </div>
      )}
    </nav>
  );
};
