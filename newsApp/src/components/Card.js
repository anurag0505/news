import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  BackHandler,
  Platform,
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
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

  const openImageViewer = () => {
    setImageViewVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const closeImageViewer = () => {
    Animated.timing(slideAnim, {
      toValue: screenHeight,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setImageViewVisible(false);
    });
  };

  const images = [
    {
      url: news.image,
    },
  ];

  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  useEffect(() => {
    const backAction = () => {
      if (isImageViewVisible) {
        closeImageViewer();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [isImageViewVisible]);

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
        <TouchableOpacity onPress={openImageViewer}>
          <ImageHeroContainer>
            <ImageHero source={{ uri: news.image }} />
          </ImageHeroContainer>
        </TouchableOpacity>
      )}

      <Modal
        visible={isImageViewVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeImageViewer}
      >
        <TouchableWithoutFeedback onPress={closeImageViewer}>
          <Animated.View
            style={{
              transform: [{ translateY: slideAnim }],
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              justifyContent: "center",
            }}
          >
            <ImageViewer
              imageUrls={images}
              onSwipeDown={closeImageViewer}
              onClick={closeImageViewer}
              renderIndicator={() => null}
              enableSwipeDown={true}
              enableImageIndicator={false}
              onBackButtonPress={false}
              doubleClickInterval={200}
              renderHeader={() => (
                <TouchableWithoutFeedback onPress={closeImageViewer}>
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
                  <Text1
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: 400,
                    }}
                  >
                    {news.title}
                  </Text1>
                </FooterContainerModal>
              )}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
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
  flex: ${Platform.OS === "ios" ? "0.86" : "1"};
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  border-radius: ${screenHeight * 0.02}px;
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
  top: ${screenWidth * 0.05}px;
  left: ${screenWidth * 0.025}px;
`;

const FooterContainerModal = styled.View`
  bottom: ${screenWidth * 0.08}px;
  width: ${screenWidth}px;
  padding: ${screenWidth * 0.03}px;

  align-items: center;
  justify-content: center;
`;
