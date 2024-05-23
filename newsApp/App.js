import React from 'react';
import styled from 'styled-components/native';
import Header from './src/components/Header';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Dimensions } from 'react-native';
 import ImageHero from './src/components/ImageHero';
 import MainImage from './assets/images/sample.jpeg'
import Title from './src/components/Title';
 

 const { height: screenHeight } = Dimensions.get('window');

export default function App() {
  return (
    <SafeArea>
      <Container>
        <Header />
      <ImageHero
       source={MainImage}
      />
        <Title/>
        <StatusBar style="auto" />
      </Container>
    </SafeArea>
  );
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 1;
  padding-top:${screenHeight * 0.032}px; 
  flex-direction: column;
  
`;

