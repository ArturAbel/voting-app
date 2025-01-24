import { createContext, useState, useContext, useCallback } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")), []);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        setTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
