import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useTheme } from "../utils/ThemeContext";
import SearchScreen from "../screen/SearchScreen";
import Home from "../screen/Home";
import SettingScreen from "../screen/SettingsScreen";
import FoundationIcons from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const initialLayout = { width: Dimensions.get("window").width };

const MainTabNavigator = () => {
  const { theme } = useTheme();
  const [index, setIndex] = React.useState(1); // Default to Home tab
  const [routes] = React.useState([
    { key: "search", title: "Search", icon: "search" },
    { key: "home", title: "Home", icon: "home" },
    { key: "settings", title: "settings", icon: "torso" },
  ]);

  const navigation = useNavigation();

  const renderScene = SceneMap({
    search: () => <SearchScreen navigation={navigation} />,
    home: () => <Home navigation={navigation} />,
    settings: () => <SettingScreen navigation={navigation} />,
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
      indicatorStyle={{ height: 0 }}
      style={{
        backgroundColor: theme.tabBarBackground,
        height: 45,
      }}
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
        swipeEnabled={false}
        animationEnabled={true} // Ensure swipe is enabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainTabNavigator;
