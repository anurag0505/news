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

const AnimatedCard = ({ news, onSwipeUp }) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      if (event.translationY < 0) {
        translateY.value = event.translationY;
      }
    },
    onEnd: (event) => {
      if (event.translationY < 0) {
        // Adjust the threshold as needed
        translateY.value = withSpring(
          -screenHeight,
          {
            damping: 150, // Adjust this value to make the swipe slower
            stiffness: 600, // Adjust this value to control the stiffness of the spring
            mass: 0.3, // Adjust this value to control the mass of the spring
            velocity: 15, // Initial velocity of the animation
          },
          () => {
            runOnJS(onSwipeUp)();
          }
        );
      } else {
        translateY.value = withSpring(0); // Reset to original position if not swiped enough
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
