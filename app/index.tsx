import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-[100vh]">
          <Image
            source={images.rumen}
            className="w-[300px] h-[200px]"
            resizeMode="contain"
          />
          <Text className="text-3xl font-pmedium text-white">
            Bienvenido a Rumen!
          </Text>
          <CustomButton
            title="Accede a tu cuenta"
            handlePress={() => router.push("/sign-in")}
            containerStyles="mt-7"
          />
          <View className="flex-row gap-2 mt-10 items-center">
            <Text className="text-white font-pextralight text-lg">
              Aún no tienes cuenta?
            </Text>
            <Link
              href="/sign-up"
              className="text-light-green font-pbold text-lg"
            >
              Registrate!!
            </Link>
          </View>
        </View>
        <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}
