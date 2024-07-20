import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TextSizeModal = ({ visible, onClose, onSelectTextSize }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { t } = useTranslation();
  const textSizes = [t("default"), t("large")];

  useEffect(() => {
    const loadTextSize = async () => {
      const storedSize = await AsyncStorage.getItem("selectedTextSize");
      if (storedSize) {
        setSelectedSize(storedSize);
      }
    };

    if (visible) {
      loadTextSize();
    }
  }, [visible]);

  const handleSizeSelect = async (size) => {
    setSelectedSize(size);
    onSelectTextSize(size);
    await AsyncStorage.setItem("selectedTextSize", size);
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
          <Text style={styles.modalTitle}>{t("selectTextSize")}</Text>
          {textSizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={styles.textSizeOption}
              onPress={() => handleSizeSelect(size)}
            >
              <Text
                style={[
                  styles.textSizeText,
                  selectedSize === size && styles.selectedText,
                ]}
              >
                {t(size)}
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
