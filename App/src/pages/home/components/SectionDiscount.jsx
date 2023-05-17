import { Center, Text } from "native-base";
import { Image } from "react-native";

const SectionDiscount = () => {
  return (
    <Center
      w={"350"}
      h={"290"}
      backgroundColor={"rose.200"}
      marginTop={"8"}
      borderRadius={"5"}>
      <Text color={"#fff"} fontSize={"25"} >Descuentos</Text>
      <Image
        source={require("../../../../assets/lavaropa.jpg")}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 350, height: 290,
          zIndex: -1,
        }}
        borderRadius={"5"}
      />
      <Text
        color={"#fff"}
        fontSize={"23"}
      >50 % DE DESCUENTO</Text>
    </Center>
  )
}

export default SectionDiscount