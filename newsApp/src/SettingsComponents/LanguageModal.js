import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LanguageModal = ({ visible, onClose, onSelectLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const languages = ["English", "Spanish", "French", "German"]; // Add your supported languages here

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    onSelectLanguage(language);
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
          <Text style={styles.modalTitle}>Select Language</Text>
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
                {language}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
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
    fontSize: 16,
    color: "#1877F2",
  },
});

export default LanguageModal;
