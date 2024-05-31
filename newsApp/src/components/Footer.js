import React from 'react'
import { Dimensions,ImageBackground,View, Text } from 'react-native';
import styled from 'styled-components'; 
 import FooterImage from '../assets/images/laptopDark.jpg'

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const Footer = () => {
  return (
    
       <ImageBackground
      source={FooterImage}
      style={{
        height: screenHeight * 0.053,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
       resizeMode="cover"
    >
      <FooterText1>Swipe Left to See More / </FooterText1>
      <FooterText2>Tap to Know More</FooterText2>
    </ImageBackground>
       
  )
}

export default Footer


// const Container = styled.View`
//   height: ${screenHeight * 0.05}px;
//   width :${screenWidth}px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   background-image: url(${FooterImage});
// 	background-attachment: fixed;
// 	background-repeat: no-repeat;
// 	background-size: cover;
  
// `;

const FooterText1 = styled.Text`
   font-size: ${screenWidth * 0.03}px;
   color: white;
`;

const FooterText2 = styled.Text`
 font-size: ${screenWidth * 0.03}px;
  padding-right: ${screenHeight * 0.04}px;
  color: white;
`;

