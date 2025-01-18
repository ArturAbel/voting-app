import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../../../../context/ThemeContext";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

import { useThemeStyles } from "../../../../../hooks/useThemeStyles";

export const ThemeButton = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  const { toggleTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <MdLightMode className={styles.icon} onClick={toggleTheme} />
      ) : (
        <MdOutlineLightMode className={`${styles.icon} ${styles.transparent}`} onClick={toggleTheme} />
      )}
    </>
  );
};
