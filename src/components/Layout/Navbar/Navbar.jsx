import { useThemeContext } from "../../../context/ThemeContext.jsx";
import { CustomLink } from "./components/CustomLink/CustomLink.jsx";
import { logOut } from "../../../utils/authentication/signOut.js";
import { ThemeButton } from "./ThemeButton/ThemeButton.jsx";
import { LINK } from "../../../constants/navigation.js";
import { useNavigate } from "react-router-dom";
import Logo from "../../UI/Logo/Logo.jsx";
import { useState } from "react";

import styles from "./Navbar.module.css";

export const Navbar = ({ isAdmin = true }) => {
  const [showLinks, setShowLinks] = useState(false);
  const { darkTheme } = useThemeContext();
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  const hideLinks = () => {
    setShowLinks(false);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate(`/${LINK.LOGIN}`);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.links}></div>
      <div className={styles.icons}>
        <ThemeButton />
        <div onClick={handleAvatarClick} className={styles.avatar}>
          <img alt={""}></img>
        </div>
      </div>

      {showLinks && (
        <div className={styles.settingContainer} onMouseLeave={hideLinks}>
          <ul className={styles.settings}>
            <CustomLink to="/user">vote</CustomLink>
            {isAdmin && <CustomLink to="/admin">admin</CustomLink>}
            <CustomLink onClick={handleLogout}>logout</CustomLink>
          </ul>
        </div>
      )}
    </nav>
  );
};
