import React, { useRef } from "react";
import {
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const SearchBar = ({ searchQuery, setSearchQuery, onSubmit }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const inputRef = useRef(null);
  const navigation = useNavigation();

  const handleClear = () => {
    setSearchQuery("");
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    navigation.navigate("SearchResults");
  };

  return (
    <SafeArea>
      <Container theme={theme}>
        <SearchContainer>
          <Search
            ref={inputRef}
            theme={theme}
            placeholder={t("searchHereForNews")}
            value={searchQuery}
            onFocus={handleFocus}
            onChangeText={setSearchQuery}
            onSubmitEditing={onSubmit}
            placeholderTextColor={theme.inactive}
            placeholderFontSize="24"
            selectionColor={theme.text}
          />
          {searchQuery ? (
            <ClearButton onPress={handleClear}>
              <Icon name="close" size={24} color={theme.text} />
            </ClearButton>
          ) : null}
        </SearchContainer>
      </Container>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const Container = styled.View`
  padding-top: ${screenHeight * 0.02}px;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

const Search = styled.TextInput`
  height: ${screenHeight * 0.06}px;
  width: ${screenWidth * 0.85}px;
  border-width: ${(props) => (props.theme.isDark ? 0.4 : 1)}px;
  padding: 10px;
  border-color: ${(props) =>
    props.theme.isDark ? props.theme.inactive : props.theme.SearchBar};
  border-radius: 5px;
  background-color: ${(props) => props.theme.SearchBar};
  color: ${(props) => props.theme.text};
  font-size: 16px;
`;

const ClearButton = styled(TouchableOpacity)`
  margin-left: 10px;
`;

export default SearchBar;
