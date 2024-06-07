import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { formatCurrency } from "../../utils/assets";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CartItem from "../../components/CartItem";

const shoppingCart = {
  id: "1",
  products: [
    {
      id: "2",
      name: "Brisket",
      price: 15750,
      quantity: 1,
      image:
        "https://www.deadbirdbbq.com/cdn/shop/articles/Brisket_9efad525-42b7-4bef-9de8-e558e86d4a9e.jpg?v=1640336095&width=1100",
    },
    {
      id: "3",
      name: "Pulled Pork",
      price: 12500,
      quantity: 1,
      image:
        "https://howtobbqright.com/wp-content/uploads/2020/04/IMG_5341.jpg",
    },
  ],
  subtotal: 28250,
  shipping: 3000,
  total: 31250,
};

const data = shoppingCart.products;

const Cart = () => {
  return (
    <SafeAreaView className="bg-black h-full px-5">
      <View className="h-full pb-5">
        <Text className="text-center text-white text-2xl font-psemibold my-6">
          Tu pedido!
        </Text>
        <FlatList
          data={data}
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => (
            <CartItem image={item.image} name={item.name} price={item.price} />
          )}
        />
        <View className="px-3 mb-3">
          <Text className="text-center text-white text-2xl font-psemibold my-3">
            Total Estimado
          </Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-white text-xl font-pregular">Subtotal:</Text>
            <Text className="text-white text-xl font-pregular">
              {formatCurrency(shoppingCart.subtotal)}
            </Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-white text-lg font-plight">Despacho:</Text>
            <Text className="text-white text-lg font-plight">
              {formatCurrency(shoppingCart.shipping)}
            </Text>
          </View>
          <Text className="text-white text-right text-2xl font-psemibold">
            {formatCurrency(shoppingCart.total)}
          </Text>
        </View>
        <CustomButton
          title="Haz tu Pedido!"
          handlePress={() => {
            router.push("/(shopping)/payment");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
