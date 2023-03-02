import { View, Text } from "react-native";
import React from "react";

export default function CartPrice() {
  return (
    <View className="pb-36 pt-10">
      <View className="gap-4">
        <View className="flex-row justify-between px-4 ">
          <Text className="text-gray-500 text-lg font-semibold">Subtotal:</Text>
          <Text className="text-black text-lg font-semibold"> $80.00</Text>
        </View>
        <View className="flex-row justify-between px-4 ">
          <Text className="text-gray-500 text-lg font-semibold">
            Delivery Fee:
          </Text>
          <Text className="text-black text-lg font-semibold"> $5.00</Text>
        </View>
        <View className="flex-row justify-between px-4 border-b pb-4 border-gray-400">
          <Text className="text-gray-500 text-lg font-semibold">Discount</Text>
          <Text className="text-black text-lg font-semibold">50%</Text>
        </View>
        <View className="flex-row justify-between px-4 ">
          <Text className="text-gray-500 text-lg font-semibold">Total:</Text>
          <Text className="text-teal-400 text-2xl font-bold">$406.50</Text>
        </View>

        <View className=" px-4 ">
          <Text className="bg-teal-400 text-center py-4 rounded-xl text-white text-lg">
            Continue
          </Text>
        </View>
      </View>
    </View>
  );
}
