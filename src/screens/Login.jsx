import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <Header />
      <Banner />
    </SafeAreaView>
  );
}
