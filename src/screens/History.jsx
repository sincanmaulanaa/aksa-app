import React, { Component, useEffect, useState } from "react";
import { View, Text, Pressable, SafeAreaView, SectionList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TailwindProvider } from "tailwindcss-react-native";

export default class History extends Component {
  render() {
    return <HistoryData />;
  }
}

function HistoryData() {
  let [ready, isReady] = useState(false);
  let [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function getData() {
        const res = await AsyncStorage.getItem("@storage_Key");
        isReady(true);
        setData(JSON.parse(res));
      }

      getData();
    } catch (error) {
      setData([
        {
          name: "Mobil",
          quantity: "1",
          price: "15.000",
          method: "Cash",
          
        }
      ]);
    }
  }, []);


  if(data == null || data.length < 1){
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text>Tidak ada data</Text>
      </View>
    )
  }

  if (ready) {
    let DATA = [{ title: "Riwayat \nPembelian", data }];

    return (
      <TailwindProvider>
        <SafeAreaView
          style={{
            padding: 10,
          }}
        >
          <SectionList
            style={{ padding: 13 }}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <List
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                method={item.method}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="text-4xl font-bold mb-16 mt-10">{title}</Text>
            )}
          />
        </SafeAreaView>
      </TailwindProvider>
    );
  }

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function List({ name, quantity, price, method }) {
  return (
    <TailwindProvider>
      <View className="flex flex-row border-2 border-black rounded-xl p-5 -mt-6 mb-10">
        <View className="flex flex-col flex-1">
          <Text className="text-2xl font-bold">{name}</Text>
          <Text className="text-xl mt-2">{quantity}</Text>
        </View>
        <View className="flex flex-col flex-1">
          <Text className="text-right text-2xl text-[#22ACDD]">Rp {price}</Text>
          <Text className="text-right mt-2 text-xl">{method}</Text>
        </View>
      </View>
    </TailwindProvider>
  );
}
