import React, { useState } from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";
import newsData from "../assets/newsData.json";
import { useTheme } from "../utils/ThemeContext";
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const Content = () => {
  const { theme } = useTheme();
  const [news, setNews] = useState(newsData);

  const onSwipedAll = () => {
    setNews("loading");
  };

  return (
    <Container theme={theme}>
      <Swiper
        cards={news}
        renderCard={(card) => <Card news={card} />}
        onSwipedAll={onSwipedAll}
        cardIndex={0}
        backgroundColor={theme.background}
        stackSize={3}
        infinite
        stackAnimationFriction={80}
        stackAnimationTension={100}
        stackScale={10}
        stackSeparation={1}
        animateCardOpacity={true}
        verticalSwipe={true}
        horizontalSwipe={false}
        swipeBackCard
        cardVerticalMargin={0}
        cardHorizontalMargin={0}
        disableTopSwipe={false}
        disableBottomSwipe={false}
        useViewOverflow={Platform.OS === "ios"}
        verticalThreshold={screenHeight / 12}
        inputCardOpacityRangeY={[
          -screenHeight / 2,
          -screenHeight / 3,
          0,
          screenHeight * 0.9,
          screenHeight,
        ]}
        outputCardOpacityRangeY={[0, 1, 1, 0, 0]}
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
