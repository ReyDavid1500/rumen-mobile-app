import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { formatCurrency } from "../../utils/assets";

const shoppingCart = {
  id: 1,
  products: [
    {
      id: 1,
      name: "Brisket",
      price: 15750,
      quantity: 1,
    },
    {
      id: 2,
      name: "Pulled Pork",
      price: 12500,
      quantity: 1,
    },
  ],
  subtotal: 28250,
  shipping: 3000,
  total: 31250,
};

const Cart = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View>
          <Text className="text-center text-white text-2xl font-psemibold my-6">
            Tu pedido!
          </Text>
          <View>
            {shoppingCart.products.map((item) => {
              return (
                <View key={item.id} className="px-3">
                  <Text className="mb-4 text-xl text-white font-pmedium">
                    {item.name}
                  </Text>
                  <View className="flex-row justify-around mb-4 pb-3 border-b-2 border-b-gray-600">
                    <View className="items-center">
                      <TextInput
                        className="text-white border-2 border-white px-4 py-1 rounded-lg mb-1"
                        keyboardType="numeric"
                        defaultValue={item.quantity.toString()}
                      />
                      <Text className="text-white">Unidad</Text>
                    </View>
                    <View className="">
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
        <View className="px-3">
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
