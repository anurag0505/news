import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const ButtonContainer = styled.TouchableOpacity`
  background-color: #1877f2;
  width: ${screenWidth - screenWidth * 0.1}px;
  height: ${screenHeight * 0.065}px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: serif;
`;

const StyledButton = ({ title, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default StyledButton;
