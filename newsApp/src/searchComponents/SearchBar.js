import React, { useState } from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Search
        placeholder="Search here for news"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
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
  border-width: 1px;
  padding: 10px;
  border-color: #f4f4f4;
  border-radius: 5px;
  background-color: #f4f4f4;
  text-align: center;
`;

export default SearchBar;
