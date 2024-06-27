import { Button, Text, TouchableOpacity, View } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export function ViewCart() {
    const navigation = useNavigation();
  return (
    <View className="absolute bottom-2 z-50 w-full">
      <View
        className="flex-row justify-between rounded-md items-center p-3 bg-slate-300 bg-white mx-4"
        style={{ elevation: 5 }}
      >
        <View>
          <Text>2 items added</Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <Button
            className="rounded-sm  text-white"
            onPress={() => navigation.navigate('Cart')}
            color={themeColors.bgColor(1)}
            style={{ backgroundColor: "plum" }}
            title="View Cart"
          />
          <TouchableOpacity>
            <Icon.Trash2 stroke="red" width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
