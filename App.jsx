import React, { useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import Logo from "./assets/img/aksa-logo.png";
import { Text, View, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./src/screens/Landing";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Payment from "./src/screens/Payment";

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Payment"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
