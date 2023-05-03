import { useNavigation } from '@react-navigation/native';
import { Button, Flex, Input } from 'native-base';
import { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { UserContext } from '../../context';

const Home = () => {

  const { state } = useContext(UserContext);
  const navigate = useNavigation();

  useEffect(() => {
    if (state.isAccess) {
      navigate.navigate('Login')
    }
  }, []);

  return (
    <View>
      <View>
        <Text>Hola {state.name || 'Hiram pendejo'} </Text>
        <Text>Hola ¿Que estas buscando hoy? </Text>
        <Flex flexDirection={"row"}>
          <Input placeholder='Busca el servicio que necesitas' />
          <Button>Search</Button>
        </Flex>
      </View>
    </View>
  )
}

export default Home

