//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import AnotherScreen from '../Components/AnotherScreen';
import Home from '../Components/Home';

const Stack = createStackNavigator()

const HomeScreen= () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen  component={Home} name='Home'/>
            <Stack.Screen  component={AnotherScreen} name='AnotherScreen'/>
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HomeScreen;
