import React from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import Happy from "../assets/images/happy3.png";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const CaughtUp = () => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <HappyImage source={Happy} resizeMode="contain" />
      <Title>Congratulations</Title>
      <SubTitle>You are all caught up for the day.</SubTitle>
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
  font-size: ${screenWidth * 0.06}px;
  color: ${(props) => props.theme.Text};
  justify-content: center;
  align-items: center;
  padding-bottom: ${screenWidth * 0.015}px;
  color: ${(props) => props.theme.text};
`;

const SubTitle = styled.Text`
  font-size: ${screenWidth * 0.04}px;
  color: ${(props) => props.theme.Text};
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
`;
