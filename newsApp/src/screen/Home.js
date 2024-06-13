import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, Platform } from "react-native";
import Content from "../components/Content";
import { useTheme } from "../utils/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  return (
    <SafeArea theme={theme}>
      <Container theme={theme}>
        <Content theme={theme} />
      </Container>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const Container = styled.View`
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  flex: ${Platform.OS === "ios" ? "0.86" : "0.95"};
`;

export default Home;
