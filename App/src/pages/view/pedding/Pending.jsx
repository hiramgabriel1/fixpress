import { Button, Divider, Flex, Text, useColorMode } from 'native-base';
import services from '../../../data/list';
import StatusPending from './components/StatusPending';
const Pending = () => {
  const { colorMode } = useColorMode();
  return (

    <Flex maxH={"100vh"}
      paddingTop={"30px"}
      alignItems={"center"}
    >
      <Flex flexDirection="row"
        alignItems="center"
        w={"100%"}
      >
        <Divider w={"2px"}
          minH={"26px"}
          padding={"2px"} borderRadius={"12px"}
          backgroundColor={"purple.500"}
        />
        <Text fontSize={"32px"}
          textAlign={"left"}

          w={"100%"}
          paddingLeft={"4"}
          fontWeight={"bold"}
          color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Pendientes</Text>
      </Flex>

      <StatusPending services={services} />
      <Button backgroundColor={"purple.800"} marginTop={"12"}>Ver otros servicios</Button>

    </Flex>
  )
}

export default Pending;
