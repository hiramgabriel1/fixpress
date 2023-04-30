import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Friends from '../Components/Friends';
import Profile from '../Components/Profile';
import Search from '../Components/Search';
import HomeScreen from './HomeScreen';


const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }} >
      <Tab.Screen
        options={{
          title: ({ color, focused }) =>
            <Ionicons
              size={25}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? 'blue' : "#272727"} />,
        }}
        component={HomeScreen} name='Home' />

      <Tab.Screen
        options={{
          title: ({ color, focused }) =>
            <FontAwesome
              size={25}
              name={focused ? 'file-text' : 'file-text-o'}
              color={focused ? 'blue' : "#272727"} />,
        }}
        component={Profile} name='Profile' />

      <Tab.Screen
        options={{
          title: ({ color, focused }) =>
            <FontAwesome
              size={25}
              name={focused ? 'bell' : 'bell-o'}
              color={focused ? 'blue' : "#272727"} />,
        }}
        component={Friends} name='Friends' />
      <Tab.Screen
        options={{
          title: ({ color, focused }) =>
            <Ionicons
              size={25}
              name={focused ? 'menu' : 'menu-outline'}
              color={focused ? 'blue' : "#272727"} />,
        }}
        component={Search} name='Search' />
    </Tab.Navigator>
  );
};

export default AppNavigator;
