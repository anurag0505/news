import React from 'react'
import { Dimensions } from 'react-native';
import styled from 'styled-components'; 
const { height: screenHeight } = Dimensions.get('window');

const Title = () => {
  return (
    <Container>
        <TitleText>
            If You Smell What the rock is cooking, then Please let me know i will like to copy in this regards? 
        </TitleText>
    </Container>
  )
}

export default Title

const Container = styled.View`
  flex-direction: column;
  display: flex;
  text-align: center;
  justify-content: center;
  width  :100%;
  margin-top:${screenHeight * 0.015}px;
  //height: ${screenHeight * 0.10}px; ;
 
`;

const TitleText = styled.Text`
  font-weight: bold;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:auto;
  font-size: 18px;
`;