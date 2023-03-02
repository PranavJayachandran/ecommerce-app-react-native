import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import CartItem from "./CartItem";
import CartPrice from "./CartPrice";

export default function CartContent() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <View className="border-b  border-gray-200 flex-row py-4 px-4 items-center justify-between">
            <View className="h-10 w-10 bg-red-100 rounded-full"></View>
            <View>
              <Text className="font-bold -ml-10">Deliver to Martin</Text>
            </View>
            <View className="flex-row gap-2 items-center">
              <Text className="text-teal-500 font-bold">San Diego, Calif</Text>
              <Icon className="text-teal-500" name="chevron-down" size={15} />
            </View>
          </View>
        </View>
        <ScrollView className="h-screen">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartPrice />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
