import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { Button, Flex, useColorMode } from 'native-base';
import { Text, View } from 'react-native';
const ColorChange = () => {
  const { colorMode, setColorMode } = useColorMode();


  const handlerDark = () => setColorMode('dark');
  const handlerLight = () => setColorMode('light');

  return (
    <View>
      <Text>Preferencias UI</Text>
      <Flex flexDirection={"row"}
        backgroundColor={colorMode === 'light' ? 'dark.2000' : 'light.2000'}>

        <Button flexDirection={"row"} onPress={handlerLight}>
          <FontAwesome5 name="moon" size={24} color="white"
          />
          <Text>Claro</Text>
        </Button>

        <Button flexDirection={"row"} onPress={handlerDark}>
          <Feather name="sun" size={24} color="white" />
          <Text>Claro</Text>
        </Button>
      </Flex>
    </View>
  )
}

export default ColorChange

