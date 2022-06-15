import React, { Component, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { Text, View, Pressable, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default class Landing extends Component {
  render() {
    return (
      <Reg navigation={this.props.navigation} />
    );
  }
}

function Reg({navigation}){
  const setData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user_Key", jsonValue);
      console.log("Stored");
    } catch (e) {
      console.log(e);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TailwindProvider>
      <StatusBar style="auto" />
      <View className="flex-1 items-center justify-center w-4/5 mx-[10%]">
        <Text className="text-5xl font-bold mb-12">Daftar</Text>
        <TextInput
          placeholder="Nama Lengkap"
          placeholderTextColor={"#333"}
          className="border-b border-slate-500 w-full py-3 px-2 mb-7"
          onChangeText={value => {
            setName(value);
          }}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#333"}
          className="border-b border-slate-500 w-full py-3 px-2 mb-7"
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor={"#333"}
          className="border-b border-slate-500 w-full py-3 px-2 mb-7"
          onChangeText={(value) => {
            setUsername(value);
          }}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={"#333"}
          className="border-b border-slate-500 w-full py-3 px-2 mb-7"
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
        <Pressable
          className="w-full p-4 rounded-md bg-blue-500 hover:bg-blue-300 active:bg-blue-300 mt-[49px]"
          title="Landing"
          onPress={() => {
            setData({
              username: username,
              password: password,
              name: name,
              email: email,
            });
            navigation.navigate("Landing");
          }}
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
            onPress={() => navigation.navigate("Login")}
            className="text-blue-600 font-medium"
          >
            Masuk
          </Text>
        </Text>
      </View>
    </TailwindProvider>
  )
}