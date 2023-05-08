import { Center, Divider, Flex, Text, useColorMode } from 'native-base';

const ContainerPending = ({ nameService, referenceCode, status, data, hours, services }) => {

  const { colorMode } = useColorMode();

  const preIcon = services.filter(ico => {
    if (nameService === ico.name) {
      return ico.icon;
    }
  });

  const Icon = preIcon[0];

  return (
    <Center
      position="relative"
      backgroundColor={colorMode === 'light' ? 'dark.3000' : 'light.3000'}
      w={"400px"}
      h={"200px"}
      marginTop={"12px"}
      borderRadius={"4px"}
    >

      <Flex flexDirection={"row"}>
        {Icon}
        <Flex>
          <Text>{nameService}</Text>
          <Text>Código de referencia : {referenceCode}</Text>
        </Flex>
      </Flex>
      <Divider marginTop={"12px"} marginBottom={"12px"} />
      <Flex>
        <Center
          position={"absolute"}
          right={"-52%"}
          w={"80px"}
          padding={"6px"}
          borderRadius={"6px"}
          backgroundColor={"rgba(115, 244, 159, 0.39)"}
        >
          <Text
            color={"green.300"}
          >{status}</Text>

        </Center>

        <Text>Icono calendario</Text>
        <Text>{hours} , {data}</Text>
      </Flex>
    </Center>
  )
}

export default ContainerPending;