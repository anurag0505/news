import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../utils/ThemeContext";
import LanguageModal from "../SettingsComponents/LanguageModal";
import ThemeModal from "../SettingsComponents/ThemeModal";
import TextSizeModal from "../SettingsComponents/TextSizeModal";
import NotificationsModal from "../SettingsComponents/NotificationsModal";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const [isThemeModalVisible, setThemeModalVisible] = useState(false);
  const [isTextSizeModalVisible, setTextSizeModalVisible] = useState(false);
  const [isNotificationModalVisible, setNotificationModalVisible] =
    useState(false);
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);

  const handleLanguageSelect = (language) => {
    console.log("Selected language:", language);
    i18n.changeLanguage(language);
    setLanguageModalVisible(false);
  };

  const handleThemeSelect = (theme) => {
    console.log("Selected theme:", theme);
    setThemeModalVisible(false);
    // Add logic to set the theme here
  };

  const handleTextSizeSelect = (textSize) => {
    console.log("Selected textSize:", textSize);
    setTextSizeModalVisible(false);
    // Add logic to set the text size here
  };

  const handleToggleNotification = (isEnabled) => {
    console.log("Notification enabled:", isEnabled);
    setNotificationEnabled(isEnabled);
  };

  return (
    <SettingsContainer theme={theme}>
      <Heading>{t("settings")}</Heading>
      <Category>
        <CategoryTitle>{t("general")}</CategoryTitle>
        <SettingOption onPress={() => navigation.navigate("BookMark")}>
          <Ionicons name="bookmark" size={24} color="#1877F2" />
          <OptionText>{t("bookmark")}</OptionText>
        </SettingOption>
        <SettingOption onPress={() => setLanguageModalVisible(true)}>
          <Ionicons name="language" size={24} color="#1877F2" />
          <OptionText>{t("language")}</OptionText>
        </SettingOption>
      </Category>
      <Category>
        <CategoryTitle>{t("appearance")}</CategoryTitle>
        <SettingOption onPress={() => setThemeModalVisible(true)}>
          <Ionicons name="color-palette" size={24} color="#1877F2" />
          <OptionText>{t("theme")}</OptionText>
        </SettingOption>
        <SettingOption onPress={() => setTextSizeModalVisible(true)}>
          <Ionicons name="text" size={24} color="#1877F2" />
          <OptionText>{t("textSize")}</OptionText>
        </SettingOption>
      </Category>
      <Category>
        <CategoryTitle>{t("notifications")}</CategoryTitle>
        <SettingOption onPress={() => setNotificationModalVisible(true)}>
          <Ionicons name="notifications" size={24} color="#1877F2" />
          <OptionText>{t("notifications")}</OptionText>
        </SettingOption>
      </Category>
      {isLanguageModalVisible && (
        <LanguageModal
          visible={isLanguageModalVisible}
          onClose={() => setLanguageModalVisible(false)}
          onSelectLanguage={handleLanguageSelect}
        />
      )}
      <ThemeModal
        visible={isThemeModalVisible}
        onClose={() => setThemeModalVisible(false)}
        onSelectTheme={handleThemeSelect}
      />
      <TextSizeModal
        visible={isTextSizeModalVisible}
        onClose={() => setTextSizeModalVisible(false)}
        onSelectTextSize={handleTextSizeSelect}
      />
      <NotificationsModal
        visible={isNotificationModalVisible}
        onClose={() => setNotificationModalVisible(false)}
        onToggleNotifications={handleToggleNotification}
        isNotificationEnabled={isNotificationEnabled}
      />
    </SettingsContainer>
  );
};

export default SettingsScreen;

const SettingsContainer = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const Heading = styled.Text`
  font-size: 36px;
  font-weight: 600;
  font-family: serif;
  color: ${(props) => props.theme.text};
  padding: 50px 20px;
`;

const Category = styled.View`
  margin-bottom: 30px;
  padding: 0 20px;
`;

const CategoryTitle = styled.Text`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;
  font-family: serif;
  color: ${(props) => props.theme.text};
`;

const SettingOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const OptionText = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  color: grey;
  font-family: serif;
`;
