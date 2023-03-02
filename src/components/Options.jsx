import { View, Text, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Options() {
  return (
    <ScrollView horizontal>
      <View className="pt-4 px-4 flex-row gap-4">
        <View className="rounded-xl h-14 w-14 bg-red-100"></View>
        <View className="flex flex-row rounded-xl h-14  border border-[1px] border-gray-200">
          <View className="px-2 py-2 flex items-center justify-center ">
            <Icon
              name="lads"
              className="rounded-xl px-4 py-2 bg-gray-200 flex justify-center items-center"
              size={24}
            ></Icon>
          </View>
          <View className="justify-center items-center px-4 ">
            <Text className="font-semibold">Headset</Text>
          </View>
        </View>
        <View className="flex flex-row rounded-xl h-14  border border-[1px] border-gray-200">
          <View className="px-2 py-2 flex items-center justify-center ">
            <Icon
              name="lads"
              className="rounded-xl px-4 py-2 bg-gray-200 flex justify-center items-center"
              size={24}
            ></Icon>
          </View>
          <View className="justify-center items-center px-4 ">
            <Text className="font-semibold">Headset</Text>
          </View>
        </View>
        <View className="flex flex-row rounded-xl h-14  border border-[1px] border-gray-200">
          <View className="px-2 py-2 flex items-center justify-center ">
            <Icon
              name="lads"
              className="rounded-xl px-4 py-2 bg-gray-200 flex justify-center items-center"
              size={24}
            ></Icon>
          </View>
          <View className="justify-center items-center px-4 ">
            <Text className="font-semibold">Headset</Text>
          </View>
        </View>
        <View className="flex flex-row rounded-xl h-14  border border-[1px] border-gray-200">
          <View className="px-2 py-2 flex items-center justify-center ">
            <Icon
              name="lads"
              className="rounded-xl px-4 py-2 bg-gray-200 flex justify-center items-center"
              size={24}
            ></Icon>
          </View>
          <View className="justify-center items-center px-4 ">
            <Text className="font-semibold">Headset</Text>
          </View>
        </View>
        <View className="flex flex-row rounded-xl h-14  border border-[1px] border-gray-200">
          <View className="px-2 py-2 flex items-center justify-center ">
            <Icon
              name="lads"
              className="rounded-xl px-4 py-2 bg-gray-200 flex justify-center items-center"
              size={24}
            ></Icon>
          </View>
          <View className="justify-center items-center px-4 ">
            <Text className="font-semibold">Headset</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
