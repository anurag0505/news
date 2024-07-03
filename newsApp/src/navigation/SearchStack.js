import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screen/SearchScreen";

const Stack = createStackNavigator();

const SearchStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
  </Stack.Navigator>
);

export default SearchStack;
