import React from 'react'
import { Dimensions } from 'react-native';
import styled from 'styled-components'; 

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const Footer = () => {
  return (
    <Container>
        <FooterText1>Swipe Left to See More / </FooterText1>
        <FooterText2>Tap to Know More</FooterText2>
    </Container>
  )
}

export default Footer


const Container = styled.View`
  height: ${screenHeight * 0.05}px;
  width :${screenWidth}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #6B8A7A;
`;

const FooterText1 = styled.Text`
   font-size: ${screenWidth * 0.03}px;
   color: white;
`;

const FooterText2 = styled.Text`
 font-size: ${screenWidth * 0.03}px;
  padding-right: ${screenHeight * 0.04}px;
  color: white;
`;

