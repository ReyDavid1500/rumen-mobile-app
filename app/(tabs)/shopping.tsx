import {
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import mockData from "../../mockData/products.json";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { router } from "expo-router";

const products = mockData.data;

const allProductsName = "Todos!";

const categories = products?.map((product) => product.category);
const categoryArray = [allProductsName, ...new Set(categories)];

const Shopping = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    allProductsName
  );

  const groupedProducts = categoryArray
    .filter((category) => category !== allProductsName)
    .map((category) => ({
      title: category,
      data: products.filter((product) => product.category === category),
    }));

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSelectedProduct = () => {
    router.push("/(shopping)/singleCard");
  };

  return (
    <SafeAreaView className="bg-black h-full">
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoryArray.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => selectCategory(category)}
              className={`pt-4 pb-1 mb-3 px-2 border-b ${
                selectedCategory === category
                  ? "border-b-4 border-rumen-orange"
                  : ""
              }`}
            >
              <Text
                className={`text-white text-md font-psemibold ${
                  selectedCategory === category ? "font-pextrabold" : ""
                }`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View className="ml-3">
        <SectionList
          stickySectionHeadersEnabled={true}
          sections={groupedProducts.filter(
            (group) =>
              group.title === selectedCategory ||
              selectedCategory === allProductsName
          )}
          data={products}
          renderSectionHeader={({ section: { title } }) => {
            return (
              <Text className="mb-5 font-bold font-psemibold text-center text-2xl text-white bg-gray-950 py-1">
                {title}
              </Text>
            );
          }}
          keyExtractor={(product) => product._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={handleSelectedProduct}>
                <Card
                  description={item.description}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <StatusBar backgroundColor="black" style="light" />
    </SafeAreaView>
  );
};

export default Shopping;
