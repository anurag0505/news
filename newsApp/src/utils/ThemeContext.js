import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
};

const darkTheme = {
  isDark: true,
  background: "#000000",
  text: "#ffffff",
  text: "#ffffff",
  cardBackground: "#333333",
};

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
