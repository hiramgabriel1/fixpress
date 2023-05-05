//import liraries
import React, { Component, useEffect,useRef } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Animated, Touchable } from 'react-native';
import { Svg,Circle,G } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';

// create a component
export default NextButton = ({scrollTo}  ) => {

    const size= 128;
    const strokeWidth=2;
    const center= size/2;
    const radius= size/2 - strokeWidth/2;
    const circumference =2*Math.PI*radius;
    
    const progressAnimation = useRef( new Animated.Value(0)).current;
    const progressRef =useRef(null);

    const animation= (toValue)=>{
        return Animated.timing(progressAnimation, {
            toValue,
            duration:250,
            useNativeDriver:true
        }).start();
    };

    


    return (
        <View>
             <Svg width={size} height={size}>
            <G rotation='360' origin={center}  >

                <Circle stroke='#e6e7e8' 
                ref={progressRef}
                cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />

                <Circle stroke='#F4338f' 
                cx={center} cy={center} r={radius} 
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={circumference- (circumference * 50 )/100}
                />
            

             </G>
            </Svg>
          
            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6} >
                <AntDesign name="arrowright" size={36}  color={'#F4338f'} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
     
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    button:{
        position:'absolute',
        backgroundColor: '##f4338f',
        borderRadius: 100,
        padding: 45,
    }
});

//make this component available to the app
