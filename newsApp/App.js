import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import Home from "./src/screen/Home";

const { height: screenHeight } = Dimensions.get("window");

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Home />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;
