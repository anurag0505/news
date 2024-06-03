import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import Card from "./Card";

const { height: screenHeight } = Dimensions.get("window");

const AnimatedCard = ({ news, onSwipeUp }) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const onGestureEvent = (event) => {
    if (event.nativeEvent.translationY < 0) {
      translateY.value = withSpring(-screenHeight, {}, () => {
        runOnJS(onSwipeUp)();
      });
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[animatedStyle, { height: screenHeight }]}>
        <CardContainer>
          <Card news={news} />
        </CardContainer>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default AnimatedCard;

const CardContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;
