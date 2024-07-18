import React from "react";
import { AppRegistry, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components/native";
import { ThemeProvider, useTheme } from "./src/utils/ThemeContext";
import { name as appName } from "./app.json";
import AppNavigator from "./src/navigation/AppNavigator";
import i18n from "./src/i18n";
import { I18nextProvider } from "react-i18next";
import "intl-pluralrules";

const App = () => (
  <ThemeProvider>
    <AppWithProviders />
  </ThemeProvider>
);

const AppWithProviders = () => {
  const { theme } = useTheme();

  return (
    <I18nextProvider i18n={i18n}>
      <StyledThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Container>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <AppNavigator />
          </Container>
        </GestureHandlerRootView>
      </StyledThemeProvider>
    </I18nextProvider>
  );
};

const Container = styled.View`
  flex: 1;
`;

AppRegistry.registerComponent(appName, () => App);

export default App;
