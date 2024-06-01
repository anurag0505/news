import React from "react";
import { Dimensions, ImageBackground, Platform } from "react-native";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const Footer = ({ imageUri }) => {
  return (
    <FooterContainer>
      <ImageBackground
        source={{ uri: imageUri }}
        style={{
          height: screenHeight * 0.1,
          width: screenWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        resizeMode="cover"
      >
        <Overlay />
        <BlurView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          intensity={70}
          tint="dark"
          experimentalBlurMethod="true"
        />
        <FooterText2>Tap to Know More</FooterText2>
      </ImageBackground>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight * 0.1}px;
  margin-bottom: ${Platform.OS === "ios"
    ? screenHeight * 0.075
    : screenHeight * 0.0}px;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
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
