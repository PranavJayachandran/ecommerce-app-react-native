import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import CartHeader from "../components/CartHeader";
import CartContent from "../components/CartContent";

export default function Cart() {
  return (
    <SafeAreaView>
      <CartHeader />
      <CartContent />
    </SafeAreaView>
  );
}
