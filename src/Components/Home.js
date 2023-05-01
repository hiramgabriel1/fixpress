//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';




// create a component
const Home = () => {

   

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Home;
