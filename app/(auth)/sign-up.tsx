import {
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    validatePassword: "",
  });

  const submit = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="bg-black h-full">
          <ScrollView>
            <View className="w-full justify-center h-full px-4 my-4">
              <Image
                source={images.rumen}
                resizeMode="contain"
                className="w-[100px] h-[50px]"
              />
              <Text className="text-lg mt-2 text-white font-psemibold">
                Registrate en Rumen!
              </Text>
              <FormField
                title="Nombre de Usuario"
                value={form.username}
                handleChangeText={(e) => setForm({ ...form, username: e })}
                otherStyles="mt-4"
                keyBoardType="email-address"
              />
              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-4"
                keyBoardType="email-address"
              />
              <FormField
                title="Contraseña"
                value={form.password}
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles="mt-4"
              />
              <FormField
                title="Valida tu Contraseña"
                value={form.validatePassword}
                handleChangeText={(e) =>
                  setForm({ ...form, validatePassword: e })
                }
                otherStyles="mt-4"
              />
              <CustomButton
                title="Registrate!"
                handlePress={submit}
                containerStyles="mt-4"
              />
              <View className="justify-center flex-row gap-2 pt-5">
                <Text className="text-gray-100 text-md font-pregular">
                  Ya estás registrado?
                </Text>
                <Link
                  href="/sign-in"
                  className="text-light-green text-md font-psemibold"
                >
                  Ingresa Aquí
                </Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
