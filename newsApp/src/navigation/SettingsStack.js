import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screen/SettingsScreen";
import BookMark from "../SettingsComponents/BookMark";
import Header from "../SettingsComponents/Header";

const Stack = createStackNavigator();

const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="settings" component={SettingsScreen} />
    <Stack.Screen name="BookMark" component={BookMark} />
    <Stack.Screen name="Header" component={Header} />
  </Stack.Navigator>
);

export default SettingsStack;
