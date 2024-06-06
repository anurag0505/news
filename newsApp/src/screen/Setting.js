import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { Button } from "react-native";
import { useTheme } from "../utils/ThemeContext";

const Setting = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container theme={theme}>
      <Text1 theme={theme}>Setting Page</Text1>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </Container>
  );
};

export default Setting;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  /* color: ${(props) => props.theme.text}; */
`;

const Text1 = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;
