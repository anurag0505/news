import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import SearchBar from "../searchComponents/SearchBar";
import HorizontalMenu from "../searchComponents/HorizontalMenu";
import SmallCard from "../searchComponents/SmallCard";

const SearchScreen = ({ navigation }) => {
  const { theme } = useTheme();

  const handleMenuPress = (title) => {
    console.log("Navigating to:", title);
  };

  return (
    <ContainerScroll>
      <Container theme={theme}>
        <SearchBar />
        <HorizontalMenu onItemPress={handleMenuPress} />
        <SmallCard />
      </Container>
    </ContainerScroll>
  );
};

const ContainerScroll = styled.ScrollView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

export default SearchScreen;
