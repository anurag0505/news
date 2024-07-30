import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Splash from "../screen/Splash";
import MainTabNavigator from "./MainTabNavigator";
import SearchScreen from "../screen/SearchScreen";
import WebViewScreen from "../screen/WebViewScreen";
import CaughtUp from "../components/CaughtUp";
import BookMark from "../SettingsComponents/BookMark";
import SettingsScreen from "../screen/SettingsScreen";
import Header from "../SettingsComponents/Header";
import Content from "../components/Content";
import SimpleComponent from "../SettingsComponents/SimpleComponent";
import Home from "../screen/Home";
import NoInternet from "../components/NoInternet";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen name="CaughtUp" component={CaughtUp} />
      <Stack.Screen name="BookMark" component={BookMark} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="NoInternet" component={NoInternet} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
