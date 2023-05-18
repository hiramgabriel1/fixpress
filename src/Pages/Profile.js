//import liraries
import React, { Component,useCallback,useRef } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity,ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetForm, {BottomSheetRefProps} from '../Components/BottomSheetForm';



// create a component
export default Profile = () => {
    const ref = useRef(BottomSheetForm);

   const onPress= useCallback(()=>{
    const isActive = ref?.current?.isActive();

    if (isActive) {
        ref?.current?.scrollTo(0);
    }else{
        ref?.current?.scrollTo(-200);
    }
   },[]);



    return (
        <GestureHandlerRootView style={{flex:1}} >
            <ScrollView>
                <View style={styles.container} >
                        <View style={styles.imageContainer} >
                            <View>
                                <Image style={styles.imagestyle } 
                                source={require('../img/poliuretanosfondo.jpg')} />
                                <Text style={styles.textH1}>Mantenimiento de</Text>
                            
                                <Text style={styles.textH2}>Techos</Text>
                                

                            </View>

                            <View style={styles.avatarContainer} >
                                <Image style={styles.avatarstyle}  
                                source={require('../img/perfilapa.jpg')} />
                                
                            </View>

                            <View style={styles.textContainer} >
                                <Text style={styles.text} > Jesus Manuel Peralta  </Text>
                                <Text style={{color:'#9597a1'}} > Mantenimiento en Techos  </Text>
                            </View>
                            <View style={styles.buttonContainer} >

                                <Button style={styles.buttonstyle} onPress={onPress} >
                                    <Text style={{fontSize:20,color:'white',lineHeight:18,fontWeight:'bold'}} >Contactame</Text>
                                </Button>

                                

                            </View>

                            <View style={{ paddingLeft:15, marginRight: 200 , top: 120, left: 30 , backgroundColor:'grey', borderRadius: 20  }} >
                                <View style={{}} >
                                    <Text style={{color:'white', }}> Satisfaccion del Cliente </Text>
                                </View>
                                <View style={{flexDirection:'row'}} >
                                <AntDesign name="star" size={12} color="#FFBD59" />
                                <AntDesign name="star" size={12} color="#FFBD59" />
                                <AntDesign name="star" size={12} color="#FFBD59" />
                                <AntDesign name="star" size={12} color="#FFBD59" />
                                <AntDesign name="star" size={12} color="#FFBD59" />
                                <Text>.</Text>
                                </View>
                            </View>
                            
                        </View>

                        <View style={styles.imageContainer} >
                        
                                <Image style={styles.imagegeo} 
                                source={require('../img/location.jpeg')} />
                        </View>

                        <View style={styles.imageContainer} >
                            <View  style={{backgroundColor:'grey'}} >
                            <Text style={{
                            textAlign:'center',
                            fontSize:20,
                            lineHeight:36,
                            fontWeight:'bold',
                            color:'white',
                            }} 
                             >Trabajos Realizados</Text>
                             </View>
                            <View>
                                <Image style={{height:190, 
                                width:'100%',
                                }} 
                                source={require('../img/jalepa.jpeg')} />
                            </View>
                        </View>
                    
                    <BottomSheetForm ref={ref} />
                   

                </View>
            </ScrollView>
        </GestureHandlerRootView>
    );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' #9597a1',
    },
    imageContainer:{
        height: 300,
        width:370,
        backgroundColor:'white',
        elevation:3,
    },  
    imagestyle:{
        height:130, 
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        opacity:0.7
    },
    iconAtra:{
        position:'absolute',
        top:15,
        color:'white',
        left:'20',
    },
    avatarContainer:{
        height:100,
        width:100,
        alignSelf:'flex-end',
        position:'absolute',
        top:80,
        left:225,
        
    },
    avatarstyle:{
        height:'135%',
        width:'135%',
        borderRadius:40,
        backgroundColor:'black',
    },
    textContainer:{
        height:26,
        width:169,
        position:'absolute',
        top:146,
        left:55,
        alignItems:'center'
    },
    text:{
        alignSelf:'center',
        fontSize:20,
        lineHeight:26,
        fontWeight:'bold',
    },
    buttonContainer:{
        height:10,
        width:166,
        right:170 ,
        alignItems:'center',
        position:'absolute',
        top:216,
        alignSelf:'center',
        flexDirection:'row'
    },
    buttonstyle:{
        height:32,
        width:130,
        borderRadius:40,
        backgroundColor:'#D17C65',
        alignItems:'center',
        justifyContent:'center',
    },
    imagegeo:{
        height:'100%', 
        width:'100%',
        
    },
    textH1:{
        position:'absolute',
        alignSelf:'flex-start',
        fontSize:30,
        lineHeight:46,
        fontWeight:'bold',
        top:55,
        left:10
    },
    textH2:{
        position:'absolute',
        alignSelf:'flex-start',
        fontSize:30,
        lineHeight:36,
        fontWeight:'bold',
        top:95,
        left:10
    },

});

//make this component available to the app


