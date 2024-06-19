import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { formatCurrency } from "../../utils/assets";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Product } from "../(tabs)/shopping";
import { BASE_URL } from "@env";

const SingleCard = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useLocalSearchParams();

  const getProduct = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products/id/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <SafeAreaView className="h-full bg-black">
      {isLoading ? (
        <SafeAreaView className="items-center justify-center h-full">
          <ActivityIndicator
            size="large"
            color="#F77F00"
            className="bg-black h-full w-full"
          />
        </SafeAreaView>
      ) : (
        <View className="bg-black items-center justify-center h-full">
          <Image
            source={{ uri: product?.image }}
            className="w-[300px] h-[300px] rounded-lg"
            resizeMode="cover"
          />
          <View className="w-[80%]">
            <View className="justify-between my-5">
              <View className="mb-5 gap-3">
                <Text className="font-bold text-white text-lg">
                  {product?.name}
                </Text>
                <Text className=" text-white">{product?.description}</Text>
              </View>
              <Text className="font-medium text-white text-xl self-end">
                {formatCurrency(product?.price as number)}
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
              Alert.alert("Listo!", "Producto añadido a tu pedido", [
                { text: "Continuar comprando", style: "cancel" },
              ]);
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SingleCard;
