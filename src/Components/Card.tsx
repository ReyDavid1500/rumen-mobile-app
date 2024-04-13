import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppButton from "./BasicComponents/AppButton";
import { formatCurrency } from "../utils/assets";
import StyledText from "./StyledComponents/StyledText";

type CardProps = {
  name: string;
  image: string;
  description: string;
  price: number;
  onPress: () => void;
};

const Card: React.FC<CardProps> = ({
  name,
  image,
  description,
  price,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={{ paddingHorizontal: 6 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <StyledText bold>{name}</StyledText>
            <StyledText small>{description}</StyledText>
          </View>
          <View>
            <StyledText bold>{formatCurrency(price)}/</StyledText>
            <StyledText>Unidad</StyledText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          <AppButton onPress={onPress} title="Agregar al pedido!" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    height: 350,
    width: "95%",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "70%",
    objectFit: "cover",
    marginBottom: 10,
  },
  input: {
    borderColor: "#111",
    borderWidth: 2,
    height: "80%",
    width: "40%",
    borderRadius: 10,
    padding: 3,
  },
});

export default Card;
