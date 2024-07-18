import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import { useTranslation } from "react-i18next";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const SearchBar = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  return (
    <Container theme={theme}>
      <Search
        theme={theme}
        placeholder={t("searchHereForNews")}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholderTextColor={theme.inactive}
      />
    </Container>
  );
};

const Container = styled.View`
  padding-top: ${screenHeight * 0.02}px;
`;

const Search = styled.TextInput`
  height: ${screenHeight * 0.05}px;
  width: ${screenWidth * 0.9}px;
  border-width: 0.35px;
  padding: 10px;
  border-color: lightgray;
  border-radius: 5px;
  background-color: ${(props) => props.theme.searchBar};
  text-align: center;
  color: ${(props) => props.theme.text};
`;

export default SearchBar;
