import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../utils/ThemeContext";
import { useTranslation } from "react-i18next";

const ThemeModal = ({ visible, onClose }) => {
  const { theme, selectTheme } = useTheme();
  const { t } = useTranslation();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    if (visible) {
      setSelectedTheme(theme);
    }
  }, [visible, theme]);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    selectTheme(theme);
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{t("selectTheme")}</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.themeOption}
              onPress={() => handleThemeSelect("automatic")}
            >
              <Ionicons name="contrast" size={20} color="#000" />
              <Text style={styles.themeText}>{t("automatic")}</Text>
              <View style={styles.radioContainer}>
                <View style={styles.radio}>
                  {selectedTheme === "automatic" && (
                    <View style={styles.radioSelected} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.themeOption}
              onPress={() => handleThemeSelect("light")}
            >
              <Ionicons name="sunny" size={20} color="#000" />
              <Text style={styles.themeText}>{t("light")}</Text>
              <View style={styles.radioContainer}>
                <View style={styles.radio}>
                  {selectedTheme === "light" && (
                    <View style={styles.radioSelected} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.themeOption}
              onPress={() => handleThemeSelect("dark")}
            >
              <Ionicons name="moon" size={20} color="#000" />
              <Text style={styles.themeText}>{t("dark")}</Text>
              <View style={styles.radioContainer}>
                <View style={styles.radio}>
                  {selectedTheme === "dark" && (
                    <View style={styles.radioSelected} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>{t("close")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionsContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
  },
  themeOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  themeText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
  closeButton: {
    marginTop: 20,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    color: "#1877F2",
  },
  radioContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#1877F2",
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#1877F2",
  },
});

export default ThemeModal;
