import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../components/InputField";
import Options from "../components/Options";
import Items from "../components/Items";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <InputField navigation={navigation} />
      <Options />
      <Items />
    </SafeAreaView>
  );
}
