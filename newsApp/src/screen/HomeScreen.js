import React, { useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import Content from "../components/Content";
import { useTheme } from "../utils/ThemeContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import newsData from "../assets/newsData.json";

const HomeScreen = () => {
  const { theme } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params || {};

  useEffect(() => {
    console.log("Route params:", route.params);
  }, [route.params]);

  const initialIndex = id ? newsData.findIndex((news) => news.id === id) : 0;

  useEffect(() => {
    if (initialIndex !== undefined && initialIndex !== -1) {
      console.log("Navigated to Home with index:", initialIndex);
    } else {
      console.log("ID not found in newsData. Defaulting to index 0.");
    }
  }, [initialIndex]);

  return (
    <SafeArea theme={theme}>
      <Container theme={theme}>
        <Content
          navigation={navigation}
          theme={theme}
          selectedIndex={initialIndex !== -1 ? initialIndex : 0}
        />
      </Container>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const Container = styled.View`
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;

export default HomeScreen;
