import { ScrollView, Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FoodItem } from "./FoodItem";
import {ViewCart} from './ViewCart';

export function Restaurant() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;

  return (
    <View className="bg-white">
      <ViewCart />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full"
          >
            <Icon.ArrowLeft strokeWidth={2} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          className="rounded-t-lg bg-white pt-6 -mt-12"
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
          </View>
          <View className="flex-row items-center space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <Icon.Star
                className="text-green-700"
                width={12}
                stroke="yellow"
              />
              <Text className="text-xs text-gray-700">
                {item.rating} ({item.review} reviews) {item.category}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width="15" height="15" />
              <Text className="text-gray-700 text-xs">
                Nearby {item.address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-700 text-xs">{item.description}</Text>
        </View>
        <View>
            <Text className="font-light p-4 text-2xl">What's on the Menu?</Text>
            <ScrollView className="pt-4"> 
                <FlatList data={item.dishes} renderItem={({item}) => {return (<FoodItem item={item} />)}} />
            </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
