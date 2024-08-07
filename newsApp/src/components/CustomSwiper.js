import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import newsData from "../assets/newsData.json";
import Card from "./Card";
import { useTheme } from "../utils/ThemeContext";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const CustomSwiper = ({ navigation, onCardTap, initialIndex = 0 }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const handleCardTap = (news) => {
    if (onCardTap) {
      onCardTap(news);
    }
  };

  const onSwiped = (direction) => {
    let newX = 0;
    let newY = 0;

    if (direction === "SWIPE_LEFT") {
      const card = newsData[currentIndex];
      if (card.url) {
        navigation.navigate("WebView", { url: card.url });
      }
      newX = -screenWidth;
    } else if (direction === "SWIPE_RIGHT") {
      navigation.navigate("SearchScreen");
      newX = screenWidth;
    } else if (direction === "SWIPE_UP") {
      if (currentIndex < newsData.length - 1) {
        newY = -screenHeight;
        setCurrentIndex(currentIndex + 1);
      }
    } else if (direction === "SWIPE_DOWN") {
      if (currentIndex > 0) {
        newY = screenHeight;
        setCurrentIndex(currentIndex - 1);
      }
    }

    Animated.parallel([
      Animated.timing(position, {
        toValue: { x: newX, y: newY },
        duration: 300,
        easing: Easing.out(Easing.ease),
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
    });

    if (currentIndex === newsData.length - 1 && direction === "SWIPE_UP") {
      navigation.navigate("CaughtUp");
    }
  };

  useEffect(() => {
    position.setValue({ x: 0, y: 0 });
    opacity.setValue(1);
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  return (
    <GestureRecognizer
      onSwipeLeft={() => onSwiped("SWIPE_LEFT")}
      onSwipeRight={() => onSwiped("SWIPE_RIGHT")}
      onSwipeUp={() => onSwiped("SWIPE_UP")}
      onSwipeDown={() => onSwiped("SWIPE_DOWN")}
      config={{
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
      }}
      style={styles.container}
    >
      {newsData
        .slice(Math.max(currentIndex - 1, 0), currentIndex + 2)
        .map((card, index) => {
          const actualIndex = Math.max(currentIndex - 1, 0) + index;
          const isCurrentIndex = actualIndex === currentIndex;

          return (
            <Animated.View
              key={actualIndex}
              style={[
                styles.card,
                { zIndex: isCurrentIndex ? 1 : 0 },
                {
                  transform: [
                    { translateX: isCurrentIndex ? position.x : 0 },
                    { translateY: isCurrentIndex ? position.y : 0 },
                  ],
                  opacity: isCurrentIndex ? opacity : 1,
                },
              ]}
            >
              <TouchableWithoutFeedback onPress={() => handleCardTap(card)}>
                <View style={styles.cardContent}>
                  <Card news={card} />
                </View>
              </TouchableWithoutFeedback>
            </Animated.View>
          );
        })}
    </GestureRecognizer>
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
