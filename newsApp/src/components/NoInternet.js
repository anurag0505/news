import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Cartoon from "../assets/images/cartoon2.png";
import StyledButton from "../utils/StyledButton";
import { useTranslation } from "react-i18next";
import { useTextSize } from "../utils/TextSizeContext";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const NoInternet = () => {
  const { t } = useTranslation();
  const { textSize } = useTextSize();

  const handleTryagain = () => {};

  return (
    <Container>
      <ContentContainer>
        <Image source={Cartoon} />
        <InternetTitle textSize={textSize}>
          {t("noInternetTitle")}
        </InternetTitle>
        <InternetDescription textSize={textSize}>
          {t("noInternetDescription")}
        </InternetDescription>
      </ContentContainer>
      <StyledButton title={t("retry")} onPress={handleTryagain} />
    </Container>
  );
};

export default NoInternet;

const Container = styled.View`
  flex-direction: column;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

const ContentContainer = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-grow: 0.15;
  padding: ${screenHeight * 0.025}px ${screenWidth * 0.035}px;
`;

const Image = styled.ImageBackground`
  justify-content: flex-start;
  align-items: center;
  height: ${screenHeight * 0.2}px;
  width: ${screenWidth * 0.35}px;
  overflow: hidden;
`;

const InternetTitle = styled.Text`
  font-size: ${(props) =>
    props.textSize === "large" ? screenWidth * 0.055 : screenWidth * 0.05}px;
  align-items: center;
  font-family: serif;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;

const InternetDescription = styled.Text`
  font-size: ${(props) =>
    props.textSize === "large" ? screenWidth * 0.042 : screenWidth * 0.038}px;
  font-family: serif;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;
