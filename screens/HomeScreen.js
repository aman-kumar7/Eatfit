import {ScrollView, Text, TextInput, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { Category} from '../components/Category';
import { RestaurantList} from '../components/RestaurantList';

export function Home() {
    return <SafeAreaView className="bg-white mb-28">
        <View className="flex-row items-center justify-between px-4 mb-2 mt-2">
            <View className="flex-row items-center">
            <Icon.MapPin height="24" width="24" stroke="gray"/>
            <Text className="text-gray-600 text-xl ml-1">Home</Text>
            </View>
            <View className="rounded-full p-2" style={{backgroundColor: themeColors.bgColor(1)}}>
               <Icon.Sliders height="20" width="20" stroke="white"/>
            </View>
        </View>
        <View className="px-4 mb-3 flex-row items-center">
            <View className="flex-row flex-1 items-center border rounded-full p-2 border-gray-300">
                <Icon.Search height="24" width="24" stroke="gray"/>
                <TextInput placeholder="Search" className="ml-2 flex-1"/>
                <View className="flex-row items-center border-l-2 pl-2 border-l-gray-300">
                    <Icon.Mic height="24" width="24" stroke="gray" />
                </View>
            </View>
        </View>
        {/* main view */}
        <ScrollView contentContainerStyle={{
            paddingBottom: 20
        }}>
            <View className="mb-5"><Category /></View>
            <RestaurantList />
        </ScrollView>
    </SafeAreaView>
}