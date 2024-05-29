import React from 'react'
import { Dimensions } from 'react-native';
import styled from 'styled-components'; 
import ImageHero from './ImageHero';
import moment from 'moment';


const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const Card = ({news}) => {
  return (
    <Container>
        <ImageHero source={{ uri: news.image }} style={{ screenHeight: '70%' }} />
        <TitleText>{news.title}</TitleText>
        <DiscriptionContainer>
          <Description>{news.description}</Description>
          <InfoText>
            <Text1>{news.category}</Text1>
            <Text2>{ moment(new Date(news.date)).fromNow()}</Text2>
          </InfoText>
        </DiscriptionContainer>
  </Container>
  )
}

export default Card;

const Container = styled.View`
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: ${screenHeight * 0.015}px;
  overflow: hidden;
  flex: 1;
  padding-bottom:${screenHeight * 0.020}px; ;
  
`;

const TitleText = styled.Text`
  font-weight: 700;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${screenHeight * 0.04}px;
  font-size: ${screenWidth * 0.045}px;
  color: #333;
  padding: ${screenHeight * 0.015}px ${screenHeight * 0.030}px ${screenHeight * 0.010}px;
  
 
`;

const DiscriptionContainer = styled.View`
  height: ${screenHeight * 0.40}px; 

  display: flex;
  
  flex-direction: column;
  
`;

const Description = styled.Text`
  font-size: ${screenWidth * 0.045}px;
  color: #666;
  line-height: ${screenHeight * 0.04}px;
  font-family: serif;
  align-items: center;
  justify-content: center;
  padding: ${screenHeight * 0.005}px ${screenHeight * 0.030}px ${screenHeight * 0.015}px;
 
  
`;


const InfoText = styled.View`
 font-size: ${screenWidth * 0.003}px;
  color: #666;
  font-family: serif;
  align-items: flex-end;
  padding: ${screenHeight * 0.005}px ${screenHeight * 0.030}px ${screenHeight * 0.05}px;
  flex-direction: row;
  
  
  
`;

const Text1 = styled.Text`
  color: red;
  font-size: ${screenWidth * 0.03}px;
  align-items: flex-start;
  display: flex;
`;

const Text2 = styled.Text`
  color: gray;
  font-size: ${screenWidth * 0.03}px;
  padding-left:  ${screenWidth * 0.02}px;;
`;

