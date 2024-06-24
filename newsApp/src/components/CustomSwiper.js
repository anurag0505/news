import React, { useState, useEffect, useRef } from "react";
import { Dimensions, View, StyleSheet, Animated, Easing } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import newsData from "../assets/newsData.json";
import Card from "./Card";
import { useTheme } from "../utils/ThemeContext";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const CustomSwiper = ({ navigation }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const [swipeDirection, setSwipeDirection] = useState(null);

  const swipeThreshold = 50;

  const onSwiped = (direction) => {
    if (direction === "right") {
      const card = newsData[currentIndex];
      if (card.url) {
        navigation.navigate("WebView", { url: card.url });
      }
    } else if (direction === "left") {
      navigation.navigate("SearchScreen");
    } else if (direction === "up") {
      if (currentIndex < newsData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (direction === "down") {
      if (currentIndex > 0) {
        position.setValue({ x: 0, y: -screenHeight });
        Animated.timing(position, {
          toValue: { x: 0, y: 0 },
          duration: 500,
          easing: Easing.ease, // Use Easing.ease directly
          useNativeDriver: true,
        }).start(() => {
          setCurrentIndex((prevIndex) => prevIndex - 1);
          opacity.setValue(1);
          setSwipeDirection(null);
        });
      }
    }

    if (currentIndex === newsData.length - 1) {
      navigation.navigate("CaughtUp");
    }
  };

  const handleGesture = Animated.event(
    [
      {
        nativeEvent: {
          translationX: position.x,
          translationY: position.y,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const handleStateChange = ({ nativeEvent }) => {
    const { translationX, translationY, state } = nativeEvent;

    if (state === State.ACTIVE && !swipeDirection) {
      if (Math.abs(translationX) > Math.abs(translationY)) {
        setSwipeDirection("horizontal");
      } else {
        setSwipeDirection("vertical");
      }
    }

    if (state === State.END) {
      let detectedDirection = null;

      if (swipeDirection === "horizontal") {
        if (translationX > swipeThreshold) {
          detectedDirection = "right";
        } else if (translationX < -swipeThreshold) {
          detectedDirection = "left";
        }
      } else if (swipeDirection === "vertical") {
        if (translationY > swipeThreshold) {
          detectedDirection = "down";
        } else if (translationY < -swipeThreshold) {
          detectedDirection = "up";
        }
      }

      if (detectedDirection) {
        if (detectedDirection === "down" && currentIndex > 0) {
          position.setValue({ x: 0, y: -screenHeight });
          Animated.timing(position, {
            toValue: { x: 0, y: 0 },
            duration: 400,
            easing: Easing.ease, // Use Easing.ease directly
            useNativeDriver: true,
          }).start(() => {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            position.setValue({ x: 0, y: 0 });
            opacity.setValue(1);
            setSwipeDirection(null);
          });
        } else {
          Animated.parallel([
            Animated.timing(position, {
              toValue: {
                x:
                  detectedDirection === "left"
                    ? -screenWidth
                    : detectedDirection === "right"
                    ? screenWidth
                    : 0,
                y:
                  detectedDirection === "up"
                    ? -screenHeight
                    : detectedDirection === "down"
                    ? screenHeight
                    : 0,
              },
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }),
          ]).start(() => {
            position.setValue({ x: 0, y: 0 });
            opacity.setValue(1);
            if (detectedDirection !== "down") {
              onSwiped(detectedDirection);
            }
            setSwipeDirection(null);
          });
        }
      } else {
        Animated.parallel([
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
        setSwipeDirection(null);
      }
    }
  };

  useEffect(() => {
    position.setValue({ x: 0, y: 0 });
    opacity.setValue(1);
    setSwipeDirection(null);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {newsData
        .slice(Math.max(currentIndex - 1, 0), currentIndex + 2)
        .map((card, index) => {
          const actualIndex = Math.max(currentIndex - 1, 0) + index;
          const isCurrentIndex = actualIndex === currentIndex;
          const isPreviousIndex = actualIndex === currentIndex - 1;

          return (
            <Animated.View
              key={actualIndex}
              style={[
                styles.card,
                { zIndex: isCurrentIndex ? 1 : 0 },
                {
                  transform: [
                    {
                      translateX:
                        isCurrentIndex && swipeDirection === "horizontal"
                          ? position.x
                          : 0,
                    },
                    {
                      translateY:
                        isCurrentIndex && swipeDirection === "vertical"
                          ? position.y
                          : 0,
                    },
                    { scale: isCurrentIndex ? 1 : 1 },
                  ],
                  opacity: isCurrentIndex ? opacity : 1,
                },
                isPreviousIndex && { top: -screenHeight }, // Place previous card above the screen
              ]}
            >
              {isCurrentIndex ? (
                <PanGestureHandler
                  onGestureEvent={handleGesture}
                  onHandlerStateChange={handleStateChange}
                >
                  <Animated.View style={styles.cardContent}>
                    <Card news={card} />
                  </Animated.View>
                </PanGestureHandler>
              ) : (
                <View style={styles.cardContent}>
                  <Card news={card} />
                </View>
              )}
            </Animated.View>
          );
        })}
    </View>
  );
};

export default CustomSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: screenWidth,
    height: screenHeight,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
