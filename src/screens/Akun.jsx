import React, { Component, useEffect, useState } from "react";
import { View, Text, Pressable, BackHandler } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Akun extends Component {
  render() {
    return <User navigation={this.props.navigation} />;
  }
}

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@user_Key", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

function User({ navigation }) {
  let [ready, isReady] = useState(false);
  let [data, setData] = useState({});

  useEffect(() => {
    try {
      async function getData() {
        const res = await AsyncStorage.getItem("@login_Key");
        setData({
          login: true,
          data: JSON.parse(res),
        });
        isReady(true);
      }

      getData();
    } catch (error) {
      setData({
        login: true,
        data: {
          name: "Rizki",
          email: "rixsddw@gx.id",
          username: "rixsddw",
        },
      });
    }
  }, []);

  if (data == null || data.length < 1) {
    setData({
      login: true,
      data: {
        name: "Rifqi",
        email: "rifqimaulana@gmail.com",
        username: "hygge",
      },
    });
  }

  if (ready) {
    return (
      <TailwindProvider>
        <View className="p-5 mt-10 flex flex-col flex-1">
          <Text className="text-4xl font-bold">Akun Saya</Text>
          <View className="mt-10 border-2 border-black rounded-lg p-4">
            <View>
              <Text className="font-sm text-gray-500">Nama</Text>
              <Text className="font-bold" style={{ fontSize: 20 }}>
                {data.data.name}
              </Text>
            </View>
            <View className="mt-4">
              <Text className="font-sm text-gray-500">Email</Text>
              <Text className="font-bold" style={{ fontSize: 20 }}>
                {data.data.email}
              </Text>
            </View>
            <View className="mt-4">
              <Text className="font-sm text-gray-500">Username</Text>
              <Text className="font-bold" style={{ fontSize: 20 }}>
                {data.data.username}
              </Text>
            </View>
          </View>
          <View className="flex-1 flex items-end justify-end">
            <Pressable
              className="w-full bg-red-400 p-4 rounded-2xl "
              onPress={() => {
                storeData({ login: false, data: {} });
                BackHandler.exitApp();
              }}
            >
              <Text className="text-center text-white w-full text-2xl font-bold">
                Keluar
              </Text>
            </Pressable>
          </View>
        </View>
      </TailwindProvider>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Loading...</Text>
    </View>
  );
}
