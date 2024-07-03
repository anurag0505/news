import React from "react";
import { AppRegistry, StatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components/native";
import { ThemeProvider, useTheme } from "./src/utils/ThemeContext";
import { name as appName } from "./app.json";
import AppNavigator from "./src/navigation/AppNavigator";

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
          <StatusBar barStyle="light-content" backgroundColor="#000000" />
          <AppNavigator />
        </Container>
      </GestureHandlerRootView>
    </StyledThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
`;

AppRegistry.registerComponent(appName, () => App);

export default App;
