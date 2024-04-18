import { SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card";
import mockData from "../../mockData/products.json";

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
    <SafeAreaView>
      <View className="items-center">
        <SectionList
          sections={groupedProducts}
          data={products}
          renderSectionHeader={({ section: { title } }) => {
            return (
              <Text className="mb-8 items-center font-bold text-center text-3xl">
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
    </SafeAreaView>
  );
};

export default Shopping;
