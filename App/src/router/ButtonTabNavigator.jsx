import { Feather, Octicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useColorMode } from 'native-base';
import { Home, Pending } from '../pages';
const Tab = createMaterialTopTabNavigator();

const bg = (useColorMode === 'dark') ? '#D9D7D6' : '#0F1621';
const color = (useColorMode === 'dark') ? '#4E4F49' : '#18202E';
const ButtonTabNavigator = () => {
  return (
    <Tab.Navigator sceneContainerStyle={
      {
        backgroundColor: bg,
      }
    }
      screenOptions={{
        tabBarStyle: {
          backgroundColor: color
        }
      }}
    >
      <Tab.Screen name='Home Tab' component={Home}
        options={{
          title: '',
          tabBarIcon: () => <Feather name="home" size={24} color="white" />,
        }}
      />
      <Tab.Screen name='Pendientes Tab'
        component={Pending}
        options={{
          title: '',
          tabBarIcon: () => <Octicons name="checklist" size={24} color="white" />
        }}

      />

    </Tab.Navigator >
  );
};

export default ButtonTabNavigator;
