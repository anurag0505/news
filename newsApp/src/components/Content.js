import React, { useEffect,useState } from 'react'
import { Dimensions, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Card from './Card';
import newsData from '../assets/newsData.json';


const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


const Content = () => {

  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(()=>{
    loadMoreNews();

  },[])

  const loadMoreNews=()=>{
    const newNews = newsData.slice(page * 1 , (page + 1) * 1);
    setNews((prevNews) => [...prevNews, ...newNews]);
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <FlatList
      data={news}
      renderItem={({ item }) => (
        <CardContainer style={{ screenHeight }}>
          <Card news={item} style={{ screenHeight: '30%' }} />
        </CardContainer>
      )}
       keyExtractor={(item) => item.id}
        onEndReached={loadMoreNews}
        onEndReachedThreshold={0.5}
        pagingEnabled
        vertical
        showsVerticalScrollIndicator={true}
    />
  );
};

export default Content


const CardContainer = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
 









