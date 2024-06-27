import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { About } from "../screens/AboutScreen";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { HomeNavigation } from "./HomeNavigation";
import { CartScreen } from "../screens/CartScreen";

export function Navigation() {
  const Tab = createBottomTabNavigator();
  return(
  <Tab.Navigator
    initialRouteName="HomeNavigation"
    screenOptions={{
      tabBarActiveTintColor: themeColors.bgColor(1),
    }}
  >
    <Tab.Screen
      name="Home Navigation"
      component={HomeNavigation}
      options={{
        headerShown: false,
        tabBarLabel: "My Home",
        tabBarIcon: ({ color }) => (
          <Icon.Home width={20} height={20} stroke={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={About}
      options={{
        tabBarLabel: "My Profile",
        tabBarIcon: ({ color }) => (
          <Icon.User width={20} height={20} stroke={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        headerShown: false,
        tabBarLabel: "My Cart",
        tabBarIcon: ({ color }) => (
          <Icon.ShoppingCart width={20} height={20} stroke={color} />
        ),
      }}
    />
  </Tab.Navigator>);
}
