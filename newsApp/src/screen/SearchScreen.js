import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import { useTheme } from "../utils/ThemeContext";
import SearchBar from "../searchComponents/SearchBar";
import HorizontalMenu from "../searchComponents/HorizontalMenu";
import SmallCard from "../searchComponents/SmallCard";

const SearchScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();

  const handleMenuPress = (title) => {
    console.log("Navigating to:", title);
  };

  return (
    <Container theme={theme}>
      <SearchBar />
      <HorizontalMenu onItemPress={handleMenuPress} />
      <SmallCard />
    </Container>
  );
};

export default SearchScreen;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;
