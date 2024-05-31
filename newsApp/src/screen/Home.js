import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Content from '../components/Content';
import { StatusBar } from 'expo-status-bar';

 const { height: screenHeight } = Dimensions.get('window');

export default function Home() {
  return (
    
      <Container>
        <Content/>
      </Container>
    
  );
}

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//  background-color: #ffffff;
// `;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  
`;



