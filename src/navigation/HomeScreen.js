import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AnotherScreen, Home } from '../Components';
import { Login, Register } from '../pages';
const Stack = createStackNavigator()

const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name='Login' />
      <Stack.Screen component={Register} name='Register' />
      <Stack.Screen component={Home} name='Home' />
      <Stack.Screen component={AnotherScreen} name='AnotherScreen' />
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default HomeScreen;
