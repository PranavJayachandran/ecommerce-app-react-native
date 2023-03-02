import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Header() {
  return (
    <View className="pt-4 items-center justify-between px-8 flex-row">
      <View>
        <Icon name="bell" size={25} />
      </View>
      <View>
        <Text className="text-2xl">Ecommerce</Text>
      </View>
      <View>
        <Icon name="bell" size={25} />
      </View>
    </View>
  );
}
