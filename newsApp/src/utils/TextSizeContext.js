import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TextSizeContext = createContext();

export const TextSizeProvider = ({ children }) => {
  const [textSize, setTextSize] = useState("default");

  useEffect(() => {
    const loadTextSize = async () => {
      const storedSize = await AsyncStorage.getItem("selectedTextSize");
      if (storedSize) {
        setTextSize(storedSize);
      }
    };
    loadTextSize();
  }, []);

  const updateTextSize = async (size) => {
    setTextSize(size);
    await AsyncStorage.setItem("selectedTextSize", size);
  };

  return (
    <TextSizeContext.Provider value={{ textSize, updateTextSize }}>
      {children}
    </TextSizeContext.Provider>
  );
};

export const useTextSize = () => useContext(TextSizeContext);
