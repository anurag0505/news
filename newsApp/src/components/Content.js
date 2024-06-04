import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import AnimatedCard from "./AnimatedCard";
import newsData from "../assets/newsData.json";

const { height: screenHeight } = Dimensions.get("window");

const Content = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [news, setNews] = useState(newsData.slice(0, 5)); // Load initial data
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (currentIndex >= news.length) {
      loadMoreNews();
    }
  }, [currentIndex]);

  const loadMoreNews = () => {
    const newNews = newsData.slice(page * 5, (page + 1) * 5); // Load 5 items at a time
    if (newNews.length > 0) {
      setNews((prevNews) => [...prevNews, ...newNews]);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSwipeUp = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleSwipeDown = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (currentIndex >= news.length) {
    return (
      <LoadingScreen>
        <Text>Loading...</Text>
      </LoadingScreen>
    ); // or any loading indicator
  }

  return (
    <Container>
      {currentIndex > 0 && (
        <AnimatedCard
          key={`card-${currentIndex - 1}`}
          news={news[currentIndex - 1]}
          onSwipeUp={handleSwipeUp}
          onSwipeDown={handleSwipeDown}
        />
      )}
      <AnimatedCard
        key={`card-${currentIndex}`}
        news={news[currentIndex]}
        onSwipeUp={handleSwipeUp}
        onSwipeDown={handleSwipeDown}
      />
    </Container>
  );
};

export default Content;

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const LoadingScreen = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: 100;
  font-family: serif;
`;
