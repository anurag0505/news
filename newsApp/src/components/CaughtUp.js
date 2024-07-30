import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import { useTextSize } from "../utils/TextSizeContext";
import { useTranslation } from "react-i18next";
import Happy from "../assets/images/happy3.png";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const CaughtUp = () => {
  const { theme } = useTheme();
  const { textSize } = useTextSize();
  const { t } = useTranslation();

  return (
    <Container theme={theme}>
      <HappyImage source={Happy} resizeMode="contain" />
      <Title textSize={textSize} theme={theme}>
        {t("congratulations")}
      </Title>
      <SubTitle textSize={textSize} theme={theme}>
        {t("caughtUpMessage")}
      </SubTitle>
    </Container>
  );
};

export default CaughtUp;

const Container = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const HappyImage = styled.Image`
  justify-content: flex-start;
  align-items: center;
  height: ${screenHeight * 0.2}px;
  width: ${screenWidth * 0.6}px;
`;

const Title = styled.Text`
  font-size: ${(props) =>
    props.textSize === "large" ? screenWidth * 0.07 : screenWidth * 0.06}px;
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  padding-bottom: ${screenWidth * 0.015}px;
`;

const SubTitle = styled.Text`
  font-size: ${(props) =>
    props.textSize === "large" ? screenWidth * 0.045 : screenWidth * 0.04}px;
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
`;
