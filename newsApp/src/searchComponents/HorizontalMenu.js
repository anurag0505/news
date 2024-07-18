import React from "react";
import { ScrollView, TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../utils/ThemeContext";
import { useTranslation } from "react-i18next";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const menuItems = [
  { title: "allNews", icon: "article" },
  { title: "topStories", icon: "star" },
  { title: "breakingNews", icon: "local-fire-department" },
  { title: "unread", icon: "remove-red-eye" },
  { title: "bookmark", icon: "bookmark" },
  { title: "feeds", icon: "feed" },
];

const HorizontalMenu = ({ onItemPress }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <Container theme={theme}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onPress={() => onItemPress(t(item.title))}>
            <IconWrapper>
              <MaterialIcons name={item.icon} size={50} color={theme.active} />
            </IconWrapper>
            <Title theme={theme}>{t(item.title)}</Title>
          </MenuItem>
        ))}
      </ScrollView>
    </Container>
  );
};

export default HorizontalMenu;

const Container = styled.View`
  padding: 20px 0;
  height: ${screenHeight * 0.19}px;
  background-color: ${(props) => props.theme.background};
`;

const MenuItem = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  margin: 0 12px;
`;

const IconWrapper = styled.View`
  padding: 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;
`;

const Title = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.text};
  font-family: sans-serif;
  font-weight: 600;
  letter-spacing: -1px;
`;
