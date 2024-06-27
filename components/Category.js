import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import { categories } from '../constants';

export function Category(){
   return <View>
    <ScrollView horizontal 
    showHorizontalScrollIndicator={false}
    className="overflow-visible"
    contentContainerStyle={{
        paddingHorizontal: 15
    }}>
    <View className="flex-row items-center">
    {categories.map((category) => (
        <View key={category.id} className="flex justify-center items-center mr-3">
            <TouchableOpacity className="p-1shadow">
                <Image style={{ width: 45, height: 45}} source={category.image}/>
                <Text className="text-center">{category.name}</Text>

            </TouchableOpacity>
        </View>
    ))}
    </View>
    </ScrollView>
   
   
   </View>;
}