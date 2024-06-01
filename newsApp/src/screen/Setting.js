import React from "react";
import styled from "styled-components/native";
import { Button, View } from "react-native";

const Setting = ({ navigation }) => {
  return (
    <Container>
      <Text1>setting page</Text1>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </Container>
  );
};

export default Setting;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.Text`
  font-size: 20px;
`;
