import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { formatCurrency } from "../../utils/assets";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const product = {
  _id: "65989763f38dc44185591726",
  name: "Brisket",
  description: "350gr laminado y jugoso!",
  price: 15750,
  image:
    "https://www.deadbirdbbq.com/cdn/shop/articles/Brisket_9efad525-42b7-4bef-9de8-e558e86d4a9e.jpg?v=1640336095&width=1100",
  category: "Carnes Ahumadas",
  inStock: true,
  isDeleted: false,
  createdAt: "2024-01-05T23:57:23.223Z",
  updatedAt: "2024-01-05T23:57:23.223Z",
  __v: 0,
};

const SingleCard = () => {
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <SafeAreaView>
      <View className="bg-black items-center justify-center h-full">
        <Image
          source={{ uri: product.image }}
          className="w-[300px] h-[300px] rounded-lg"
          resizeMode="cover"
        />
        <View className="w-[80%]">
          <View className="justify-between my-5 flex-row">
            <View className="mb-5">
              <Text className="font-bold text-white">{product.name}</Text>
              <Text className=" text-white">{product.description}</Text>
            </View>
            <Text className="font-bold text-white">
              {formatCurrency(product.price)}
            </Text>
          </View>
        </View>
        <View className="flex-row mb-5 justify-center items-center border-[0.5px] bg-gray-800 border-white px-5 py-2 rounded-full">
          <TouchableOpacity
            onPress={() => {
              if (productQuantity > 1) {
                setProductQuantity(productQuantity - 1);
              } else {
                setProductQuantity(1);
              }
            }}
          >
            <Image source={icons.minus} className="w-10 h-10" />
          </TouchableOpacity>
          <Text className="text-white font-pbold mx-7 text-2xl">
            {productQuantity}
          </Text>
          <TouchableOpacity
            onPress={() => setProductQuantity(productQuantity + 1)}
          >
            <Image source={icons.plus} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        <CustomButton
          title="Añadir al Pedido"
          containerStyles="w-[90%]"
          handlePress={() => {
            router.push("/(tabs)/shopping");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleCard;
