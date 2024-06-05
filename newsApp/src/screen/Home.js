import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, Dimensions, Platform } from "react-native";
import Content from "../components/Content";

const { height: screenHeight } = Dimensions.get("window");

const Home = () => {
  return (
    <SafeArea>
      <Container>
        <Content />
      </Container>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffffff;
  margin-top: ${Platform.OS === "ios" ? 0 : screenHeight * 0.04}px;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export default Home;
