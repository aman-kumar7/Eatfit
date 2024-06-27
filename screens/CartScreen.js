import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Button
} from "react-native";
import { restaurants } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartItem } from "../components/CartItem";

export function CartScreen() {
  const restaurant = restaurants[0];
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="relative flex-1 pb-12">
        <View className="flex-row w-full items-center py-4 shadow-sm">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: themeColors.bgColor(1), flex: 0 }}
            className="rounded-full p-1 shadow ml-2"
          >
            <Icon.ArrowLeft stroke="white" />
          </TouchableOpacity>
          <View className="flex justify-center" style={{ flex: 1 }}>
            <Text className="text-center font-bold text-xl">Your Cart</Text>
            <Text className="text-center text-gray-700">{restaurant.name}</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className="flex-row p-4 space-x-2 items-center"
        >
          <Icon.Truck stroke={themeColors.bgColor(0.2)} height={24} />
          <Text className="font-bold">Delivering in 20-30 mins!</Text>
        </View>
        <ScrollView
            
            className="flex-1 pb-40"
          >
            <FlatList
              data={restaurant.dishes}
              renderItem={({ item }) => {
                return <CartItem item={item} />;
              }}
            />
          </ScrollView>
        <View className="flex-row w-full bg-white items-center justify-between rounded-t-3xl bottom-0 p-3 border-gray-300 absolute z-index-30" style={{elevation: 5}} >
            <Text>Total: $250</Text>
          <Button title="Place Order" color={themeColors.bgColor(1)} />
        </View>
      </View>
    </SafeAreaView>
  );
}
