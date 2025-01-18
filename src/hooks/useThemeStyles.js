import { useTheme } from "../context/ThemeContext";

export const useThemeStyles = (lightTheme, darkTheme) => {
  const { theme } = useTheme();
  return theme === "light" ? lightTheme : darkTheme;
};
