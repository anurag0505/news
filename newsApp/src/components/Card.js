import React from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components";
import ImageHero from "./ImageHero";
import moment from "moment";
import Footer from "./Footer";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export const Card = ({ news }) => {
  return (
    <Container>
      <ImageHeroContainer>
        <ImageHero source={{ uri: news.image }} />
      </ImageHeroContainer>
      <ContentContainer>
        <TitleText>{news.title}</TitleText>
        <DiscriptionContainer>
          <Description>{news.description}</Description>
          <InfoText>
            <Text1>{news.category}</Text1>
            <Text2>{moment(new Date(news.date)).fromNow()}</Text2>
          </InfoText>
        </DiscriptionContainer>
      </ContentContainer>
      <FooterContainer>
        <Footer imageUri={news.image} />
      </FooterContainer>
    </Container>
  );
};

export default Card;

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const ImageHeroContainer = styled.View`
  flex: 0.35;
  justify-content: flex-start;
`;

const ContentContainer = styled.View`
  flex: 0.55;
  justify-content: flex-start;
`;

const FooterContainer = styled.View`
  flex: 0.01;
  justify-content: flex-end;
`;

const DiscriptionContainer = styled.View`
  padding: 0 ${screenHeight * 0.028}px;
`;

const TitleText = styled.Text`
  font-weight: 700;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${screenHeight * 0.032}px;
  font-size: ${screenWidth * 0.045}px;
  padding: ${screenHeight * 0.01}px ${screenHeight * 0.028}px
    ${screenHeight * 0.01}px ${screenHeight * 0.025}px;
`;

const Description = styled.Text`
  font-size: ${screenWidth * 0.043}px;
  color: #666;
  line-height: ${screenHeight * 0.032}px;
  font-family: serif;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.View`
  font-size: ${screenWidth * 0.003}px;
  font-family: serif;
  align-items: flex-end;
  flex-direction: row;
  padding: ${screenHeight * 0.005}px 0px;
`;

const Text1 = styled.Text`
  font-size: ${screenWidth * 0.03}px;
  align-items: flex-start;
  display: flex;
`;

const Text2 = styled.Text`
  font-size: ${screenWidth * 0.03}px;
  padding-left: ${screenWidth * 0.02}px;
`;
