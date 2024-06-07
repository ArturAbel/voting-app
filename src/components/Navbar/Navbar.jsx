import { ThemeButton } from "./ThemeButton/ThemeButton";
import { CustomLink } from "./CustomLink/CustomLink";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navbar.css";

export const Navbar = ({ user, isAdmin }) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="navbar-logo-container">
        <img
          className="navbar-logo"
          src="../../assets/svg/logo/logo.svg"
          alt="logo"
        />
      </div>
      <div className="navbar-icons-container">
        <ThemeButton />
        <img className="user-image" src={user.image}></img>
        <div className="navbar-links-toggle" onMouseOver={toggleLinks}></div>
      </div>
      {showLinks && (
        <div className="links-container">
          <p className="links-user-name">{user.fullName}</p>
          <ul className="navbar-links">
            <CustomLink to={"vote"}>vote</CustomLink>
            {isAdmin && <CustomLink to={"admin"}>admin</CustomLink>}
            <CustomLink to={"logout"}>logout</CustomLink>
          </ul>
        </div>
      )}
    </nav>
  );
};
