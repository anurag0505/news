import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import moment from "moment";
import ImageHero from "./ImageHero";
import Footer from "./Footer";
import { useTheme } from "../utils/ThemeContext";
import ImageViewer from "react-native-image-zoom-viewer";
import Icon from "react-native-vector-icons/Ionicons";
import { WebView } from "react-native-webview";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export const Card = ({ news }) => {
  const { theme } = useTheme();
  const [isImageViewVisible, setImageViewVisible] = useState(false);

  const images = [
    {
      url: news.image,
    },
  ];
  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <Container theme={theme}>
      {news.video ? (
        <VideoContainer>
          <StyledWebView
            javaScriptEnabled={true}
            source={{ uri: getEmbedUrl(news.video) }}
          />
        </VideoContainer>
      ) : (
        <TouchableOpacity onPress={() => setImageViewVisible(true)}>
          <ImageHeroContainer>
            <ImageHero source={{ uri: news.image }} />
          </ImageHeroContainer>
        </TouchableOpacity>
      )}

      <Modal visible={isImageViewVisible} transparent={true} theme={theme}>
        <ImageViewer
          imageUrls={images}
          onSwipeDown={() => setImageViewVisible(false)}
          onClick={() => setImageViewVisible(false)}
          renderIndicator={() => null}
          enableSwipeDown={true}
          enableImageIndicator={false}
          doubleClickInterval={200}
          renderHeader={() => (
            <TouchableWithoutFeedback
              onPress={() => setImageViewVisible(false)}
            >
              <IconContainer>
                <Icon
                  style={{ padding: 20 }}
                  name="close"
                  size={30}
                  color="#FFF"
                />
              </IconContainer>
            </TouchableWithoutFeedback>
          )}
          renderFooter={(currentIndex) => (
            <FooterContainerModal>
              <Text1 style={{ color: "white", fontSize: 13 }}>
                {news.title}
              </Text1>
            </FooterContainerModal>
          )}
        />
      </Modal>
      <ContentContainer>
        <TitleText theme={theme}>{news.title}</TitleText>
        <Description theme={theme}>{news.description}</Description>
        <InfoText>
          <Text1 theme={theme}>{news.category}</Text1>
          <Text2 theme={theme}>{moment(new Date(news.date)).fromNow()}</Text2>
        </InfoText>
      </ContentContainer>
      <FooterContainer>
        <Footer imageUri={news.image} />
      </FooterContainer>
    </Container>
  );
};

export default Card;

const VideoContainer = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight * 0.34}px;
`;

const StyledWebView = styled(WebView)`
  width: ${screenWidth}px;
  height: ${screenHeight * 0.34}px;
`;

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
`;

const ImageHeroContainer = styled.View`
  justify-content: flex-start;
`;

const ContentContainer = styled.View`
  justify-content: flex-start;
  flex-grow: 2;
  padding: ${screenHeight * 0.0}px ${screenHeight * 0.025}px;
`;

const FooterContainer = styled.View`
  justify-content: center;
  padding-bottom: ${screenHeight * 0.054}px;
`;

const TitleText = styled.Text`
  color: ${(props) => props.theme.text};
  font-weight: 700;
  font-family: serif;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: ${screenHeight * 0.03}px;
  font-size: ${screenHeight * 0.022}px;
  padding-bottom: ${screenHeight * 0.01}px;
  padding-top: ${screenHeight * 0.02}px;
`;

const Description = styled.Text`
  font-size: ${screenHeight * 0.021}px;
  color: ${(props) => props.theme.text};
  line-height: ${screenHeight * 0.032}px;
  font-family: serif;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.View`
  align-items: flex-end;
  flex-direction: row;
  padding: ${screenHeight * 0.0035}px 0px ${screenHeight * 0.002}px;
`;

const Text1 = styled.Text`
  font-size: ${screenWidth * 0.025}px;
  font-weight: bold;
  align-items: flex-start;
  display: flex;
  color: gray;
`;

const Text2 = styled.Text`
  font-size: ${screenWidth * 0.025}px;
  padding-left: ${screenWidth * 0.02}px;
  color: gray;
  font-weight: bold;
`;

const IconContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
`;

const FooterContainerModal = styled.View`
  bottom: 0;
  width: ${screenWidth}px;
  padding: ${screenWidth * 0.03}px;

  align-items: center;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;
