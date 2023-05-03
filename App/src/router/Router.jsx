
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../pages';
import ButtonTabNavigator from './ButtonTabNavigator';
const Stack = createStackNavigator();


const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={ButtonTabNavigator} name='Home' />
      <Stack.Screen component={Login} name='Login' />
      <Stack.Screen component={Register} name='Register' />
    </Stack.Navigator>
  );
};

export default Router; 