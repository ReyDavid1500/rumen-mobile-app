import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Payment = () => {
  return (
    <SafeAreaView>
      <View className="h-full items-center justify-center">
        <Text className="text-2xl font-psemibold">Payment</Text>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
