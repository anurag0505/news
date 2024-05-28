import React from 'react'
import { Dimensions } from 'react-native';
import styled from 'styled-components'; 


const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const Card = ({news}) => {
  return (
    <Container>
        <TitleText>{news.title}</TitleText>
        <Description>{news.description}</Description>
        <InfoText>
        <Text1>{news.category}</Text1>
        <Dated>
            <Text2>{news.date}</Text2>
        </Dated>
        </InfoText>
  </Container>
  )
}

export default Card;

const Container = styled.View`
  flex-direction: column;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  margin-top: ${screenHeight * 0.015}px;
  margin: 8px;
  overflow: hidden;
  flex: 1;
`;

const NewsImage = styled.Image`
  width: 100%;
  height: ${screenHeight * 0.25}px;
  border-radius: 8px;
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
  padding: ${screenHeight * 0.005}px ${screenHeight * 0.012}px 0;
`;

const InfoText = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding: 2px;
  width: 60vw;
`;

const Dated = styled.View`
  align-items: flex-end;
  padding-left: 5px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text1 = styled.Text`
  color: red;
  font-size: ${screenWidth * 0.04}px;
`;

const Text2 = styled.Text`
  color: gray;
  font-size: ${screenWidth * 0.04}px;
`;

const Description = styled.Text`
  font-size: ${screenWidth * 0.045}px;
  color: #666;
  line-height: ${screenHeight * 0.04}px;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${screenHeight * 0.005}px ${screenHeight * 0.012}px ${screenHeight * 0.020}px;
`;