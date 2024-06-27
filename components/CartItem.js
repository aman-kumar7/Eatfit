import { View, Text, Image, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export function CartItem({ item }) {
  return (
    <View
      className="flex-row justify-between items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mt-3"
      style={{ elevation: 5 }}
    >
      <View>
        <Image source={item.image} style={{ height: 40, width: 40 }} />
        <View>
          <Text className="font-bold">{item.name}</Text>
        </View>
      </View>
      <View className="flex-row space-x-2">
        <TouchableOpacity>
          <View
            className="rounded-full"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Icon.Minus stroke="white" />
          </View>
        </TouchableOpacity>

        <Text className="text-md">2</Text>
        <TouchableOpacity>
          <View
            className="rounded-full"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Icon.Plus stroke="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
