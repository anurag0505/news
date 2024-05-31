import React from 'react'
import { Dimensions } from 'react-native';
import styled from 'styled-components'; 
import ImageHero from './ImageHero';
import moment from 'moment';
import Footer from './Footer';


const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const Card = ({news}) => {
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
              <Text2>{ moment(new Date(news.date)).fromNow()}</Text2>
            </InfoText>
          </DiscriptionContainer>
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
  </Container>
  )
}

export default Card;

const Container = styled.View`
  /* flex-direction: column;
  text-align: center;
  
  margin-top: ${screenHeight * 0.015}px;
  overflow: hidden; */
  flex: 1;
  justify-content: space-between;
  padding: 0 ${screenWidth * 0.05}px;
  
`;
const ImageHeroContainer = styled.View`
  flex: 0.35;
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
  /*height: ${screenHeight * 0.42}px; 
   display: flex;
  flex-direction: column; */
  padding: 0 ${screenHeight * 0.028}px;

`;

const TitleText = styled.Text`
  font-weight: 700;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${screenHeight * 0.04}px;
  font-size: ${screenWidth * 0.045}px;
  color: #333;
  padding: ${screenHeight * 0.00}px ${screenHeight * 0.028}px ${screenHeight * 0.010}px ${screenHeight * 0.025}px ;
`;



const Description = styled.Text`
  font-size: ${screenWidth * 0.043}px;
  color: #666;
  line-height: ${screenHeight * 0.04}px;
  font-family: serif;
  align-items: center;
  justify-content: center;
  /* padding: ${screenHeight * 0.005}px ${screenHeight * 0.028}px ${screenHeight * 0.005}px; */
`;

const InfoText = styled.View`
 font-size: ${screenWidth * 0.003}px;
  color: #666;
  font-family: serif;
  align-items: flex-end;
  /* padding: ${screenHeight * 0.005}px ${screenHeight * 0.030}px ${screenHeight * 0.00}px; */
  flex-direction: row;
  padding: ${screenHeight * 0.005}px;
`;

const Text1 = styled.Text`
  color: red;
  font-size: ${screenWidth * 0.03}px;
  align-items: flex-start;
  display: flex;
`;

const Text2 = styled.Text`
  color: gray;
  font-size: ${screenWidth * 0.03}px;
  padding-left:  ${screenWidth * 0.02}px;;
`;

