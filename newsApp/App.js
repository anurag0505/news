import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./src/screen/Home";
import Setting from "./src/screen/Setting";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { height: screenHeight } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              height: 40, // Set your desired height here
              paddingBottom: 2, // Adjust padding to center the icon vertically
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;
