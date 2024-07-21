import React, { useContext } from "react";
import styled from "styled-components/native";
import Header from "./Header";
import { useTheme } from "../utils/ThemeContext";
import { BookmarksContext } from "../SettingsComponents/BookmarksContext";
import { useTranslation } from "react-i18next";

const BookMark = () => {
  const { theme } = useTheme();
  const { bookmarks } = useContext(BookmarksContext);
  const { t } = useTranslation();

  return (
    <Container theme={theme}>
      <Header title={t("bookmarks")} />
      {bookmarks.length === 0 ? (
        <EmptyMessage theme={theme}>{t("noBookmarks")}</EmptyMessage>
      ) : (
        <CardContainer>
          {bookmarks.map((news) => (
            <Card key={news.id} theme={theme}>
              <CardContent>
                <CardTitle theme={theme}>{news.title}</CardTitle>
              </CardContent>
              <CardImage
                source={{
                  uri: news.image || "https://via.placeholder.com/90x60.png",
                }}
              />
            </Card>
          ))}
        </CardContainer>
      )}
    </Container>
  );
};

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

export default BookMark;
