//import liraries
import React, { Component, useEffect,useRef } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Animated, Touchable } from 'react-native';
import { Svg,Circle,G } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { Button} from "native-base";
import { useNavigation } from '@react-navigation/native';



// create a component
export default NextButton = ({scrollTo,currentIndex}  ) => {

    const navigation=useNavigation();
    const size= 128;
    const strokeWidth=2;
    const center= size/2;
    const radius= size/2 - strokeWidth/2;
    const circumference =2*Math.PI*radius;
    
    const progressAnimation = useRef( new Animated.Value(0)).current;
    const progressRef =useRef(null);

    const handleNavigationLogin =()=> navigation.navigate("Login");

    const animation= (toValue)=>{
        return Animated.timing(progressAnimation, {
            toValue,
            duration:250,
            useNativeDriver:true
        }).start();
    };

    


    return (
        <View>
            {
                    currentIndex === 3?
                    (<Button background={"purple.500"} onPress={handleNavigationLogin} 
                         width={'150px'} size={'80px'}
                    >
                      <Text style={{color:'white'}} >Comenzar</Text>

                    </Button>
                    ):

                    ( <Button onPress={scrollTo} borderRadius={'50px'} backgroundColor={'purple.500'} size={'100px'}  >
                        <AntDesign name="arrowright" size={46}  color={'#fff'} />
                    </Button> )
                
            
            }
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
       height: 36 ,
       width:36,
        backgroundColor: '#a855f7',
        borderRadius: 100,
        padding: 45,
    },
    buttonComenzar:{
        

    }
});

//make this component available to the app
