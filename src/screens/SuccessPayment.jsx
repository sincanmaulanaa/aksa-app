import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { Text, View, Pressable } from "react-native";

export default class SuccessPayment extends Component {
  render() {
    return (
      <TailwindProvider>
        <View className="flex-1 justify-center items-center px-8">
          <Text className="font-bold text-5xl text-slate-700 mb-9">
            Yeayy🙌
          </Text>
          <Text className="text-2xl font-semibold mb-5 text-slate-700">
            Pembayaran berhasil
          </Text>
          <View className="border-2 border-slate-600 rounded-md">
            <View className="w-full p-8 flex flex-row justify-between">
              <View>
                <View className="mb-7">
                  <Text className="text-slate-700 mb-1 font-medium">
                    Permainan
                  </Text>
                  <Text className="text-slate-700 text-2xl font-medium">
                    Mobil
                  </Text>
                </View>
                <View>
                  <Text className="text-slate-700 mb-1 font-medium">
                    Total Harga
                  </Text>
                  <Text className="text-slate-700 text-2xl font-medium">
                    Rp 60.000
                  </Text>
                </View>
              </View>
              <View className="ml-8">
                <View className="mb-7">
                  <Text className="text-slate-700 mb-1 font-medium">
                    Total Tiket
                  </Text>
                  <Text className="text-slate-700 text-2xl font-medium">4</Text>
                </View>
                <View>
                  <Text className="text-slate-700 mb-1 font-medium">
                    Metode Pembayaran
                  </Text>
                  <Text className="text-slate-700 text-2xl font-medium">
                    Gopay
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex justify-center items-center mb-8 mt-6">
              <Text className="text-slate-700 mb-2 font-medium">
                Kode Pembayaran
              </Text>
              <View className="border-2 border-slate-600 rounded-md py-3 px-10 mb-2">
                <Text className="font-semibold text-2xl text-slate-700">
                  612387
                </Text>
              </View>
              <Text className="italic text-red-600 text-xs">
                Tunjukkan kode pembayaran kepada kasir.
              </Text>
            </View>
          </View>
          <Pressable className="w-[340px] p-4 rounded-md bg-blue-500 hover:bg-blue-300 active:bg-blue-300 mt-14">
            <Text
              style={{ fontFamily: "Poppins" }}
              className="text-white text-center text-2xl"
            >
              Kembali
            </Text>
          </Pressable>
        </View>
      </TailwindProvider>
    );
  }
}
