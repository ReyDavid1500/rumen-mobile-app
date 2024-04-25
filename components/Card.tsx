import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { formatCurrency } from "../utils/assets";

type CardProps = {
  name: string;
  image: string;
  description: string;
  price: number;
};

const Card: React.FC<CardProps> = ({ name, image, description, price }) => {
  return (
    <View className="bg-black overflow-hidden mb-5 flex-row max-w-[95%]">
      <Image
        className="w-[100px] h-[100px] mr-3 border-2 border-gray-800 rounded-lg"
        source={{ uri: image }}
        resizeMode="cover"
      />
      <View>
        <View className="justify-between mb-2">
          <View className="mb-5">
            <Text className="font-bold text-white">{name}</Text>
            <Text className=" text-white">{description}</Text>
          </View>
          <Text className="font-bold text-white">{formatCurrency(price)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
