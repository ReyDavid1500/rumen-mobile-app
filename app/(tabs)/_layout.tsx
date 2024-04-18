import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="shopping" options={{ headerShown: false }} />
        <Tabs.Screen name="cart" options={{ headerShown: false }} />
        <Tabs.Screen name="account" options={{ headerShown: false }} />
      </Tabs>
    </>
  );
};

export default TabsLayout;
