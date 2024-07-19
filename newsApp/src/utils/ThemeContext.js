import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  active: "#1877F2",
  inactive: "#888888",
  primary: "#516083",
  lightgrey: "#D3D3D3",
  SearchBar: "#D3D3D3",
  tabBarBackground: "#000000",
  shadowColor: "#000000",
  cardBackground: "#ffffff",
};

const darkTheme = {
  isDark: true,
  background: "black",
  text: "#ffffff",
  cardBackground: "#333333",
  SearchBar: "#000000",
  active: "#1877F2",
  inactive: "#888888",
  tabBarBackground: "#000000",
  shadowColor: "#ffffff",
};

const getStoredTheme = async () => {
  try {
    const storedTheme = await AsyncStorage.getItem("theme");
    return storedTheme;
  } catch (error) {
    console.error("Failed to load theme from storage", error);
    return null;
  }
};

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === "dark" ? darkTheme : lightTheme
  );
  const [manualTheme, setManualTheme] = useState(null);

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await getStoredTheme();
      if (storedTheme) {
        setManualTheme(storedTheme);
        setTheme(storedTheme === "dark" ? darkTheme : lightTheme);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    if (!manualTheme) {
      setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
    }
  }, [colorScheme, manualTheme]);

  const selectTheme = async (selectedTheme) => {
    switch (selectedTheme) {
      case "light":
        setManualTheme(lightTheme);
        setTheme(lightTheme);
        await AsyncStorage.setItem("theme", "light");
        break;
      case "dark":
        setManualTheme(darkTheme);
        setTheme(darkTheme);
        await AsyncStorage.setItem("theme", "dark");
        break;
      case "automatic":
        setManualTheme(null);
        setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
        await AsyncStorage.removeItem("theme");
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
