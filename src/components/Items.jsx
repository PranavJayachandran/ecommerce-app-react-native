import { View, Text } from "react-native";
import React from "react";
import ItemsSlider from "./ItemsSlider";

export default function Items() {
  hot_sales = [
    {
      name: "Macbook Air MI",
      price: "150",
      desc: "Slim laptop with over the top performance",
    },
    {
      name: "Macbook Air MI",
      price: "150",
      desc: "Slim laptop with over the top performance",
    },
    {
      name: "Macbook Air MI",
      price: "150",
      desc: "Slim laptop with over the top performance",
    },

    {
      name: "Macbook Air MI",
      price: "150",
      desc: "Slim laptop with over the top performance",
    },
    {
      name: "Macbook Air MI",
      price: "150",
      desc: "Slim laptop with over the top performance",
    },

    {
      name: "Macbook Air MI",
      price: "150",
      desc: "Slim laptop with over the top performance",
    },
  ];
  recently_viewed = [
    {
      name: "Sony WH/100XM",
      price: "128",
      desc: "Te intuitive amd intelligent WH-100XM4",
    },
    {
      name: "Sony WH/100XM",
      price: "128",
      desc: "Te intuitive amd intelligent WH-100XM4",
    },
    {
      name: "Sony WH/100XM",
      price: "128",
      desc: "Te intuitive amd intelligent WH-100XM4",
    },
    {
      name: "Sony WH/100XM",
      price: "128",
      desc: "Te intuitive amd intelligent WH-100XM4",
    },
    {
      name: "Sony WH/100XM",
      price: "128",
      desc: "Te intuitive amd intelligent WH-100XM4",
    },
    {
      name: "Sony WH/100XM",
      price: "128",
      desc: "Te intuitive amd intelligent WH-100XM4",
    },
    {
      name: "Sony WH/100XM",
      price: "128",
      desc: "Te intuitive amd intelligent WH-100XM4",
    },
    {
      name: "Sony WH/100XM",
      price: "128",
      desc: "Te intuitive amd intelligent WH-100XM4",
    },
  ];
  return (
    <View className="pl-4 ">
      <ItemsSlider data={hot_sales} name="Hot Sales" />
      <ItemsSlider data={recently_viewed} name="Recently Viewed" />
    </View>
  );
}
