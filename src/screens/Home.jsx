import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/Ionicons";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./HomeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import History from "./History";

function UserScreen() {
  let label = "text-md text-slate-700 mb-1";
  let value = "text-xl font-medium text-slate-700";
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
            Akun Saya
          </Text>
          <View className="border-2 border-slate-600 rounded-lg p-8 mb-6">
            {/* START: Profile */}
            <View className="mb-4">
              <Text className={label}>Nama</Text>
              <Text className={value}>Sincan Maulana</Text>
            </View>

            <View className="mb-4">
              <Text className={label}>Email</Text>
              <Text className={value}>sincanmaulanaa@gmail.com</Text>
            </View>

            <View>
              <Text className={label}>Username</Text>
              <Text className={value}>sincan.mln</Text>
            </View>
          </View>
          {/* END: Profile */}

          {/* START: Balance */}
          <View className="border-2 border-slate-600 rounded-lg p-8 mb-6">
            <Text className={label}>Saldo Anda</Text>
            <Icon
              name="wallet-outline"
              size={28}
              style={{ marginTop: 8, color: "#444" }}
            >
              {"\t\t125.000"}
            </Icon>
          </View>
          {/* END: Balance */}

          {/* START: Spend */}
          <View className="border-2 border-slate-600 rounded-lg p-8 mb-10">
            <Text className={label}>Pengeluaran</Text>
            <Icon
              name="trending-down-outline"
              size={28}
              style={{ marginTop: 8, color: "#444" }}
            >
              {"\t\t82.600"}
            </Icon>
          </View>
          {/* END: Spend */}

          {/* START: Logout button */}
          <View>
            <Icon.Button
              name="log-out-outline"
              backgroundColor={"#E54444"}
              borderRadius={8}
              size={34}
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 30,
              }}
              onPress={() => styles("#F39292", 0.75)}
            >
              <Text className="text-lg font-medium text-white">Keluar</Text>
            </Icon.Button>
          </View>
          {/* END: Logout button */}
        </View>
      </ScrollView>
    </TailwindProvider>
  );
}

const styles = (bg, opacity) =>
  StyleSheet.create({
    hover: {
      backgroundColor: bg,
      opacity: opacity,
    },
  });

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "History") {
              iconName = focused ? "ios-time-sharp" : "ios-time-outline";
            } else if (route.name === "user") {
              iconName = focused ? "ios-person-sharp" : "ios-person-outline";
            }

            return <Icons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#3784DE",
          tabBarActiveBackgroundColor: "#D4E7FD",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="user" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
