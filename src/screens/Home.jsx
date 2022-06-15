import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from "react-native-vector-icons/Ionicons"
import HomeScreen from './HomeScreen';
import History from './History';

function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-sharp'
                : 'home-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'ios-time-sharp' : 'ios-time-outline';
            }else if(route.name === 'user'){
              iconName = focused ? 'ios-person-sharp' : 'ios-person-outline';
            }

            return <Icons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3784DE',
          tabBarActiveBackgroundColor: '#D4E7FD',
          tabBarInactiveTintColor: 'gray',
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