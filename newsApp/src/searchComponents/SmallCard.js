import React from "react";
import styled from "styled-components/native";
import newsData from "../assets/newsData.json";
import { Platform, TouchableOpacity } from "react-native";
import { useTheme } from "../utils/ThemeContext";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

const SmallCard = ({ activeCategory }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handlePress = (id) => {
    navigation.navigate("Home", { id });
  };

  const filteredNews = activeCategory
    ? newsData.filter(
        (news) => news.category.toLowerCase() === activeCategory.toLowerCase()
      )
    : newsData;

  return (
    <CardContainer theme={theme}>
      {filteredNews.map((news) => (
        <TouchableOpacity key={news.id} onPress={() => handlePress(news.id)}>
          <Card>
            <CardContent>
              <CardMeta>{t(news.category.toLowerCase())}</CardMeta>
              <CardTitle>{news.title}</CardTitle>
            </CardContent>
            <CardImage source={{ uri: news.image }} />
          </Card>
        </TouchableOpacity>
      ))}
    </CardContainer>
  );
};

export default SmallCard;

const CardContainer = styled.ScrollView`
  flex: 1;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
`;

const Card = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.25;
      shadow-radius: 3.84px;
    `,
    android: `
      elevation: 5;
    `,
  })}
`;

const CardContent = styled.View`
  flex: 1;
  margin-right: 10px;
`;

const CardMeta = styled.Text`
  font-size: 12px;
  margin-bottom: 5px;
  color: tomato;
`;

const CardTitle = styled.Text`
  font-size: 15px;
  font-weight: 500;
  font-family: sans-serif;
  color: ${(props) => props.theme.text};
`;

const CardImage = styled.Image`
  width: 100px;
  height: 70px;
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 25px;
  font-weight: 600;
  font-family: sans-serif;
  color: gray;
`;
