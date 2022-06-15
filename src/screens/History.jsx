import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default class History extends Component {
  render() {
    return (
      <TailwindProvider>
        <ScrollView>
          <View
            style={{
              padding: 32,
              paddingTop: 96,
            }}
          >
            <Text className="text-2xl font-semibold text-slate-700 mb-8">
              Riwayat Pembelian
            </Text>
            {/* START: PURCHASE HISTORY */}
            <View className="flex flex-row justify-between py-5 px-6 border-2 border-slate-600 rounded-lg w-full mb-5">
              <View>
                <Text className="text-xl font-semibold text-slate-700 mb-3">
                  Mobil
                </Text>
                <Text className="text-xl text-slate-700">4 Tiket</Text>
              </View>
              <View>
                <Text className="text-xl text-sky-500 mb-3 text-right">
                  Rp60.000
                </Text>
                <Text className="text-xl text-slate-700 text-right">Gopay</Text>
              </View>
            </View>
            {/* END: PURCHASE HISTORY */}

            {/* START: PURCHASE HISTORY */}
            <View className="flex flex-row justify-between py-5 px-6 border-2 border-slate-600 rounded-lg w-full mb-5">
              <View>
                <Text className="text-xl font-semibold text-slate-700 mb-3">
                  Trampoline
                </Text>
                <Text className="text-xl text-slate-700">4 Tiket</Text>
              </View>
              <View>
                <Text className="text-xl text-sky-500 mb-3 text-right">
                  Rp60.000
                </Text>
                <Text className="text-xl text-slate-700 text-right">BRI</Text>
              </View>
            </View>
            {/* END: PURCHASE HISTORY */}
          </View>
        </ScrollView>
      </TailwindProvider>
    );
  }
}
