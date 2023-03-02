import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function CartHeader() {
  return (
    <SafeAreaView>
      <View className=" border-b pb-4 border-gray-200 flex-row justify-between px-4 pt-5">
        <View className="">
          <Icon name="chevron-left" size={25} />
        </View>
        <View>
          <Text className="text-xl font-bold">My Cart</Text>
        </View>
        <View className="">
          <Icon name="chevron-right" size={25} />
        </View>
      </View>
    </SafeAreaView>
  );
}
