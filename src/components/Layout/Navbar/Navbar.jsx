import LogoContainer from "./components/LogoContainer/LogoContainer.jsx";
import { ThemeButton } from "./components/ThemeButton/ThemeButton.jsx";
import { LinkSetting } from "./components/LinkSetting/LinkSetting.jsx";
import { NAVBAR_LINKS, SETTING_LINKS } from "./data/Navbar.data.js";
import { logOut } from "../../../utils/authentication/signOut.js";
import { useThemeStyles } from "../../../hooks/useThemeStyles.js";
import LinkNavbar from "./components/LinkNavbar/LinkNavbar.jsx";
import { LINK } from "../../../constants/navigation.js";
import { useSelector } from "react-redux";
import { useState } from "react";

import utilStyles from "../../../css/utils.module.css";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

// Connect auth
const isAdmin = false;

export const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  const styles = useThemeStyles(lightStyles, darkStyles);
  const [showLinks, setShowLinks] = useState(false);

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
      <LogoContainer />
      <div className={styles.links}>
        {NAVBAR_LINKS.map(({ text, to }) => (
          <LinkNavbar key={to} text={text} to={to} />
        ))}
      </div>
      <div className={styles.icons}>
        <ThemeButton />
        <div onClick={handleAvatarClick} className={`${styles.avatar} ${utilStyles.noSelect}`}>
          <img src={userData?.profileImage} className={styles.image} alt={""} />
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
