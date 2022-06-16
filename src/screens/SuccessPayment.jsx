import React, { Component, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { Text, View, Pressable } from "react-native";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class SuccessPayment extends Component {
  render() {
    return <Screen props={this.props} />;
  }
}

function Screen({ props }) {
  let [isReady, setIsReady] = useState(false);

  let id = Math.floor(Math.random() * 1000000);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
      console.log("Stored");
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("Failed");
    }
  };

  useEffect(() => {
    getData().then((data) => {
      let raw = [];

      if (data != null) {
        raw = [...data];
      }

      let stored = {
        id,
        name: props.route.params.name,
        price: props.route.params.price,
        method: props.route.params.method,
        quantity: props.route.params.quantity,
      };

      raw.unshift(stored);

      storeData(raw);
      setIsReady(true);
      console.log(raw);
    });
  }, []);

  if (isReady) {
    return <Payment params={props.route.params} props={props} id={id} />;
  } else {
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
}

function Payment({ props, params, id }) {
  return (
    <TailwindProvider>
      <View className="flex-1 justify-center items-center px-8">
        <Text className="font-bold text-5xl text-slate-700 mb-9">Yeayy🙌</Text>
        <Text className="text-2xl font-semibold mb-5 text-slate-700">
          Pembayaran berhasil
        </Text>
        <View className="border-2 border-slate-600 rounded-md">
          <View className="w-full p-8 flex flex-row justify-between">
            <View>
              {/* START: Game */}
              <View className="mb-7">
                <Text className="text-slate-700 mb-1 font-medium">
                  Permainan
                </Text>
                <Text className="text-slate-700 text-2xl font-medium">
                  {params.name}
                </Text>
              </View>
              {/* END: Game */}

              {/* START: Price Total */}
              <View>
                <Text className="text-slate-700 mb-1 font-medium">
                  Total Harga
                </Text>
                <Text className="text-slate-700 text-2xl font-medium">
                  Rp {params.price}
                </Text>
              </View>
              {/* END: Price Total */}
            </View>
            <View className="ml-8">
              {/* START: Ticket Total */}
              <View className="mb-7">
                <Text className="text-slate-700 mb-1 font-medium">
                  Total Tiket
                </Text>
                <Text className="text-slate-700 text-2xl font-medium">
                  {params.quantity}
                </Text>
              </View>
              {/* END: Ticket Total */}

              {/* START: Payment Method */}
              <View>
                <Text className="text-slate-700 mb-1 font-medium">
                  Metode Pembayaran
                </Text>
                <Text className="text-slate-700 text-2xl font-medium">
                  {params.method}
                </Text>
              </View>
              {/* END: Payment Method */}
            </View>
          </View>

          {/* START: Payment Code */}
          <View className="flex justify-center items-center mb-8 mt-6">
            <Text className="text-slate-700 mb-2 font-medium">
              Kode Pembayaran
            </Text>
            <View className="border-2 border-slate-600 rounded-md py-3 px-10 mb-2">
              <Text className="font-semibold text-2xl text-slate-700">
                {id}
              </Text>
            </View>
            <Text className="italic text-red-600 text-xs">
              Tunjukkan kode pembayaran kepada kasir.
            </Text>
          </View>
          {/* END: Payment Code */}
        </View>

        {/* START: Button */}
        <Pressable
          className="w-[340px] p-4 rounded-md bg-blue-500 hover:bg-blue-300 active:bg-blue-300 mt-14"
          onPress={() =>
            props.navigation.dispatch({
              ...CommonActions.navigate({ name: "Home" }),
            })
          }
        >
          <Text
            style={{ fontFamily: "Poppins" }}
            className="text-white text-center text-2xl"
          >
            Kembali
          </Text>
        </Pressable>
        {/* END: Button */}
      </View>
    </TailwindProvider>
  );
}
