import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, Dimensions, Platform } from "react-native";
import Content from "../components/Content";
import { StatusBar } from "expo-status-bar";

const { height: screenHeight } = Dimensions.get("window");

export default function Home() {
  return (
    <SafeArea>
      <Container>
        <Content />
      </Container>
    </SafeArea>
  );
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffffff;
  margin-top: ${Platform.OS === "ios" ? 0 : screenHeight * 0.03}px;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;
