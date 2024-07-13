import React from "react";
import { TouchableOpacity, Platform } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = ({ title }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <HeaderWrapper>
      {Platform.OS === "android" && <AndroidShadowContainer theme={theme} />}
      <HeaderContainer theme={theme}>
        <BackButton onPress={() => navigation.navigate("settingsScreen")}>
          <Icon name="arrow-back" size={24} color={theme.text} />
        </BackButton>
        <HeaderText theme={theme}>{title}</HeaderText>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding: 15px;
  ${Platform.select({
    ios: (props) => `
      shadow-color: ${props.theme.active};
      shadow-offset: 0px 2px;
      shadow-opacity: 0.25;
      shadow-radius: 3.84px;
    `,
    android: `
      elevation: 5;
    `,
  })}
`;

const AndroidShadowContainer = styled.View.attrs((props) => ({
  style: {
    backgroundColor: props.theme.active,
    opacity: 0.2,
    borderRadius: 3.84,
    elevation: 5,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.text};
  font-weight: 500;
  flex: 1;
  text-align: left;
  padding-left: 40px;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 15px;
  top: 15px;
`;

const HeaderWrapper = styled.View`
  position: relative;
  width: 100%;
  height: auto;
`;
