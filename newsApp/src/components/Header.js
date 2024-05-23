import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { Dimensions } from 'react-native';
const { height: screenHeight } = Dimensions.get('window');

const Header = () => {
  return (
    <SafeArea>
      <HeaderContainer>
        <HeaderText>Quick Shorts</HeaderText>
      </HeaderContainer>
    </SafeArea>
  );
};
 
const SafeArea = styled(SafeAreaView)`
  width: 100%;
`;

const HeaderContainer = styled.View`
  flex: 1;
  width: 100%;
  height: ${screenHeight * 0.05}px; 
  padding-top: 2vh;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: tomato;
  flex-direction: row;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export default Header;