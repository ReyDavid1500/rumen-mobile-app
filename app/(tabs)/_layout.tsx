import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

type TabProps = {
  icon: ImageSourcePropType | undefined;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabProps) => {
  return (
    <View className="items-center justify-center gap-2 mt-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
      />
      <Text
        className={`${focused ? "font-pbold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FCBF49",
          tabBarInactiveTintColor: "#000",
          tabBarStyle: {
            backgroundColor: "#00A896",
            borderTopWidth: 1,
            borderTopColor: "#028090",
            height: 80,
            paddingHorizontal: 15,
          },
        }}
      >
        <Tabs.Screen
          name="shopping"
          options={{
            title: "Shopping",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Productos"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Pedido",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.order}
                color={color}
                name="Pedido"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Cuenta",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.account}
                color={color}
                name="Cuenta "
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
