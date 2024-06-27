import { Text, SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export function FoodItem({ item }) {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl mb-2 mx-2 space-x-3 mt-1" style={{ elevation: 5 }}>
      <Image
        className="rounded-3xl"
        source={item.image}
        style={{ height: 100, width: 100 }}
      />

      <View className="flex flex-1 space-y-3">
        <View>
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between items-center">
            <Text className="text-gray-700 text-lg font-bold">
               ${item.price}
            </Text>
            <View className="flex-row space-x-2">
                <TouchableOpacity>
                <View className="rounded-full" style={{backgroundColor: themeColors.bgColor(1)}}>
                    <Icon.Minus stroke="white"/>
                </View>
                </TouchableOpacity>
                
                <Text className="text-md">2</Text>
                <TouchableOpacity>
                <View className="rounded-full" style={{backgroundColor: themeColors.bgColor(1)}}>
                    <Icon.Plus stroke="white"/>
                </View>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
}
