import { useThemeContext } from "../../../../../context/ThemeContext";
import { MdOutlineModeNight, MdModeNight } from "react-icons/md";

import styles from "./ThemeButton.module.css";

export const ThemeButton = () => {
  const { toggleTheme, darkTheme } = useThemeContext();

  return (
    <>
      {darkTheme ? (
        <MdModeNight className={`${styles.icon} ${styles.dark}`} onClick={toggleTheme}></MdModeNight>
      ) : (
        <MdOutlineModeNight className={styles.icon} onClick={toggleTheme}></MdOutlineModeNight>
      )}
    </>
  );
};
