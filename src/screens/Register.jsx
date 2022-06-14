import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { Text, View, Pressable, TextInput } from "react-native";

export default class Landing extends Component {
  render() {
    return (
      <TailwindProvider>
        <StatusBar style="auto" />
        <View className="flex-1 items-center justify-center w-4/5 mx-[10%]">
          <Text className="text-5xl font-bold mb-12">Daftar</Text>
          <TextInput
            placeholder="Nama Lengkap"
            placeholderTextColor={"#333"}
            className="border-b border-slate-500 w-full py-3 px-2 mb-7"
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={"#333"}
            className="border-b border-slate-500 w-full py-3 px-2 mb-7"
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={"#333"}
            className="border-b border-slate-500 w-full py-3 px-2 mb-7"
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"#333"}
            className="border-b border-slate-500 w-full py-3 px-2 mb-7"
          />
          <Pressable
            className="w-full p-4 rounded-md bg-blue-500 hover:bg-blue-300 active:bg-blue-300 mt-[49px]"
            title="Landing"
            onPress={() => this.props.navigation.navigate("Landing")}
          >
            <Text
              style={{ fontFamily: "Poppins" }}
              className="text-white text-center text-2xl"
            >
              Daftar
            </Text>
          </Pressable>
          <Text className="mt-6">
            Sudah punya akun?{" "}
            <Text
              onPress={() => this.props.navigation.navigate("Login")}
              className="text-blue-600 font-medium"
            >
              Masuk
            </Text>
          </Text>
        </View>
      </TailwindProvider>
    );
  }
}
