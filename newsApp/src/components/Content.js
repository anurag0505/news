import React, { useState, useRef } from "react";
import { Dimensions, View } from "react-native";
import styled from "styled-components/native";
import Carousel from "react-native-reanimated-carousel";
import Card from "./Card";
import newsData from "../assets/newsData.json";
import { useTheme } from "../utils/ThemeContext";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const Content = ({ navigation }) => {
  const { theme } = useTheme();
  const [news] = useState(newsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const onSnapToItem = (index) => {
    setCurrentIndex(index);
  };

  const onSwipeRight = (cardIndex) => {
    navigation.navigate("SearchScreen");
  };

  const onSwipeLeft = (cardIndex) => {
    const card = news[cardIndex];
    const url = card.url;
    if (url) {
      navigation.navigate("CaughtUp");
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <Card
        key={index}
        news={item}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    );
  };

  return (
    <Container theme={theme}>
      <Carousel
        ref={carouselRef}
        data={news}
        renderItem={renderItem}
        width={screenWidth}
        height={screenHeight}
        vertical={true}
        onSnapToItem={onSnapToItem}
        loop={false}
        mode="parallax-horizontal"
        modeConfig={{
          stackInterval: 18, // Adjust the spacing between stacked items
          scaleInterval: 0.08, // Adjust the scale difference between stacked items
        }}
      />
    </Container>
  );
};

export default Content;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding: 0;
  margin: 0;
`;
