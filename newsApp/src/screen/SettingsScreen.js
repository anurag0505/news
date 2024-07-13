import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import LanguageModal from "../SettingsComponents/LanguageModal";
import ThemeModal from "../SettingsComponents/ThemeModal";
import TextSizeModal from "../SettingsComponents/TextSizeModal";
import NotificationModal from "../SettingsComponents/NotificationsModal";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const [isThemeModalVisible, setThemeModalVisible] = useState(false);
  const [isTextSizeModalVisible, setTextSizeModalVisible] = useState(false);
  const [isNotificationModalVisible, setNotificationModalVisible] =
    useState(false);
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);

  const handleLanguageSelect = (language) => {
    console.log("Selected language:", language);
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

  const handleToggleNotification = () => {
    setNotificationEnabled((prevState) => !prevState);
  };

  return (
    <SettingsContainer>
      <Banner>
        <Heading>Settings</Heading>
      </Banner>
      <Category>
        <CategoryTitle>General</CategoryTitle>
        <SettingOption onPress={() => navigation.navigate("BookMark")}>
          <Ionicons name="bookmark" size={24} color="#1877F2" />
          <OptionText>Bookmark</OptionText>
        </SettingOption>
        <SettingOption onPress={() => setLanguageModalVisible(true)}>
          <Ionicons name="language" size={24} color="#1877F2" />
          <OptionText>Language</OptionText>
        </SettingOption>
      </Category>
      <Category>
        <CategoryTitle>Appearance</CategoryTitle>
        <SettingOption onPress={() => setThemeModalVisible(true)}>
          <Ionicons name="color-palette" size={24} color="#1877F2" />
          <OptionText>Theme</OptionText>
        </SettingOption>
        <SettingOption onPress={() => setTextSizeModalVisible(true)}>
          <Ionicons name="text" size={24} color="#1877F2" />
          <OptionText>Text Size</OptionText>
        </SettingOption>
      </Category>
      <Category>
        <CategoryTitle>Notifications</CategoryTitle>
        <SettingOption onPress={() => setNotificationModalVisible(true)}>
          <Ionicons name="notifications" size={24} color="#1877F2" />
          <OptionText>Notifications</OptionText>
        </SettingOption>
      </Category>
      <LanguageModal
        visible={isLanguageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
        onSelectLanguage={handleLanguageSelect}
      />
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
      <NotificationModal
        visible={isNotificationModalVisible}
        onClose={() => setNotificationModalVisible(false)}
        onToggleNotification={handleToggleNotification}
        isNotificationEnabled={isNotificationEnabled}
      />
    </SettingsContainer>
  );
};

export default SettingsScreen;

const SettingsContainer = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const Banner = styled.View`
  background-color: #1877f2;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Heading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  font-family: serif;
`;

const Category = styled.View`
  margin-bottom: 30px;
  padding: 0 20px;
`;

const CategoryTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  font-family: serif;
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
