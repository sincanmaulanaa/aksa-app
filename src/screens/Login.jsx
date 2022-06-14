import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { Text, View, Pressable, TextInput } from "react-native";

class Login extends Component {
  render() {
    return (
      <TailwindProvider>
        <StatusBar style="auto" />
        <View className="flex-1 items-center justify-center w-4/5 mx-[10%]">
          <Text className="text-5xl font-bold mb-12">Masuk</Text>
          <TextInput
            placeholder="Username"
            placeholderTextColor={"#333"}
            className="border-b border-slate-500 w-full py-3 px-2"
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"#333"}
            className="border-b border-slate-500 w-full py-3 px-2 mt-7"
          />
          <Pressable
            className="w-full p-4 rounded-md bg-blue-500 hover:bg-blue-300 active:bg-blue-300 mt-[49px]"
            title="Landing"
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text
              style={{ fontFamily: "Poppins" }}
              className="text-white text-center text-2xl"
            >
              Masuk
            </Text>
          </Pressable>
          <Text className="mt-6">
            Belum punya akun?{" "}
            <Text
              onPress={() => this.props.navigation.navigate("Register")}
              className="text-blue-600 font-medium"
            >
              Daftar
            </Text>
          </Text>
        </View>
      </TailwindProvider>
    );
  }
}

export default Login;
