import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NoInternet from "../components/NoInternet";

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={NoInternet} />
  </Stack.Navigator>
);

export default ProfileStack;
