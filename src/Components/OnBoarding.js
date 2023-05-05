//import liraries
import React, { Component, useState,useRef } from 'react';
import { View, Text, StyleSheet,FlatList, Animated } from 'react-native';
import Slides from './Slides';
import OnBoardingItem from './OnBoardingItem';
import Paginator from './Paginator';
import NextButton from './NextButton';

// create a component
export default OnBoarding = () => {
    const[currentIndex, setCurrentIndex] = useState(0);
    const scrollX= useRef(new Animated.Value(0)).current;
    const SlidesRef= useRef(null);

    const viewableItemsChanged = useRef(({ viewableitems }) => {
        setCurrentIndex(viewableitems[1],index);
    }).current;
    
    const viewConfig= useRef({viewAreaCoveragePercentThreshold:50}).current;

    const scrollTo = ()=>{
        if (currentIndex < Slides.length-1) {
            SlidesRef.current.scrollToIndex({index:currentIndex+1});
        }else{
            console.log('ulitma vista');
        }
    };

    return (
        <View style={styles.container}>
            <View style={{flex: 3}} >
                <FlatList 
                data={Slides}  
                renderItem={ ({item})=> <OnBoardingItem item={item} /> } 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item)=> item.id }
                onScroll={Animated.event([{nativeEvent:{contentOffset: { x:scrollX} }} ],{
                    useNativeDriver:false,

                })}
                scrollEventThrottle={32}
                
                viewableItemsChanged={viewableItemsChanged.current}
                viewabilityConfig={viewConfig.current}
                ref={SlidesRef}
                />
            </View>
            <Paginator data={Slides} scrollX={scrollX} />
            <NextButton scrollTo={scrollTo} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app

