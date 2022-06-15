import React, { createContext, useReducer, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./src/screens/Landing";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Akun from "./src/screens/Akun";
import History from "./src/screens/History";
import { preventAutoHideAsync } from "expo-splash-screen";
import SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

const Stack = createStackNavigator();
const AuthContext = createContext();

function App(props) {
  const [login, isLogin] = useState(false);

  useEffect(() => {
    try {
      async function getData() {
        const res = await AsyncStorage.getItem("@login_Key");
        let state = JSON.parse(res);

        isLogin(state?.login != null ? true : false);
      }

      getData();
    } catch (error) {
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{error}</Text>
      </View>;
    }
  });

  return (
    <AuthContext.Provider value={login}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Akun" component={Akun} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </AuthContext.Provider>
  );
}

export default App;
