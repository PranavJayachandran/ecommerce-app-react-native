import { View, Text, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function InputField() {
  return (
    <View className="flex-row gap-10 items-center justify-around py-2 px-10">
      <View className="">
        <Icon name="chevron-left" size={25} />
      </View>
      <View className="flex-row ">
        <TextInput
          editable
          maxLength={100}
          singleline
          className="ml-10 px-4 w-60  bg-gray-100 rounded-l-xl py-3"
          placeholder="Search for a product..."
        />
        <View className="flex justify-center items-center bg-gray-100 rounded-r-xl">
          <Icon name="search" className=" pr-4 items-center py-2" size={25} />
        </View>
      </View>
    </View>
  );
}
