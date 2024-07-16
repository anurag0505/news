import React, { useState } from "react";
import styled from "styled-components/native";
import newsData from "../assets/newsData.json";
import { useTheme } from "../utils/ThemeContext";

const categories = [...new Set(newsData.map((news) => news.category))];

export default function Category({ onCategorySelect }) {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <CategoryContainer horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          onPress={() => handleCategoryPress(category)}
          isSelected={category === selectedCategory}
          theme={theme}
        >
          <CategoryText theme={theme}>{category}</CategoryText>
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.ScrollView`
  flex-direction: row;
  padding: 10px 0;
  background-color: ${(props) => props.theme.background};
`;

const CategoryButton = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.isSelected ? props.theme.active : props.theme.inactive};
  padding: 10px 15px;
  border-radius: 20px;
  margin-right: 10px;
  border: 1px solid #ccc;
`;

const CategoryText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
`;
