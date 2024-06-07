import React from "react";
import { Stack } from "expo-router";

const ShoppingLayout = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="singleCard" options={{ headerShown: false }} /> */}
      <Stack.Screen name="payment" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ShoppingLayout;
