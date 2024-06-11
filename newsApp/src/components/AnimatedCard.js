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
const { theme } = useTheme();

const AnimatedCard = ({ news, onSwipeUp, onSwipeDown }) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateY.value = context.startY + event.translationY;
    },
    onEnd: (event) => {
      const swipeThreshold = screenHeight / 6; // Sensitivity threshold for triggering swipe
      const swipeVelocityThreshold = 500; // Sensitivity velocity threshold for swipe detection

      if (
        event.translationY < -swipeThreshold ||
        event.velocityY < -swipeVelocityThreshold
      ) {
        translateY.value = withSpring(
          -screenHeight,
          { damping: 15, stiffness: 200 },
          () => {
            runOnJS(onSwipeUp)();
            translateY.value = 0;
          }
        );
      } else if (
        event.translationY > swipeThreshold ||
        event.velocityY > swipeVelocityThreshold
      ) {
        translateY.value = withSpring(
          screenHeight,
          { damping: 15, stiffness: 200 },
          () => {
            runOnJS(onSwipeDown)();
            translateY.value = 0;
          }
        );
      } else {
        translateY.value = withSpring(0, { damping: 15, stiffness: 200 });
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[animatedStyle, { height: screenHeight }]}>
        <CardContainer theme={theme}>
          <Card theme={theme} news={news} />
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
  background-color: ${(props) => props.theme.background};
`;
