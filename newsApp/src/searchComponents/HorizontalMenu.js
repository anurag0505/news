import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../utils/ThemeContext";
import { useTranslation } from "react-i18next";
import ReanimatedCarousel from "react-native-reanimated-carousel";
import Entertainment from "../assets/images/Entertainment.jpg";
import Finance from "../assets/images/Finance.jpg";
import Politics from "../assets/images/Politics.jpg";
import Science from "../assets/images/Science.jpg";
import Technology from "../assets/images/Technology.jpg";
import Sports from "../assets/images/Sports.jpg";
import Health from "../assets/images/Health2.jpg";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const menuItems = [
  { title: "Entertainment", image: Entertainment },
  { title: "Finance", image: Finance },
  { title: "Politics", image: Politics },
  { title: "Science", image: Science },
  { title: "Technology", image: Technology },
  { title: "Sports", image: Sports },
  { title: "Health", image: Health },
];

const HorizontalMenu = ({ onItemPress }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(menuItems.length / 2)
  );

  const renderItem = ({ item, index }) => (
    <MenuItem
      key={index}
      onPress={() => onItemPress(t(item.title))}
      isActive={index === activeIndex}
    >
      <Wrapper isActive={index === activeIndex}>
        <StyledImage source={item.image} isActive={index === activeIndex} />
      </Wrapper>
      <Title theme={theme} isActive={index === activeIndex}>
        {t(item.title)}
      </Title>
    </MenuItem>
  );

  return (
    <Container theme={theme}>
      <ReanimatedCarousel
        data={menuItems}
        renderItem={renderItem}
        width={screenWidth * 0.4}
        height={screenHeight * 0.22}
        onSnapToItem={(index) => {
          setActiveIndex(index);
          onItemPress(menuItems[index].title); // Ensure onItemPress is called with the correct title
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1.0,
          parallaxScrollingOffset: 40,
        }}
        style={{ overflow: "visible" }}
        scrollAnimationDuration={300}
        easing={(t) => t * (2 - t)} // Easing function for smoother animation
      />
    </Container>
  );
};

export default HorizontalMenu;

const Container = styled.View`
  padding-top: 15px;
  padding-bottom: 5px;
  height: ${screenHeight * 0.25}px;
  background-color: ${(props) => props.theme.background};
`;

const MenuItem = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  margin: 0 6px;
  transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(1.0)")};
  transition: transform 0.2s ease-in-out;
`;

const Wrapper = styled.View`
  padding: ${(props) => (props.isActive ? "18px" : "14px")};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.Image`
  width: ${(props) => (props.isActive ? "90px" : "75px")};
  height: ${(props) => (props.isActive ? "90px" : "75px")};
  border-radius: 25px;
`;

const Title = styled.Text`
  font-size: ${(props) => (props.isActive ? "14px" : "12px")};
  color: ${(props) => (props.isActive ? props.theme.active : props.theme.text)};
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 5px;
`;
