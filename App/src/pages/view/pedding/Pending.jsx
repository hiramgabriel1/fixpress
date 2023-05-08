import { EvilIcons, Foundation } from '@expo/vector-icons';
import { Button, Divider, Flex, Text, useColorMode } from 'native-base';
import services from '../../../data/list';
import ContainerPending from './components/ContainerPending';
const Pending = () => {
  const { colorMode } = useColorMode();
  return (

    <Flex maxH={"100vh"}
      paddingTop={"30px"}
      paddingLeft={"12"}
      alignItems={"center"}
    >

      <Flex flexDirection="row"
        alignItems="center">
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
          color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Pendientes </Text>
      </Flex>

      {
        services.map(item => <ContainerPending key={item.id}
          nameService={item.typeOfService}
          data={item.data}
          referenceCode={item.referenceCode}
          hours={item.hour}
          status={item.status}
          services={services} />)
      }
      <EvilIcons name="pencil" size={24} color="black" />
      <Foundation name="clipboard-notes" size={24} color="black" />
      <Button>Ver otros servicios</Button>
    </Flex>
  )
}

export default Pending;
