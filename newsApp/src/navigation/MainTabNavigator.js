import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useTheme } from "../utils/ThemeContext";
import SearchScreen from "../screen/SearchScreen";
import WebViewScreen from "../screen/WebViewScreen";
import Home from "../screen/Home";
import FoundationIcons from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const initialLayout = { width: Dimensions.get("window").width };

const MainTabNavigator = () => {
  const { theme } = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "search", title: "Search", icon: "search" },
    { key: "Home", title: "Home", icon: "home" },
    { key: "webview", title: "WebView", icon: "torso" },
  ]);

  const renderScene = SceneMap({
    Home: Home,
    search: SearchScreen,
    webview: WebViewScreen,
  });

  const renderIcon = ({ route, focused }) => {
    const color = focused ? theme.active : theme.inactive;

    if (route.key === "search") {
      return <MaterialIcons name={route.icon} size={25} color={color} />;
    }

    return <FoundationIcons name={route.icon} size={25} color={color} />;
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderIcon={renderIcon}
      indicatorStyle={{ height: 0 }} // Remove the indicator
      style={{
        backgroundColor: theme.tabBarBackground,
        height: 45,
      }} // Adjust height
      activeColor={theme.active}
      inactiveColor={theme.inactive}
      renderLabel={() => null}
    />
  );

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        tabBarPosition="bottom"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabStyle: {
    borderLeftWidth: 1,
    borderColor: "white",
  },
});

export default MainTabNavigator;
