import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { formatCurrency } from "../../utils/assets";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const shoppingCart = {
  id: 1,
  products: [
    {
      id: 1,
      name: "Brisket",
      price: 15750,
      quantity: 1,
      image:
        "https://www.deadbirdbbq.com/cdn/shop/articles/Brisket_9efad525-42b7-4bef-9de8-e558e86d4a9e.jpg?v=1640336095&width=1100",
    },
    {
      id: 2,
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

const Cart = () => {
  return (
    <SafeAreaView className="bg-black h-full px-5">
      <ScrollView>
        <View>
          <Text className="text-center text-white text-2xl font-psemibold my-6">
            Tu pedido!
          </Text>
          <View>
            {shoppingCart.products.map((item) => {
              return (
                <View key={item.id}>
                  <View className="flex-row justify-between">
                    <View className="flex-row gap-5">
                      <Image
                        source={{ uri: item.image }}
                        className="w-[60px] h-[60px] rounded-lg"
                        resizeMode="cover"
                      />
                      <Text className="mb-4 text-xl text-white font-pmedium">
                        {item.name}
                      </Text>
                    </View>
                    <View className="flex-row mb-5 justify-center items-center border-[0.5px] border-white rounded-full px-4 py-2 bg-gray-800">
                      <TouchableOpacity>
                        <Image source={icons.minus} className="w-5 h-5" />
                      </TouchableOpacity>
                      <Text className="text-white font-pbold mx-7 text-lg">
                        1
                      </Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} className="w-5 h-5" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="flex-row justify-around my-4 pb-3 border-b-2 border-b-gray-600">
                    <View className="flex-row">
                      <Text className="text-white">
                        {formatCurrency(item.price)}/
                      </Text>
                      <Text className="text-white">Unidad</Text>
                    </View>
                    <View className="flex-row gap-5">
                      <TouchableOpacity>
                        <Image source={icons.whiteTrash} className="w-6 h-6" />
                      </TouchableOpacity>
                      <Text className="text-white">
                        {formatCurrency(item.quantity * item.price)}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View className="px-3 mb-10">
          <Text className="text-center text-white text-2xl font-psemibold my-6">
            Total Estimado
          </Text>
          <View className="flex-row justify-between mb-4">
            <Text className="text-white text-xl font-pregular">Subtotal:</Text>
            <Text className="text-white text-xl font-pregular">
              {formatCurrency(shoppingCart.subtotal)}
            </Text>
          </View>
          <View className="flex-row justify-between mb-4">
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
