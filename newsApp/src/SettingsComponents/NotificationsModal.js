import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Alert,
} from "react-native";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotificationsModal = ({ visible, onClose, onToggleNotifications }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const loadNotificationState = async () => {
      const storedState = await AsyncStorage.getItem("notificationsEnabled");
      if (storedState !== null) {
        setIsEnabled(JSON.parse(storedState));
      }
    };

    if (visible) {
      loadNotificationState();
    }
  }, [visible]);

  const toggleSwitch = async () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    onToggleNotifications(newState);
    await AsyncStorage.setItem(
      "notificationsEnabled",
      JSON.stringify(newState)
    );
    Alert.alert(
      t("notifications"),
      newState ? t("notificationTurnedOn") : t("notificationTurnedOff")
    );
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
          <Text style={styles.modalTitle}>{t("notifications")}</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>
              {isEnabled ? t("on") : t("off")}
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#1877F2" }}
              thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
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
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  switchLabel: {
    fontSize: 16,
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

export default NotificationsModal;
