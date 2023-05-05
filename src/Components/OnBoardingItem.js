//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, useWindowDimensions } from 'react-native';

// create a component
export default OnBoardingItem = ({ item }) => {

    const{width} = useWindowDimensions();

    return (
        <View style={[ , {width}]}>
            <Image source={item.image} style={[styles.image, {width,resizeMode:'contain'}]} />

            <View style={{ flex:0.3 }}>
                <Text style={styles.title} >{ item.title} </Text>
                <View style={styles.container} >
                    <Text styles={styles.description } > {item.description} </Text>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
        width:60,  
    },

    image:{
        flex: 0.4,
        justifyContent:'center',
        marginTop:50,
    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color: '#493d8a',
        textAlign:'center',
    }, 
    description:{
        fontWeight:'300',
        color: '#6265b',
        textAlign:'center',
        paddingHorizontal:64,
        
        
    }, 

});

//make this component available to the app

