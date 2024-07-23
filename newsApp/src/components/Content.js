import React, { useState, useRef, useContext } from "react";
import {
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import CustomSwiper from "../components/CustomSwiper";
import { useTheme } from "../utils/ThemeContext";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { BookmarksContext } from "../SettingsComponents/BookmarksContext";
import CardActionModal from "./CardActionModal"; // Import the modal here
import { useRoute } from "@react-navigation/native";
import newsData from "../assets/newsData.json";
import SimpleComponent from "../SettingsComponents/SimpleComponent";

const { height: screenHeight } = Dimensions.get("window");

const Content = ({ navigation }) => {
  const { theme } = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

  // const route = useRoute();
  // const { index } = route.params;

  // const cardDisplayer = newsData[index];

  const openModal = (news) => {
    setSelectedNews(news);
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      setSelectedNews(null);
    });
  };

  return (
    <Container theme={theme}>
      <CustomSwiper navigation={navigation} onCardTap={openModal} />
      {isModalVisible && selectedNews && (
        <CardActionModal
          visible={isModalVisible}
          onClose={closeModal}
          news={selectedNews}
        />
      )}
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
