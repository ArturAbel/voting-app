import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => setDarkTheme((prevTheme) => !prevTheme);

  return (
    <ThemeContext.Provider
      value={{
        setDarkTheme,
        toggleTheme,
        darkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useThemeContext };
