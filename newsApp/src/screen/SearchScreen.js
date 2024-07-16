import React from "react";
import styled from "styled-components/native";
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
    <ContainerSCroll>
      <Container theme={theme}>
        <SearchBar theme={theme} />
        <HorizontalMenu onItemPress={handleMenuPress} theme={theme} />
        <SmallCard theme={theme} />
      </Container>
    </ContainerSCroll>
  );
};

export default SearchScreen;

const ContainerSCroll = styled.ScrollView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;
