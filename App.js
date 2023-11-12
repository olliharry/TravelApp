import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./screens/home";
import MapScreen from "./screens/map";
import ExpenseScreen from "./screens/expense";
import React, { useState } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
