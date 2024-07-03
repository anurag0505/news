import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screen/Splash";
import MainTabNavigator from "./MainTabNavigator";
import SearchScreen from "../screen/SearchScreen";
import WebViewScreen from "../screen/WebViewScreen";
import CaughtUp from "../components/CaughtUp";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      <Stack.Screen name="CaughtUp" component={CaughtUp} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
