import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { height: screenHeight } = Dimensions.get('window');

const ImageHero = ({ source }) => {
  return (
    <Container>
      <HeroImage source={source}>
        
      </HeroImage>
    </Container>
  );
};

const Container = styled.View`
  margin-top:${screenHeight * 0.05}px; 
  width: 100%;
  height: ${screenHeight * 0.35}px; 
  background-color: red;
  

  
`;

const HeroImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-size:cover;
 
`;


export default ImageHero;