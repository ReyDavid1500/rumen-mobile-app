import { SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import mockData from "../../mockData/products.json";
import { StatusBar } from "expo-status-bar";

const products = mockData.data;

const categories = products?.map((product) => product.category);
const categoryArray = [...new Set(categories)];

const Shopping = () => {
  const groupedProducts = categoryArray.map((category) => {
    return {
      title: category,
      data: products.filter((product) => product.category === category),
    };
  });

  console.log(groupedProducts);

  return (
    <SafeAreaView className="bg-black h-full pt-4">
      <View className="items-center">
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={groupedProducts}
          data={products}
          renderSectionHeader={({ section: { title } }) => {
            return (
              <Text className="mb-8 items-center font-bold font-psemibold text-center text-2xl text-white">
                {title}
              </Text>
            );
          }}
          renderItem={({ item }) => {
            return (
              <Card
                description={item.description}
                image={item.image}
                name={item.name}
                price={item.price}
                handlePress={() => {}}
              />
            );
          }}
          keyExtractor={(product) => product._id}
        />
      </View>
      <StatusBar backgroundColor="black" style="light" />
    </SafeAreaView>
  );
};

export default Shopping;
