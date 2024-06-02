import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import * as Animatable from "react-native-animatable";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 2000);
  }, [navigation]);

  return (
    <Container>
      <AnimatableText animation="bounceInDown" duration={2000}>
        Splash
      </AnimatableText>
    </Container>
  );
};

export default Splash;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkred;
`;

const Text1 = styled.Text`
  color: white;
  font-size: 36px;
  font-weight: 800;
  font-family: serif;
`;

// Create an animatable version of the styled Text1 component
const AnimatableText = Animatable.createAnimatableComponent(Text1);
