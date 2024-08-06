import React from "react";
import { AppRegistry, StatusBar, Dimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components/native";
import { ThemeProvider, useTheme } from "./src/utils/ThemeContext";
import { name as appName } from "./app.json";
import AppNavigator from "./src/navigation/AppNavigator";
import i18n from "./src/i18n";
import { I18nextProvider } from "react-i18next";
import { BookmarksProvider } from "./src/SettingsComponents/BookmarksContext";
import { TextSizeProvider } from "./src/utils/TextSizeContext";
import "intl-pluralrules";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const App = () => (
  <ThemeProvider>
    <TextSizeProvider>
      <BookmarksProvider>
        <SafeAreaProvider>
          <AppWithProviders />
        </SafeAreaProvider>
      </BookmarksProvider>
    </TextSizeProvider>
  </ThemeProvider>
);

const AppWithProviders = () => {
  const { theme } = useTheme();

  return (
    <I18nextProvider i18n={i18n}>
      <StyledThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
            <Container>
              <StatusBar barStyle="light-content" backgroundColor="#000000" />
              <AppNavigator />
            </Container>
          </SafeAreaView>
        </GestureHandlerRootView>
      </StyledThemeProvider>
    </I18nextProvider>
  );
};

const Container = styled.View`
  flex: 1;
  border-radius: ${screenHeight * 0.02}px;
  background-color: "black";
`;

AppRegistry.registerComponent(appName, () => App);

export default App;
