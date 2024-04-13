import React from "react";
import Card from "../Components/Card";
import mockData from "../mockData/products.json";
import { SafeAreaView, SectionList, StatusBar, StyleSheet } from "react-native";
import StyledText from "../Components/StyledComponents/StyledText";

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
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={groupedProducts}
        data={products}
        renderSectionHeader={({ section: { title } }) => {
          return (
            <StyledText bold style={styles.text}>
              {title}
            </StyledText>
          );
        }}
        renderItem={({ item }) => {
          return (
            <Card
              description={item.description}
              image={item.image}
              name={item.name}
              price={item.price}
              onPress={() => {}}
            />
          );
        }}
        keyExtractor={(product) => product._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    marginBottom: 30,
    textAlign: "center",
    fontSize: 30,
  },
});

export default Shopping;
