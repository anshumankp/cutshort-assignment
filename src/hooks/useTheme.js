import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode: darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
