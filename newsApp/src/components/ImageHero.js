import React, { useState } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
import Fallback from "../assets/images/replace22.jpg";

const ImageHero = ({ source }) => {
  const [imgSrc, setImgSrc] = useState(source);

  const handleError = () => {
    setImgSrc(Fallback);
  };

  return (
    <Container>
      <HeroImage
        imageStyle={{
          borderTopLeftRadius: screenHeight * 0.02,
          borderTopRightRadius: screenHeight * 0.02,
        }}
        source={imgSrc}
        resizeMode="cover"
        onError={handleError}
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
  width: 100%;
  height: 100%;
`;

export default ImageHero;
