import React from "react";
import CustomSwiper from "../components/CustomSwiper";
import { useTheme } from "../utils/ThemeContext";
import styled from "styled-components/native";

const Content = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <CustomSwiper navigation={navigation} />
    </Container>
  );
};

export default Content;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding: 0;
  margin: 0;
`;
