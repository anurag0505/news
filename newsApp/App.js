import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import Home from './src/screen/Home';
 
export default function App() {
  return (
    <SafeArea>
      <Container>
    <Home/>
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
  flex-direction: column;
`;

