import React from "react";
import { StatusBar } from "expo-status-bar";
// import Icon from "react-native-vector-icons/Ionicons";
import Home from "./src/screen/Home";
import Setting from "./src/screen/Setting";
import Splash from "./src/screen/Splash";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { ThemeProvider, useTheme } from "./src/utils/ThemeContext";
import "react-native-gesture-handler";
import FoundationIcons from "react-native-vector-icons/Foundation";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "widget";
          }
          if (focused) {
            color = "blue";
          }
          return <FoundationIcons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: theme.text,
        tabBarInactiveTintColor:
          theme.background === "#ffffff" ? "#000000" : "#ffffff",
        tabBarStyle: {
          height: 40,
          padding: 1.5,
          backgroundColor: theme.background,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Setting} />
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

  return (
    <StyledThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
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
      </GestureHandlerRootView>
    </StyledThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

AppRegistry.registerComponent(appName, () => App);

export default App;
