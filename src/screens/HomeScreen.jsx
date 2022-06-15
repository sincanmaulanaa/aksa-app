import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  StatusBar,
  SafeAreaView,
  SectionList,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Payment from "./Payment";
import SuccessPayment from "./SuccessPayment";

const DATA = [
  {
    title: "Mau pesan\ntiket apa hari ini",
    data: [
      { nama: "Go Cart", harga: "15.000", waktu: 20 },
      { nama: "Bianglala", harga: "12.000", waktu: 10 },
      { nama: "Trampolin", harga: "20.000", waktu: 60 },
      { nama: "Mandi Bola", harga: "30.000", waktu: 30 },
    ],
  },
];
const Stack = createStackNavigator();

export default class HomeScreen extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Homes} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Success" component={SuccessPayment} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function Homes() {
  return (
    <TailwindProvider>
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <SectionList
          style={{ padding: 20 }}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Lists name={item.nama} price={item.harga} time={item.waktu} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="text-4xl font-bold mb-16 mt-10">{title}</Text>
          )}
        />
      </SafeAreaView>
    </TailwindProvider>
  );
}

function Lists({ name, price, time }) {
  const [quantity, setQuantity] = useState(1);
  const NV = useNavigation();

  const add = () => {
    setQuantity(quantity + 1);
  };

  const rem = () => {
    setQuantity(quantity - 1);
  };

  return (
    <View
      className="p-6 border-1 rounded-xl w-full flex mb-14 -mt-7"
      style={{
        borderColor: "#000",
        borderWidth: 2,
      }}
    >
      <View className="flex-1 flex flex-row">
        <View className="flex-1 max-w-[75%]">
          <Text className="text-3xl font-bold">{name}</Text>
        </View>
        <View className="flex text-right">
          <Text className="flex-1 text-right text-lg font-bold">
            Rp {price}
          </Text>
          <Text className="flex-1 text-right text-gray-500 text-md">
            {time} Menit
          </Text>
        </View>
      </View>

      <View className="mt-4 flex flex-row justify-center items-center">
        <View className="flex-1 flex flex-row">
          <View className="flex flex-col">
            <View className="flex-1">
              <Text className="text-xl font-bold mb-2">Total Tiket</Text>
            </View>
            <View className="flex flex-row">
              <Icon
                name="remove-circle-outline"
                size={24}
                color="#999"
                onPress={quantity > 0 ? () => rem() : setQuantity(1)}
              ></Icon>
              <Text className="flex-1 text-right text-xl font-bold mx-4">
                {quantity}
              </Text>
              <Icon
                name="add-circle-outline"
                size={24}
                color="#000"
                onPress={() => add()}
              ></Icon>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => NV.navigate("Payment", { quantity, name, price })}
        >
          <Text className="bg-[#1E80C0] rounded-md flex-grow-0 px-6 py-2 text-white font-bold text-lg">
            Pesan
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
