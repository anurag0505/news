import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

const TextSizeModal = ({ visible, onClose, onSelectTextSize }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { t } = useTranslation();

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    onSelectTextSize(size);
  };

  const textSizes = [t("large"), t("default")]; // Define the text size options

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{t("selectTextSize")}</Text>
          {textSizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.textSizeOption,
                selectedSize === size && styles.selectedOption,
              ]}
              onPress={() => handleSizeSelect(size)}
            >
              <Text
                style={[
                  styles.textSizeText,
                  selectedSize === size && styles.selectedText,
                ]}
              >
                {size}
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
  textSizeOption: {
    paddingVertical: 15,
  },
  textSizeText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: "#fff",
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

export default TextSizeModal;
