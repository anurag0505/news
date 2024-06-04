import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import AnimatedCard from "./AnimatedCard";
import newsData from "../assets/newsData.json";

const { height: screenHeight } = Dimensions.get("window");

const Content = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [news, setNews] = useState(newsData);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (currentIndex >= news.length) {
      loadMoreNews();
    }
  }, [currentIndex]);

  const loadMoreNews = () => {
    const newNews = newsData.slice(page * 1, (page + 1) * 1);
    if (newNews.length > 0) {
      setNews((prevNews) => [...prevNews, ...newNews]);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSwipeUp = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
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
      <AnimatedCard
        key={currentIndex}
        news={news[currentIndex]}
        onSwipeUp={handleSwipeUp}
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
