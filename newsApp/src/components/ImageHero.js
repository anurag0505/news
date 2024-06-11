import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const ImageHero = ({ source }) => {
  return (
    <Container>
      <HeroImage
        imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        source={source}
        resizeMode="cover"
      />
    </Container>
  );
};

const Container = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight * 0.34}px;
`;

const HeroImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default ImageHero;
