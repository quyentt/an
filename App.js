import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home/Home';
import Products from './Screens/Products/Products';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ 
          headerShown: false
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sản phẩm" component={Products} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

