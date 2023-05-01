//import liraries
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import{Ionicons}from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import Profile from '../Components/Profile';
import Search from '../Components/Search';
import Friends from '../Components/Friends';


const Tab = createMaterialTopTabNavigator();
// create a component
const AppNavigator = () => {
    return (
   
        <Tab.Navigator style={{paddingTop:20 }} >
            <Tab.Screen 
            options={{
                title:({color, focused}) => 
                <Ionicons  
                size={25} 
                name={focused ? 'home' : 'home-outline'}
                color={focused ? 'blue' : "#272727" } />,
             }} 
            component= {HomeScreen} name='Home' />

            <Tab.Screen 
                 options={{
                    title:({color, focused}) => 
                    <FontAwesome
                    size={25} 
                    name={focused ? 'file-text' : 'file-text-o'}
                    color={focused ? 'blue' : "#272727" } />,
                 }} 
            component={Profile} name='Profile' />

            <Tab.Screen 
                 options={{
                    title:({color, focused}) => 
                    <FontAwesome 
                    size={25} 
                    name={focused ? 'bell' : 'bell-o'}
                    color={focused ? 'blue' : "#272727" } />,
                 }} 
            component={Friends} name='Friends' />
            <Tab.Screen 
             options={{
                title:({color, focused}) => 
                <Ionicons
                size={25} 
                name={focused ? 'menu' : 'menu-outline'}
                color={focused ? 'blue' : "#272727" } />,
             }} 
            component={Search} name='Search' />
        </Tab.Navigator>
 
    );
};

// define your styles


//make this component available to the app
export default AppNavigator;
