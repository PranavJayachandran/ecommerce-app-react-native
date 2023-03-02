import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";

export default function ItemsSlider({ name, data }) {
  return (
    <View className="mt-10">
      <View className="pr-4 items-center flex-row justify-between">
        <View>
          <Text className="font-semibold text-xl">{name}</Text>
        </View>
        <View>
          <Text className="text-gray-400 font-semibold">See all</Text>
        </View>
      </View>
      <ScrollView horizontal>
        <View className="pt-4 flex-row gap-4 ">
          {data.map((item, index) => (
            <View className="w-44 ">
              <View className="h-44 rounded-xl bg-blue-200"></View>
              <View className="mt-2 flex-row justify-between">
                <Text className="font-semibold">{item.name}</Text>
                <Text className="font-semibold">$ {item.price}</Text>
              </View>
              <View>
                <Text className="mt-1 text-gray-400 font-semibold">
                  {item.desc}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
