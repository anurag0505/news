import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import { useTheme } from "../utils/ThemeContext";

const Search = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container theme={theme}>
      <Text1 theme={theme}>Search Page</Text1>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </Container>
  );
};

export default Search;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

const Text1 = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;
