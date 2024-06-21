import React from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";

import Cartoon from "../assets/images/cartoon2.png";
import StyledButton from "../utils/StyledButton";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const NoInternet = () => {
  const handleTryagain = () => {
    console.log("something");
  };

  return (
    <Container>
      <ContentContainer>
        <Image source={Cartoon} />
        <InternetTitle>No Internet Connection </InternetTitle>
        <InternetDiscription>
          There seems to be a problem with the network. Please check your
          internet connection and try again.
        </InternetDiscription>
      </ContentContainer>
      <StyledButton title="Retry" onPress={handleTryagain} />
    </Container>
  );
};

export default NoInternet;

const Container = styled.View`
  flex-direction: column;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;
const ContentContainer = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-grow: 0.15;

  padding: ${screenHeight * 0.025}px ${screenWidth * 0.035}px;
`;

const Image = styled.ImageBackground`
  justify-content: flex-start;
  align-items: center;
  height: ${screenHeight * 0.2}px;
  width: ${screenWidth * 0.35}px;
  overflow: hidden;
`;

const InternetTitle = styled.Text`
  font-size: ${screenWidth * 0.06}px;
  align-items: center;
  font-family: serif;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;
const InternetDiscription = styled.Text`
  font-size: ${screenWidth * 0.045}px;
  font-family: serif;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;
