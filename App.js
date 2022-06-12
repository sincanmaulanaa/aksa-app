import { StatusBar } from "expo-status-bar";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Image, Pressable } from "react-native";
import Logo from "./assets/img/aksa-logo.png";

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <View className="flex-1 items-center justify-center w-full bg-white">
          <Image source={Logo} className="w-80 h-40 mb-60" />
          <Text className="text-[38px] font-bold">Find your games</Text>
          <Text className="text-center max-w-[321px] mt-2.5 text-xl leading-8">
            Now no need to worry if you want to play games, find lots of games
            you want in just an app!
          </Text>
          <Pressable className="w-4/5 p-4 rounded-md bg-blue-500 hover:bg-blue-300 active:bg-blue-300 mt-[49px]">
            <Text className="text-white text-center text-2xl">Mulai</Text>
          </Pressable>
          <StatusBar style="auto" />
        </View>
      </TailwindProvider>
    </NavigationContainer>
  );
}
