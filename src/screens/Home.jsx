import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/Ionicons";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./HomeScreen";

function SettingsScreen() {
  return (
    <TailwindProvider>
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
        <View className="flex flex-row justify-between py-5 px-6 border-2 border-slate-600 rounded-lg w-full">
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
    </TailwindProvider>
  );
}

function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User!</Text>
    </View>
  );
}

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
            } else if (route.name === "Settings") {
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
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="user" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
