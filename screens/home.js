import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

const Home = () => {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "SE Asia" },
    { key: "2", value: "Europe" },
  ];

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
