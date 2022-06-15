import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { Text, View, Image, Pressable } from "react-native";
import Logo from "../../assets/img/aksa-logo.png";
import Navbar from "../components/MenuBar";

class Landing extends Component {
  render() {
    return (
      <TailwindProvider>
        <View className="flex-1 items-center justify-center w-4/5 mx-[10%]">
          <Image source={Logo} className="w-full h-40 mb-60" />
          <Text className="text-[38px] font-bold">Find your games</Text>
          <Text className="text-center max-w-[321px] mt-2.5 text-xl leading-8">
            Now no need to worry if you want to play games, find lots of games
            you want in just an app.!
          </Text>
          <Pressable
            className="w-full p-4 rounded-md bg-blue-500 hover:bg-blue-300 active:bg-blue-300 mt-[49px]"
            title="Login"
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text className="text-white text-center text-2xl">Mulai</Text>
          </Pressable>
          <StatusBar style="auto" />
        </View>
      </TailwindProvider>
    );
  }
}

export default Landing;
