import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../screen/Home";
import WebViewScreen from "../screen/WebViewScreen";
import CaughtUp from "../components/CaughtUp";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="WebView"
      component={WebViewScreen}
      options={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <Stack.Screen name="CaughtUp" component={CaughtUp} />
  </Stack.Navigator>
);

export default HomeStack;
