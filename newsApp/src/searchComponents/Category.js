import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import newsData from "../assets/newsData.json";

const categories = [...new Set(newsData.map((news) => news.category))];

export default function Category({ onCategorySelect }) {
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
        >
          <CategoryText>{category}</CategoryText>
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.ScrollView`
  flex-direction: row;
  padding: 10px 0;
`;

const CategoryButton = styled.TouchableOpacity`
  background-color: ${(props) => (props.isSelected ? "#e0e0e0" : "#f4f4f4")};
  padding: 10px 15px;
  border-radius: 20px;
  margin-right: 10px;
  border: 1px solid #ccc;
`;

const CategoryText = styled.Text`
  font-size: 14px;
  color: ${(props) => (props.isSelected ? "#333" : "#333")};
  font-weight: 400;
`;
