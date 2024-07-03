import React from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

const WebViewScreen = ({ route }) => {
  // Ensure route and route.params are defined before accessing
  const url = "https://example.com"; // Default URL or handle accordingly

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
};

export default WebViewScreen;
