import React, { useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import Content from "../components/Content";
import { useTheme } from "../utils/ThemeContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import newsData from "../assets/newsData.json";

const Home = () => {
  const { theme } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params || {};
  const initialIndex = id
    ? newsData.findIndex((news) => news.id === id)
    : undefined;

  useEffect(() => {
    if (initialIndex !== undefined) {
      console.log("Navigated to Home with index:", initialIndex);
    }
  }, [initialIndex]);

  return (
    <SafeArea theme={theme}>
      <Container theme={theme}>
        <Content
          navigation={navigation}
          theme={theme}
          selectedIndex={initialIndex}
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

export default Home;
