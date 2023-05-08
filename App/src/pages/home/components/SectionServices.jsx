import { AntDesign, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Center, Flex, useColorMode } from 'native-base';
import { Text } from 'react-native';

const SectionServices = () => {

  const { colorMode } = useColorMode();
  const services = [

    {
      name: 'Transporte',
      icon: <MaterialIcons name="emoji-transportation" size={24} color="black" />,
      color: '#F8B0ED'
    },

    {
      name: 'Sonido',
      icon: <AntDesign name="sound" size={24} color="black" />,
      color: '#B1E5FC'

    },
    {
      name: 'Pintura',
      icon: <FontAwesome5 name="paint-roller" size={24} color="black" />,
      color: '#B5EBCD'
    },
    {
      name: 'Plomeria',
      icon: <MaterialIcons name="plumbing" size={24} color="black" />,
      color: '#CBEBA4'

    },
    {
      name: 'Estetica',
      icon: <Fontisto name="scissors" size={24} color="black" />,
      color: '#AFC6FF'
    },
    {
      name: 'Electronica',
      icon: <MaterialCommunityIcons name="power-plug" size={24} color="black" />,
      color: '#FB9B9B'
    },
    {
      name: 'Limpieza',
      icon: <MaterialIcons name="cleaning-services" size={24} color="black" />,
      color: '#FFD88D'
    },
    {
      name: 'Belleza',
      icon: <MaterialIcons name="emoji-transportation" size={24} color="black" />,
      color: '#CABDFF'
    },

    {
      name: 'AC',
      icon: <MaterialIcons name="emoji-transportation" size={24} color="black" />,
      color: '#CABDFF'
    },


  ]

  return (
    <Flex

      overflow={"hidden"}
      flexDirection={"row"}
      justifyContent={"center"}
      w={"400px"}
      marginTop={"12"}
      paddingTop={"21"}
      paddingBottom={"21"}
      paddingLeft={"0"}
      paddingRight={"0"}
      borderRadius={"12px"}
      background={colorMode === 'light' ? 'dark.3000' : 'light.3000'}>
      {services.map((item, index) => (

        <Center key={index}

          w={"76px"}
          h={"76px"}
          borderRadius={"50%"}
          marginLeft={"12"}
          backgroundColor={item.color}
        >
          {item.icon}
          <Text key={index}>{item.name}</Text>
        </Center>
      ))}
    </Flex>
  )
}

export default SectionServices

