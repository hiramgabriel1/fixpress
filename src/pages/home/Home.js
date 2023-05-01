import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title=" Take me to another Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Home;
