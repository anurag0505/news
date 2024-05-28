import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Dimensions } from 'react-native';
 import MainImage from '../assets/images/sample.jpeg'
import Content from '../components/Content';
import ImageHero from '../components/ImageHero';
 const { height: screenHeight } = Dimensions.get('window');

export default function Home() {
  return (
    <SafeArea>
      <Container>
      <ImageHero
       source={MainImage}
      />
        <Content/>
        <StatusBar style="auto" />
      </Container>
    </SafeArea>
  );
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
 background-color: #ffffff;
`;

const Container = styled.View`
  flex: 1;
  padding-top:${screenHeight * 0.032}px; 
  flex-direction: column;
`;



