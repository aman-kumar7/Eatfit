import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/HomeScreen";
import { Restaurant } from "../components/Restaurant";

export function HomeNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantScreen" component={Restaurant} />
    </Stack.Navigator>
  );
}
