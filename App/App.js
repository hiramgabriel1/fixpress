import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";
import Router from './src/router/Router';
import { theme } from './src/styles';
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Router />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
