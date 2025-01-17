import { ThemeButton } from "./components/ThemeButton/ThemeButton.jsx";
import { LinkSetting } from "./components/LinkSetting/LinkSetting.jsx";
import { useThemeContext } from "../../../context/ThemeContext.jsx";
import { NAVBAR_LINKS, SETTING_LINKS } from "./data/Navbar.data.js";
import { logOut } from "../../../utils/authentication/signOut.js";
import LinkNavbar from "./components/LinkNavbar/LinkNavbar.jsx";
import { LINK } from "../../../constants/navigation.js";
import Logo from "../../UI/Logo/Logo.jsx";
import { useState } from "react";

import styles from "./Navbar.module.css";

// Connect auth
const isAdmin = false;

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { darkTheme } = useThemeContext();

  const handleAvatarClick = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.links}>
        {NAVBAR_LINKS.map(({ text, to }) => (
          <LinkNavbar key={to} text={text} to={to} />
        ))}
      </div>
      <div className={styles.icons}>
        <ThemeButton />
        <div onClick={handleAvatarClick} className={styles.avatar}>
          {/* NOTE:User image */}
          <img alt={""} />
          {showLinks && (
            <div className={styles.settings}>
              {SETTING_LINKS.slice(0, 2).map(({ text, to }) => (
                <LinkSetting text={text} to={to} key={to} />
              ))}
              {isAdmin && SETTING_LINKS.slice(2, 3).map(({ text, to }) => <LinkSetting text={text} to={to} key={to} />)}
              <LinkSetting onClick={handleLogout} to={`/${LINK.LOGIN}`} text={"Logout"} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
