import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
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
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
`;

export default Home;
