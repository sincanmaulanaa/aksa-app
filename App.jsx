import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./src/screens/Landing";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Payment from "./src/screens/Payment";
import SuccessPayment from "./src/screens/SuccessPayment";

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SuccessPayment"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="SuccessPayment" component={SuccessPayment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
                                                                                                                                                                           