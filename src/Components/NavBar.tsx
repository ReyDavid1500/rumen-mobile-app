import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import StyledText from "./StyledComponents/StyledText";
import AppButton from "./BasicComponents/AppButton";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <AppButton title="Productos" onPress={() => console.log("click")} />
      <AppButton title="RevisarPedidos" onPress={() => console.log("click")} />
      <AppButton title="Mi Cuenta" onPress={() => console.log("click")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00A896",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    alignItems: "center",
    height: "10%",
    marginTop: Constants.statusBarHeight + 30,
  },
});

export default NavBar;
