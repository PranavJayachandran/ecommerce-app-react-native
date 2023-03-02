import { View, Text } from "react-native";
import React from "react";

export default function Banner() {
  return (
    <View className="mt-40">
      <View className="flex py-10 justify-end items-center h-80  mx-10 bg-blue-400">
        <View className="bg-red-400 px-4 py-2 rounded-xl">
          <Text className="text-lg">Login </Text>
        </View>
      </View>
    </View>
  );
}
