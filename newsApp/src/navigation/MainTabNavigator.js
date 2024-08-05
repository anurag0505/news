import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "../utils/ThemeContext";
import FoundationIcons from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchStack from "../navigation/SearchStack";
import HomeStack from "../navigation/HomeStack";
import SettingScreen from "../screen/SettingsScreen";

const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const color = focused ? theme.active : theme.inactive;
          if (route.name === "Search") {
            return <Ionicons name="search-outline" size={25} color={color} />;
          }
          if (route.name === "Home") {
            return <FoundationIcons name="home" size={25} color={color} />;
          }
          if (route.name === "Settings") {
            return <FoundationIcons name="torso" size={25} color={color} />;
          }
        },
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { height: 0 },
        tabBarStyle: {
          backgroundColor: theme.tabBarBackground,
          height: 45,
        },
        tabBarActiveTintColor: theme.active,
        tabBarInactiveTintColor: theme.inactive,
      })}
    >
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
