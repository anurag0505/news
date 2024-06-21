import React from "react";
import { AppRegistry, StatusBar, Dimensions, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FoundationIcons from "react-native-vector-icons/Foundation";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Home from "./src/screen/Home";
import Search from "./src/screen/Search";
import NoInternet from "./src/components/NoInternet";
import CaughtUp from "./src/components/CaughtUp";
import WebViewScreen from "./src/screen/WebViewScreen";
import Splash from "./src/screen/Splash";
import { name as appName } from "./app.json";
import { ThemeProvider, useTheme } from "./src/utils/ThemeContext";

const { height: screenHeight } = Dimensions.get("window");
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="WebView" component={WebViewScreen} />
    <Stack.Screen name="CaughtUp" component={CaughtUp} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={NoInternet} />
  </Stack.Navigator>
);

const MainTabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === "HomeTab") {
            iconName = "home";
            IconComponent = FoundationIcons;
          } else if (route.name === "SearchTab") {
            iconName = "search";
            IconComponent = IconComponent = MaterialIcons;
          } else if (route.name === "ProfileTab") {
            iconName = "torso";
            IconComponent = FoundationIcons;
          }
          if (focused) {
            color = "blue";
          }

          return (
            <IconComponent name={iconName} size={size || 25} color={color} />
          );
        },
        tabBarActiveTintColor: theme.text,
        tabBarInactiveTintColor:
          theme.background === "#ffffff" ? "#000000" : "#ffffff",
        tabBarStyle: {
          height:
            Platform.OS === "ios" ? screenHeight * 0.08 : screenHeight * 0.05,
          padding: 1.5,
          backgroundColor: theme.background,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="SearchTab"
        component={SearchStack}
        options={{ title: "Search" }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{ title: "User" }}
      />
    </Tab.Navigator>
  );
};

const App = () => (
  <ThemeProvider>
    <AppWithTheme />
  </ThemeProvider>
);

const AppWithTheme = () => {
  const { theme } = useTheme();
  const statusBarStyle = theme.isDark ? "light-content" : "dark-content";

  return (
    <StyledThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Container>
          <StatusBar
            barStyle={statusBarStyle}
            backgroundColor={theme.background}
          />
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
      </GestureHandlerRootView>
    </StyledThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

AppRegistry.registerComponent(appName, () => App);

export default App;
