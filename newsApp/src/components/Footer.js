import React from "react";
import { Dimensions, ImageBackground } from "react-native";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const Footer = ({ imageUri, navigation }) => {
  return (
    <FooterContainer>
      <StyledImageBackground
        source={{ uri: imageUri }}
        imageStyle={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
        resizeMode="cover"
      >
        <Overlay />
        <StyledBlurView
          experimentalBlurMethod
          intensity={52}
          tint="dark"
          style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
        />
        <FooterText2>Tap to Know More</FooterText2>
      </StyledImageBackground>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight * 0.085}px;
  border-radius: 20px;
  padding: ${screenHeight * 0.0}px ${screenHeight * 0.001}px;
`;

const StyledImageBackground = styled(ImageBackground)`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
`;

const StyledBlurView = styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const FooterText2 = styled.Text`
  font-size: ${screenWidth * 0.03}px;
  padding-right: ${screenHeight * 0.04}px;
  color: white;
`;
