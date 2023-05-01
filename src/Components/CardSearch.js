// React Native Card View for Android and IOS
// https://aboutreact.com/react-native-card-view/

// import React in our code
import React from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';

//import Car
import { Card } from 'react-native-paper';

const CardSearch = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card>
          <Text style={styles.paragraph}>
            React Native Card View for Android and IOS using
            "react-native-paper"
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default CardSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});
