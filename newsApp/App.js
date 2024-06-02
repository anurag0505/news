import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./src/screen/Home";
import Setting from "./src/screen/Setting";
import Splash from "./src/screen/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => (
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
        height: 40,
        paddingBottom: 2,
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Settings" component={Setting} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;
