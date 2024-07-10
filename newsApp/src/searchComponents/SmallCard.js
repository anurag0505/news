import React from "react";
import styled from "styled-components/native";
import newsData from "../assets/newsData.json";
import Category from "./Category";
import { Platform } from "react-native";

export default function SmallCard() {
  return (
    <>
      <CategoryContainer>
        <Category />
      </CategoryContainer>
      <CardContainer>
        {newsData.map((news) => (
          <Card key={news.id}>
            <CardContent>
              <CardMeta>{news.category}</CardMeta>
              <CardTitle>{news.title}</CardTitle>
            </CardContent>
            <CardImage source={{ uri: news.image }} />
          </Card>
        ))}
      </CardContainer>
    </>
  );
}

const CardContainer = styled.ScrollView`
  flex: 1;
  padding-bottom: 10px;
  background-color: #f4f4f4;
  width: 100%;
`;

const CategoryContainer = styled.View`
  height: 60px; /* Adjust height as necessary */
`;

const Card = styled.View.attrs({
  // Adding shadow properties for iOS and elevation for Android
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 3,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
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
      elevation: 3;
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
  font-family: serif;
`;

const CardImage = styled.Image`
  width: 100px;
  height: 70px;
  border-radius: 5px;
`;
