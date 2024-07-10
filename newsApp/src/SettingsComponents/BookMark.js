import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

// Temporarily set newsData to an empty array for testing
const newsData = [];

const BookMark = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <Container theme={theme}>
      <Header title="Bookmarks" navigation={navigation} />
      {newsData.length === 0 ? (
        <EmptyMessage theme={theme}>
          No bookmark saved. It's empty here.
        </EmptyMessage>
      ) : (
        <CardContainer>
          {newsData.map((news) => (
            <Card key={news.id} theme={theme}>
              <CardContent>
                <CardTitle theme={theme}>{news.title}</CardTitle>
              </CardContent>
              <CardImage source={{ uri: news.image }} />
            </Card>
          ))}
        </CardContainer>
      )}
    </Container>
  );
};

export default BookMark;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const CardContainer = styled.ScrollView`
  flex: 1;
  padding: 10px;
  width: 100%;
`;

const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.cardBackground};
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
  font-size: 12px;
  font-weight: 500;
  font-family: serif;
  color: ${(props) => props.theme.text};
`;

const CardImage = styled.Image`
  width: 90px;
  height: 60px;
  border-radius: 5px;
`;

const EmptyMessage = styled.Text`
  flex: 1;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;
