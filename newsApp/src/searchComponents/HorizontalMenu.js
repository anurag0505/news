import React from "react";
import { ScrollView, TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../utils/ThemeContext";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const menuItems = [
  { title: "All News", icon: "article" },
  { title: "Top Stories", icon: "star" },
  { title: "Breaking News", icon: "local-fire-department" },
  { title: "Unread", icon: "remove-red-eye" },
  { title: "Bookmark", icon: "bookmark" },
  { title: "Feeds", icon: "feed" },
];

const HorizontalMenu = ({ onItemPress }) => {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onPress={() => onItemPress(item.title)}>
            <IconWrapper>
              <MaterialIcons name={item.icon} size={50} color={theme.active} />
            </IconWrapper>
            <Title theme={theme}>{item.title}</Title>
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
