import { FontAwesome } from '@expo/vector-icons';
import { Box, Button, Flex, Input, Text, useColorMode } from 'native-base';
import { useContext } from 'react';
import { UserContext } from '../../../context';
<FontAwesome name="search" size={24} color="black" />
const SectionSearch = () => {
  const { state } = useContext(UserContext);
  const { colorMode } = useColorMode();

  return (
    <Box
      alignItems={"center"}
      gap={"23px"}
      backgroundColor={colorMode === 'light' ? 'dark.3000' : 'light.3000'}
      marginTop={"50px"}
      borderRadius={"12px"}
      w={"400px"}
      h={"300px"}
    >

      <Text
        fontSize={"2xl"}
        textAlign={"left"}
        w={"100%"}
        paddingLeft={"37px"}
        paddingTop={"21px"}
        color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>
        Hola {state.name || 'Hiram pendejo'} </Text>
      <Text
        fontSize={"43px"}
        textAlign={"left"}
        w={"100%"}
        paddingLeft={"37px"}
        paddingRight={"50px"}
        fontWeight={"bold"}
        color={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      >¿Que estas buscando hoy?</Text>
      <Flex
        position={"relative"}
        flexDirection={"row"}
        w={"84%"}
        alignItems={"center"}>
        <Input placeholder='Busca el servicio que necesitas' h={"45px"}
          color={colorMode === 'light' ? 'gray.100' : 'gray.800'} w={"100%"} />
        <Button bg="purple.800"
          w={"38px"} h={"43px"}
          position={"absolute"}
          right={"0%"}
        >
          <FontAwesome name="search" size={24} color="white" />
        </Button>
      </Flex>
    </Box>

  )
}

export default SectionSearch

