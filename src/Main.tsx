import React from "react";
import { StyleSheet, View } from "react-native";
import Shopping from "./Pages/Shopping";
import NavBar from "./Components/NavBar";

const Main = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <Shopping />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default Main;
