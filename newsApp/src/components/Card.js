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
        <DiscriptionContainer>
          <Description theme={theme}>{news.description}</Description>
          <InfoText>
            <Text1 theme={theme}>{news.category}</Text1>
            <Text2 theme={theme}>{moment(new Date(news.date)).fromNow()}</Text2>
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
  flex: ${Platform.OS === "ios" ? "0.86" : "0.95"};
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
`;

const ImageHeroContainer = styled.View`
  flex: 3.8;
  justify-content: flex-start;
`;

const ContentContainer = styled.View`
  flex: 3.8;
  justify-content: flex-start;
`;

const FooterContainer = styled.View`
  flex: 1;
  justify-content: ${Platform.OS === "ios" ? "flex-end" : "flex-end"};
`;

const DiscriptionContainer = styled.View`
  padding: 0 ${screenHeight * 0.025}px;
`;

const TitleText = styled.Text`
  color: ${(props) => props.theme.text};
  font-weight: 700;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${screenHeight * 0.03}px;
  font-size: ${screenWidth * 0.045}px;
  padding: ${screenHeight * 0.01}px ${screenHeight * 0.025}px
    ${screenHeight * 0.01}px ${screenHeight * 0.025}px;
`;

const Description = styled.Text`
  font-size: ${screenWidth * 0.043}px;
  color: ${(props) => props.theme.text};
  line-height: ${screenHeight * 0.03}px;
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
  color: ${(props) => props.theme.text};
`;

const Text2 = styled.Text`
  font-size: ${screenWidth * 0.03}px;
  padding-left: ${screenWidth * 0.02}px;
  color: ${(props) => props.theme.text};
`;
const CardText = styled.Text`
  color: ${(props) => props.theme.text};
`;
