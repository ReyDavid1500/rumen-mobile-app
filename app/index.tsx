import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="justify-center items-center h-[100vh]">
          <Text className="text-3xl font-semibold">Bienvenido a Rumen</Text>
          <Link href="/shopping" style={{ color: "blue" }}>
            Go to Shopping
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
