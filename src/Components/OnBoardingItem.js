//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, useWindowDimensions } from 'react-native';
import { Flex,Box } from 'native-base';

// create a component
export default OnBoardingItem = ({ item }) => {

    const{width} = useWindowDimensions();

    return (

        <Flex alignItems="center">
            <Image source={item.image} style={[styles.image, {width,resizeMode:'contain'}]} />

                <Text style={styles.title} >{ item.title} </Text>
                <Text styles={styles.description } > {item.description} </Text>

        </Flex>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    image:{
        flex: 0.8,
    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color: '#493d8a',
      
    }, 
    description:{
        fontWeight:'300',
        color: '#6265b',
        

    }, 

});

//make this component available to the app

