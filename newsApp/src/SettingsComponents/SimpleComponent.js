import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SimpleComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("Button Pressed"); // Debugging
    navigation.goBack();
  };

  return (
    <View>
      <Button title="Go Back" onPress={handlePress} />
    </View>
  );
};

export default SimpleComponent;
