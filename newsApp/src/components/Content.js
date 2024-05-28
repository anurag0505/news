import React from 'react'
import { Dimensions } from 'react-native';
import styled from 'styled-components'; 
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const Content = () => {
  return (
    <Container>
        <TitleText>
            If You Smell What the rock is cooking, then let me know if it smell good , we may try one? 
        </TitleText>
        <Discription>Creating cards in React Native similar to those in news apps like News Shorts involves using react-native for building the app and styled-components for styling. Here is a step-by-step guide to help you create visually appealing news cards.This structure helps in creating clean and reusable card components that can be easily styled and updated.Run your app to see the news cards in action</Discription>
      <InfoText>
        <Text1>Entertainment</Text1>
        <Dated>
          <Text2> Updated: May 24,2024 16:20 IST</Text2>
        </Dated>
      </InfoText>
    </Container>
  )
}
 
export default Content

const Container = styled.View`
  flex-direction: column;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100vw;
  margin-top: ${screenHeight * 0.015}px;
  margin: 8px;
  overflow: hidden;
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
  padding: ${screenHeight * 0.005}px ${screenHeight * 0.012}px ${screenHeight * 0.000 }px;
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

const Discription = styled.Text`
  font-size: ${screenWidth * 0.045}px;
  color: #666;
  line-height: ${screenHeight * 0.04}px;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${screenHeight * 0.005}px ${screenHeight * 0.012}px ${screenHeight * 0.020}px;

`;