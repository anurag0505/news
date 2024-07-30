import React from "react";
import { TouchableOpacity, Platform, Button } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";
import { useTextSize } from "../utils/TextSizeContext";

const Header = ({ title }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const { textSize } = useTextSize();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <HeaderWrapper>
      {Platform.OS === "android" && <AndroidShadowContainer theme={theme} />}
      <HeaderContainer theme={theme}>
        <Icon
          name="arrow-left"
          size={30}
          onPress={handlePress}
          style={{ color: theme.text }}
        />
        <HeaderText textSize={textSize} theme={theme}>
          {title}
        </HeaderText>
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
  color: ${(props) => props.theme.text};
`;

const HeaderText = styled.Text`
  font-size: ${(props) => (props.textSize === "large" ? 21 : 20)}px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  flex: 1;
  text-align: left;
  padding-left: 15px;
`;

const HeaderWrapper = styled.View`
  position: relative;
  width: 100%;
  height: auto;
`;
