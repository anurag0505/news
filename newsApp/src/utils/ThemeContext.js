import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";
import { SearchBar } from "react-native-screens";

const ThemeContext = createContext();

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  active: "#1877F2", // Active icon color in light theme
  inactive: "#888888", // Inactive icon color in light theme
  primary: "#516083",
  lightgrey: "#D3D3D3",
  SearchBar: "#D3D3D3",
  tabBarBackground: "#000000", // TabBar background in light theme
  shadowColor: "#000000", // Shadow color in light theme
  cardBackground: "#ffffff", // Card background in light theme
};

const darkTheme = {
  isDark: true,
  background: "black",
  text: "#ffffff",
  cardBackground: "#333333",
  SearchBar: "000000",
  active: "#1877F2", // Active icon color in dark theme
  inactive: "#888888", // Inactive icon color in dark theme
  tabBarBackground: "#000000", // TabBar background in dark theme
  shadowColor: "#ffffff", // Shadow color in dark theme
};

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === "dark" ? darkTheme : lightTheme
  );
  const [manualTheme, setManualTheme] = useState(null);

  useEffect(() => {
    if (!manualTheme) {
      setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
    }
  }, [colorScheme, manualTheme]);

  const selectTheme = (theme) => {
    switch (theme) {
      case "light":
        setManualTheme(lightTheme);
        setTheme(lightTheme);
        break;
      case "dark":
        setManualTheme(darkTheme);
        setTheme(darkTheme);
        break;
      case "automatic":
        setManualTheme(null);
        setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
        break;
      default:
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
