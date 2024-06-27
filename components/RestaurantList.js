import {
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet 
} from "react-native";
import * as Icon from "react-native-feather";
import { restaurants } from "../constants";
import { useNavigation } from "@react-navigation/native";

export function RestaurantList() {
  const navigation = useNavigation();
  return (
    <View className="px-2">
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('RestaurantScreen', item)}>
              <View style={{elevation: 5}}  className="bg-white rounded-3xl mb-10 mx-2">
                <Image
                  className="rounded-t-3xl h-36 w-[100%]"
                  source={item.image}
                />
               
                <View className="flex-row justify-between p-3">
                  <View>
                    <Text className="text-xl font-bold">{item.name}</Text>
                    <Text className="text-gray-500">{item.category}</Text>
                  </View>
                  <View>
                    <View className="flex-row inline-flex items-center justify-center space-x-1 rounded-md px-3 bg-green-500">
                      <Text className="text-white">{item.rating}</Text>
                      <Icon.Star width="12" height="12" stroke="white"/>
                    </View>
                    <View className="mt-2 text-center">
                      <Text>{item.reviews} reviews</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
}
