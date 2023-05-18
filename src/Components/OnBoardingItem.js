//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, useWindowDimensions } from 'react-native';
import { Flex,Box } from 'native-base';

// create a component
export default OnBoardingItem = ({ item }) => {

    const{width} = useWindowDimensions();

    return (

        <Flex alignItems="center">
            <Image source={item.image} style={[styles.image, {width,resizeMode:'cover'}]} />

                <Text style={styles.title} >{ item.title} </Text>
                <Text styles={styles.description } > {item.description} </Text>

        </Flex>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    image:{
        flex: 0.9,
    },
    title:{
        fontWeight:'800',
        fontSize:35,
        marginBottom:20,
        color: '#493d8a',
      
    }, 
    description:{
        fontWeight:'250',
        color: '#6265b',
        

    }, 

});

//make this component available to the app

