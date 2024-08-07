import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView, ActivityIndicator, View } from "react-native";

const WebViewScreen = ({ route }) => {
  const { url } = route.params;
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.error("WebView error: ", nativeEvent);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </SafeAreaView>
  );
};

export default WebViewScreen;
