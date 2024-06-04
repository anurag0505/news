import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import Card from "./Card";

const { height: screenHeight } = Dimensions.get("window");

const AnimatedCard = ({ news, onSwipeUp, onSwipeDown }) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateY.value = event.translationY;
    },
    onEnd: (event) => {
      if (event.translationY < -50) {
        translateY.value = withSpring(
          -screenHeight,
          {
            damping: 300, // Adjust this value to make the swipe slower
            stiffness: 300, // Adjust this value to control the stiffness of the spring
            mass: 0.2, // Adjust this value to control the mass of the spring
            velocity: 15, // Initial velocity of the animation
          },
          () => {
            runOnJS(onSwipeUp)();
            translateY.value = 0; // Reset position for the next card
          }
        );
      } else if (event.translationY > 50) {
        translateY.value = withSpring(
          screenHeight,
          {
            damping: 150, // Adjust this value to make the swipe slower
            stiffness: 300, // Adjust this value to control the stiffness of the spring
            mass: 0.1, // Adjust this value to control the mass of the spring
            velocity: 15, // Initial velocity of the animation
          },
          () => {
            runOnJS(onSwipeDown)();
            translateY.value = 0; // Reset position for the previous card
          }
        );
      } else {
        translateY.value = withSpring(0);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
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
