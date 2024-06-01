import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import styled from 'styled-components/native';
import Card from './Card';
import newsData from '../assets/newsData.json';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const Content = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(news)
  );

  useEffect(() => {
    loadMoreNews();
  }, []);

  useEffect(() => {
    setDataProvider(prevDataProvider => prevDataProvider.cloneWithRows(news));
  }, [news]);

  const loadMoreNews = () => {
    const newNews = newsData.slice(page * 1, (page + 1) * 1);
    setNews((prevNews) => [...prevNews, ...newNews]);
    setPage((prevPage) => prevPage + 1);
  };

  const layoutProvider = new LayoutProvider(
    () => 0,
    (type, dim) => {
      dim.width = screenWidth;
      dim.height = screenHeight;
    }
  );

  const rowRenderer = (type, data) => {
    return (
      <CardContainer>
        <Card news={data} />
      </CardContainer>
    );
  };

  return (
    <RecyclerListView
      dataProvider={dataProvider}
      layoutProvider={layoutProvider}
      rowRenderer={rowRenderer}
      onEndReached={loadMoreNews}
      onEndReachedThreshold={0.5}
      style={{ flex: 1 }}
      scrollViewProps={{
        snapToInterval: screenHeight,
        decelerationRate: 'fast',
        snapToAlignment: 'start',
      }}
    />
  );
};

export default Content;

const CardContainer = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;