import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Dimensions } from 'react-native';
import Content from '../components/Content';

 const { height: screenHeight } = Dimensions.get('window');

export default function Home() {
  return (
    <SafeArea>
      <Container>
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



