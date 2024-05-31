import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,Dimensions } from 'react-native';
import Home from './src/screen/Home';

 const { height: screenHeight } = Dimensions.get('window');
 
export default function App() {
  return (
    <SafeArea>
      <Container>
        <StatusBar style="auto" />
        <Home/>
      </Container>
    </SafeArea>
  );
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
 background-color: #ffffff;
 margin-top: ${screenHeight * 0.028}px ;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
 
  /* padding-top:3%; 
  background-color: aquamarine; */
`;

