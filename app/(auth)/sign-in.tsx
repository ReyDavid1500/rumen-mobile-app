import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = () => {};

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.rumen}
            resizeMode="contain"
            className="w-[180px] h-[80px]"
          />
          <Text className="text-2xl mt-10 text-white font-psemibold">
            Ingresa a tu cuenta en Rumen!
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyBoardType="email-address"
          />
          <FormField
            title="Contraseña"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Accede a tu cuenta!"
            handlePress={submit}
            containerStyles="mt-10"
          />
          <View className="justify-center flex-row gap-2 pt-5">
            <Text className="text-gray-100 text-lg font-pregular">
              Aún no te registras?
            </Text>
            <Link
              href="/sign-up"
              className="text-light-green text-lg font-psemibold"
            >
              Registrate Aquí
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
