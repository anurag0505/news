import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const storedBookmarks = await AsyncStorage.getItem("bookmarks");
        if (storedBookmarks) {
          setBookmarks(JSON.parse(storedBookmarks));
        }
      } catch (error) {
        console.error("Failed to load bookmarks from storage:", error);
      }
    };

    loadBookmarks();
  }, []);

  const saveBookmarks = async (newBookmarks) => {
    try {
      await AsyncStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
      console.log("Bookmarks saved:", newBookmarks);
    } catch (error) {
      console.error("Failed to save bookmarks to storage:", error);
    }
  };

  const addBookmark = (news) => {
    const newsWithId = { ...news }; // No UUID needed if `news` already has an ID
    const updatedBookmarks = [...bookmarks, newsWithId];
    setBookmarks(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
  };

  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter((item) => item.id !== id);
    setBookmarks(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
