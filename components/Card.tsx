import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { formatCurrency } from "../utils/assets";
import CustomButton from "./CustomButton";

type CardProps = {
  name: string;
  image: string;
  description: string;
  price: number;
  handlePress: () => void;
};

const Card: React.FC<CardProps> = ({
  name,
  image,
  description,
  price,
  handlePress,
}) => {
  return (
    <View className="border-2 border-gray-400 rounded-lg overflow-hidden bg-white h-[430px] w-[330px] mb-5">
      <Image
        className="w-full h-[70%] object-cover mb-2"
        source={{ uri: image }}
        resizeMode="cover"
      />
      <View>
        <View className="flex-row justify-between mb-2 px-2">
          <View>
            <Text className="font-bold">{name}</Text>
            <Text>{description}</Text>
          </View>
          <View>
            <Text className="font-bold">{formatCurrency(price)}/</Text>
            <Text>Unidad</Text>
          </View>
        </View>
        <CustomButton
          handlePress={handlePress}
          title="Agregar al pedido!"
          containerStyles="w-[90%] self-center"
        />
      </View>
    </View>
  );
};

export default Card;
