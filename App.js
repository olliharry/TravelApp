import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./screens/home";
import MapScreen from "./screens/map";
import ExpenseScreen from "./screens/expense";
import React, { useState } from "react";
import TripModal from "./tripModal";
import { SelectList } from "react-native-dropdown-select-list";

export default function App() {
  const [tripModalVisible, setTripModalVisible] = useState(false);
  const Tab = createBottomTabNavigator();

  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "SE Asia" },
    { key: "2", value: "Europe" },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerLeft: () => (
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
            />
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.button}>
              <MaterialIcons name="add" color="#000" size={40} />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            marginRight: 20,
          },
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerTitle: "",
        }}
      >
        <Tab.Screen
          name="Itinerary"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="list" color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="map" color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="Expenses"
          component={ExpenseScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="attach-money" color={color} size={40} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbcbc9",
  },
  button: {
    width: 45,
    height: 45,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
