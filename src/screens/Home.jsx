import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native-web";
import Navbar from "../components/Navbar";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default class Home extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{ headerShow: false }}
        >
          <Stack.Screen name="Main" component={Homepage} />
          <Stack.Screen name="History" component={Landing} />
          <Stack.Screen name="User" component={User} />

          <TailwindProvider>
            <StatusBar style="auto" />
          </TailwindProvider>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
