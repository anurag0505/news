import React from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
import moment from "moment";
import ImageHero from "./ImageHero";
import Footer from "./Footer";
import { useTheme } from "../utils/ThemeContext";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export const Card = ({ news }) => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <ImageHeroContainer>
        <ImageHero source={{ uri: news.image }} />
      </ImageHeroContainer>
      <ContentContainer>
        <TitleText theme={theme}>{news.title}</TitleText>
        <Description theme={theme}>{news.description}</Description>
        <InfoText>
          <Text1 theme={theme}>{news.category}</Text1>
          <Text2 theme={theme}>{moment(new Date(news.date)).fromNow()}</Text2>
        </InfoText>
      </ContentContainer>
      <FooterContainer>
        <Footer imageUri={news.image} />
      </FooterContainer>
    </Container>
  );
};

export default Card;

const Container = styled.View`
  display: flex;
  flex: ${Platform.OS === "ios" ? "0.86" : "0.95"};
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
`;

const ImageHeroContainer = styled.View`
  justify-content: flex-start;
`;

const ContentContainer = styled.View`
  justify-content: flex-start;
  flex-grow: 1;
  padding: ${screenHeight * 0.01}px ${screenHeight * 0.03}px
    ${screenHeight * 0.005}px;
`;
const FooterContainer = styled.View`
  justify-content: center;
`;

const TitleText = styled.Text`
  color: ${(props) => props.theme.text};
  font-weight: 700;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: ${screenHeight * 0.03}px;
  font-size: ${screenWidth * 0.045}px;
  padding-bottom: ${screenHeight * 0.01}px;
  padding-top: ${screenHeight * 0.015}px;
`;

const Description = styled.Text`
  font-size: ${screenWidth * 0.041}px;
  color: ${(props) => props.theme.text};
  line-height: ${screenHeight * 0.032}px;
  font-family: serif;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.View`
  align-items: flex-end;
  flex-direction: row;
  padding: ${screenHeight * 0.003}px 0px;
`;

const Text1 = styled.Text`
  font-size: ${screenWidth * 0.025}px;
  font-weight: bold;
  align-items: flex-start;
  display: flex;
  color: ${(props) => props.theme.text};
`;

const Text2 = styled.Text`
  font-size: ${screenWidth * 0.025}px;
  padding-left: ${screenWidth * 0.02}px;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;
