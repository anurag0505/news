import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageModal = ({ visible, onClose, onSelectLanguage }) => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const languages = ["en", "hi"];

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem("selectedLanguage");
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
      }
    };

    if (visible) {
      loadLanguage();
    }
  }, [visible]);

  const handleLanguageSelect = async (language) => {
    setSelectedLanguage(language);
    changeLanguage(language);
    onSelectLanguage(language);
    await AsyncStorage.setItem("selectedLanguage", language);
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
          <Text style={styles.modalTitle}>{t("selectLanguage")}</Text>
          {languages.map((language) => (
            <TouchableOpacity
              key={language}
              style={styles.languageOption}
              onPress={() => handleLanguageSelect(language)}
            >
              <Text
                style={[
                  styles.languageText,
                  selectedLanguage === language && styles.selectedText,
                ]}
              >
                {t(language)}
              </Text>
            </TouchableOpacity>
          ))}
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
  languageOption: {
    paddingVertical: 15,
  },
  languageText: {
    fontSize: 16,
  },
  selectedText: {
    color: "#1877F2",
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: 20,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 18,
    color: "#1877F2",
  },
});

export default LanguageModal;
