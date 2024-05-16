import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { formatCurrency } from "../utils/assets";

type CartItemProps = {
  image: string;
  name: string;
  price: number;
};

const CartItem = ({ image, name, price }: CartItemProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View>
      <View className="flex-row justify-between">
        <View className="flex-row gap-5">
          <Image
            source={{ uri: image }}
            className="w-[60px] h-[60px] rounded-lg"
            resizeMode="cover"
          />
          <Text className="mb-4 text-xl text-white font-pmedium">{name}</Text>
        </View>
        <View className="flex-row mb-5 justify-center items-center border-[0.5px] border-white rounded-full px-4 py-2 bg-gray-800">
          <TouchableOpacity
            onPress={() => {
              if (quantity > 0) setQuantity(quantity - 1);
              setQuantity(1);
            }}
          >
            <Image source={icons.minus} className="w-5 h-5" />
          </TouchableOpacity>
          <Text className="text-white font-pbold mx-7 text-lg">{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Image source={icons.plus} className="w-5 h-5" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row justify-around my-4 pb-3 border-b-2 border-b-gray-600">
        <View className="flex-row">
          <Text className="text-white">{formatCurrency(price)}/</Text>
          <Text className="text-white">Unidad</Text>
        </View>
        <View className="flex-row gap-5">
          <TouchableOpacity>
            <Image source={icons.whiteTrash} className="w-6 h-6" />
          </TouchableOpacity>
          <Text className="text-white">{formatCurrency(quantity * price)}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
