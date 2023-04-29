//import liraries
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import{Ionicons}from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import Home from '../Components/Home';
import Profile from '../Components/Profile';
import Friends from '../Components/Friends';
import Search from '../Components/Search';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './HomeScreen';


const Tab = createMaterialTopTabNavigator();
// create a component
const AppNavigator = () => {
    return (
        <Tab.Navigator style={{paddingTop: StatusBar.currentHeight}} >
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
