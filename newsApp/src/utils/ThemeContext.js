import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  active: "#1877F2", // Active icon color in light theme
  inactive: "#888888", // Inactive icon color in light theme
  tabBarBackground: "#000000", // TabBar background in light theme
};

const darkTheme = {
  isDark: true,
  background: "black",
  text: "#ffffff",
  cardBackground: "#333333",
  active: "#1877F2", // Active icon color in dark theme
  inactive: "#888888", // Inactive icon color in dark theme
  tabBarBackground: "#333333", // TabBar background in dark theme
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
