import {
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { router, usePathname } from "expo-router";

export type Product = {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

const Shopping = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await fetch("https://rumen-server.onrender.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const allProductsName = "Todos!";

  const categories = products?.map((product) => product.category);
  const categoryArray = [allProductsName, ...new Set(categories)];

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

  return (
    <SafeAreaView className="bg-black h-full">
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoryArray.map((category, index) => (
            <View key={index}>
              <TouchableOpacity
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
            </View>
          ))}
        </ScrollView>
      </View>
      <View className="ml-3">
        {isLoading ? (
          <SafeAreaView className="items-center justify-center h-full">
            <ActivityIndicator size="large" color="#F77F00" className="mb-14" />
          </SafeAreaView>
        ) : (
          <SectionList
            stickySectionHeadersEnabled={true}
            sections={groupedProducts.filter(
              (group) =>
                group.title === selectedCategory ||
                selectedCategory === allProductsName
            )}
            renderSectionHeader={({ section: { title } }) => {
              return (
                <Text className="mb-5 font-bold font-psemibold text-center text-2xl text-white bg-gray-950 py-1">
                  {title}
                </Text>
              );
            }}
            data={products}
            keyExtractor={(item, index) => `${item._id}-${index}`}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    router.push({
                      pathname: `/singleProduct/${item._id}`,
                    });
                  }}
                >
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
        )}
      </View>
      <StatusBar backgroundColor="black" style="light" />
    </SafeAreaView>
  );
};

export default Shopping;
