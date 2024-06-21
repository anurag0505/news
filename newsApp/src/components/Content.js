import React, { useState, useRef, useEffect } from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";
import newsData from "../assets/newsData.json";
import { useTheme } from "../utils/ThemeContext";

const { height: screenHeight } = Dimensions.get("window");

const Content = ({ navigation }) => {
  const { theme } = useTheme();
  const [news] = useState(newsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const onSwipedAll = () => {
    navigation.navigate("CaughtUp");
  };

  const onSwipedRight = (cardIndex) => {
    const card = news[cardIndex];
    const url = card.url;
    if (url) {
      navigation.navigate("WebView", { url });
    }
  };
  const onSwipedLeft = (cardIndex) => {
    navigation.navigate("Search");
  };

  const handleSwipe = (direction) => {
    if (direction === "down" && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (direction === "up" && currentIndex < news.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.jumpToCardIndex(currentIndex);
    }
  }, [currentIndex]);

  return (
    <Container theme={theme}>
      <Swiper
        ref={swiperRef}
        cards={news}
        renderCard={(card, index) => <Card key={index} news={card} />}
        cardIndex={currentIndex}
        onSwipedAll={onSwipedAll}
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
        onSwipedBottom={() => handleSwipe("down")}
        onSwipedTop={() => handleSwipe("up")}
        backgroundColor={theme.background}
        stackSize={2}
        showSecondCard={true}
        stackAnimationFriction={15}
        stackAnimationTension={40}
        stackScale={10}
        stackSeparation={15}
        animateCardOpacity={true}
        verticalSwipe={true}
        horizontalSwipe={true}
        disableRightSwipe={false}
        swipeBackCard={false}
        disableTopSwipe={false}
        disableBottomSwipe={false}
        useViewOverflow={Platform.OS === "ios"}
        verticalThreshold={screenHeight / 10}
        cardVerticalMargin={0}
        cardHorizontalMargin={0}
        inputCardOpacityRangeY={[
          -screenHeight / 2,
          -screenHeight / 3,
          0,
          screenHeight * 0.9,
          screenHeight,
        ]}
        outputCardOpacityRangeY={[1, 1, 1, 1, 1]}
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
