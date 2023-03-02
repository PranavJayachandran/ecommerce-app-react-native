import { View, Text, StatusBar } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function CartItem() {
  return (
    <View className="px-4 py-6 flex-row gap-4 border-b border-gray-200">
      <View className="rounded-xl h-28 w-28 bg-violet-100"></View>
      <View className="flex-col gap-1">
        <Text className="font-bold text-lg">Sony WH/100XM</Text>
        <Text className="w-60 text-gray-400">
          The intuitive and intelligent WH-1000XM$...
        </Text>
        <View className="flex-row ">
          <Text className="text-lg font-bold mr-16">$128</Text>
          <View className="flex-row gap-3 justify-center items-center">
            <View className="flex border-teal-500 border justify-center items-center rounded-lg w-7 h-7">
              <Icon className="text-teal-500" name="minus" size={15} />
            </View>
            <Text className="font-bold">1</Text>
            <View className="flex border-teal-500 border justify-center bg-teal-400 items-center rounded-lg w-7 h-7">
              <Icon className="text-white" name="plus" size={15} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
