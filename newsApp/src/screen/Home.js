import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, Dimensions, Platform } from "react-native";
import Content from "../components/Content";
import { useTheme } from "../utils/ThemeContext";

const { height: screenHeight } = Dimensions.get("window");

const Home = () => {
  const { theme } = useTheme();
  return (
    <SafeArea theme={theme}>
      <Container theme={theme}>
        <Content />
      </Container>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === "ios" ? 0 : screenHeight * 0.04}px;
  /* color: ${(props) => props.theme.text}; */
  background-color: ${(props) => props.theme.background};
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
`;

export default Home;
