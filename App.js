import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/Navigation/AppNavigation';
import { NativeBaseProvider } from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
     <AppNavigator />
    </NavigationContainer>
   </NativeBaseProvider> 
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
