import React, { useContext } from "react";
import styled from "styled-components/native";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Header from "./Header";
import { useTheme } from "../utils/ThemeContext";
import { BookmarksContext } from "../SettingsComponents/BookmarksContext";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useTextSize } from "../utils/TextSizeContext";

const BookMark = () => {
  const { theme } = useTheme();
  const { textSize } = useTextSize();
  const { bookmarks } = useContext(BookmarksContext);
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handlePress = (id) => {
    navigation.navigate("Home", { id });
  };

  return (
    <SafeArea>
      <Container theme={theme}>
        <Header title={t("bookmarks")} />
        {bookmarks.length === 0 ? (
          <EmptyMessage theme={theme}>{t("noBookmarks")}</EmptyMessage>
        ) : (
          <CardContainer>
            {bookmarks.map((news) => (
              <TouchableOpacity
                key={news.id}
                theme={theme}
                onPress={() => handlePress(news.id)}
              >
                <Card>
                  <CardContent>
                    <CardTitle textSize={textSize} theme={theme}>
                      {news.title}
                    </CardTitle>
                  </CardContent>
                  <CardImage
                    source={{
                      uri:
                        news.image || "https://via.placeholder.com/90x60.png",
                    }}
                  />
                </Card>
              </TouchableOpacity>
            ))}
          </CardContainer>
        )}
      </Container>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

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
  font-size: ${(props) => (props.textSize === "large" ? 14 : 12)}px;
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
