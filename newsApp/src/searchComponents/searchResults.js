import React, { useState, useEffect, useRef } from "react";
import { FlatList, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Dimensions } from "react-native";
import newsData from "../assets/newsData.json";

const { height: screenHeight } = Dimensions.get("window");

const SearchResults = ({ route }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState(route?.params?.query || "");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const [isLayoutComplete, setIsLayoutComplete] = useState(false);

  useEffect(() => {
    if (inputRef.current && isLayoutComplete) {
      inputRef.current.focus();
    }
  }, [isLayoutComplete]);

  useEffect(() => {
    if (searchQuery) {
      const results = newsData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSubmit = () => {
    const results = newsData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleClear = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const handlePress = (id) => {
    navigation.navigate("Home", { id });
  };

  const renderResult = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      theme={theme}
      onPress={() => handlePress(item.id)}
    >
      <Card theme={theme}>
        <CardContent>
          <CardTitle theme={theme}>{item.title}</CardTitle>
        </CardContent>
        <CardImage
          source={{
            uri: item.image || "https://via.placeholder.com/90x60.png",
          }}
        />
      </Card>
    </TouchableOpacity>
  );

  return (
    <Container theme={theme}>
      <Header>
        <Icon
          onPress={handleGoBack}
          name="arrow-left"
          size={30}
          style={{ color: theme.text }}
        />
        <SearchInputContainer>
          <SearchInput
            ref={inputRef}
            theme={theme}
            placeholder={t("searchHereForNews")}
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSubmit}
            placeholderTextColor={theme.inactive}
            selectionColor={theme.text}
            onLayout={() => setIsLayoutComplete(true)}
          />
          {searchQuery ? (
            <ClearButton onPress={handleClear}>
              <Icon name="trash" size={30} style={{ color: theme.text }} />
            </ClearButton>
          ) : null}
        </SearchInputContainer>
      </Header>

      {searchQuery.length > 0 && (
        <>
          <Heading theme={theme}>{t("searchResults")}</Heading>
          {searchResults.length === 0 ? (
            <NoResults theme={theme}>{t("noResultsFound")}</NoResults>
          ) : (
            <ResultsContainer>
              <FlatList
                data={searchResults}
                renderItem={renderResult}
                keyExtractor={(item) => item.id.toString()}
              />
            </ResultsContainer>
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`;

const SearchInput = styled.TextInput`
  height: ${screenHeight * 0.05}px;
  flex: 1;
  border-width: ${(props) => (props.theme.isDark ? 0.3 : 1)}px;
  padding: 10px;
  border-color: lightgray;
  border-radius: 5px;
  background-color: ${(props) => props.theme.searchBar};
  color: ${(props) => props.theme.text};
`;

const ClearButton = styled(TouchableOpacity)`
  margin-left: 10px;
`;

const Heading = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.active};
  margin: 10px;
  padding-top: 5px;
  font-family: sans-serif;
`;

const NoResults = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.text};
  text-align: center;
  margin: 30px;
`;

const ResultsContainer = styled.View`
  flex: 1;
`;

const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  margin-bottom: 10px;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: lightgray;
`;

const CardContent = styled.View`
  flex: 1;
  margin-right: 10px;
`;

const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

const CardImage = styled.Image`
  width: 90px;
  height: 60px;
  border-radius: 5px;
`;

export default SearchResults;
