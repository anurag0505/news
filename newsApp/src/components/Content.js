import React, { useState } from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-deck-swiper";
import Card from "./Card"; // Adjust the import based on your file structure
import newsData from "../assets/newsData.json"; // Adjust the import based on your file structure

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const Content = () => {
  const [news, setNews] = useState(newsData);

  const onSwipedAll = () => {
    setNews("loading");
  };

  return (
    <Container>
      <Swiper
        cards={news}
        renderCard={(card) => <Card news={card} />}
        onSwipedAll={onSwipedAll}
        cardIndex={0}
        backgroundColor={"white"}
        stackSize={3}
        infinite
        stackScale={10}
        stackSeparation={14}
        animateCardOpacity
        verticalSwipe={true}
        horizontalSwipe={false}
        swipeBackCard
        cardVerticalMargin={0}
        cardHorizontalMargin={0}
        disableTopSwipe={false}
        disableBottomSwipe={false}
        useViewOverflow={Platform.OS === "ios"}
      />
    </Container>
  );
};

export default Content;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0;
  margin: 0;
`;
