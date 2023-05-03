import { useNavigation } from '@react-navigation/native';
import { Box, Button, Flex, Input, Link, Text, useColorMode } from 'native-base';
import { Controller, useForm } from "react-hook-form";

const Login = () => {

  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const { colorMode } = useColorMode();
  const handlerNavigateRegister = () => {
    navigation.navigate('Register');
  }


  const onSubmit = (data) => {
    console.log(data)
    reset();
  };

  return (
    <Flex alignItems={"center"} h={"100vh"} justifyContent={"center"}
      bg={colorMode === 'light' ? 'dark.1000' : 'light.1000'}  >
      <Text fontSize={"5xl"}
        textAlign={"left"} w={"100%"} paddingLeft={"37px"}
        paddingBottom={"18px"} color={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      >Login</Text>

      <Box marginTop={"29px"} w="82%">
        <Text fontSize={"xl"} fontWeight={"bold"} paddingBottom={"18px"} color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Correo electrónico</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input size='xl' placeholder='hiram@gmail.com' value={value}
              onBlur={onBlur} onChange={onChange}
              isInvalid={errors.email && true} color={colorMode === 'light' ? 'gray.100' : 'gray.800'} />
          )}
          name='email' />
        {errors.email && <Text color={'red.800'}>Error: El campo es requerido,
          si el error pereciste ingrese un email valido</Text>}

      </Box>

      <Box marginTop={"29px"} w="82%">
        <Text fontSize={"xl"} fontWeight={"bold"} paddingBottom={"18px"} color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Contraseña</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{7,}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input type='password' size='xl' placeholder='**********' value={value}
              onBlur={onBlur} onChange={onChange}
              isInvalid={errors.password && true} color={colorMode === 'light' ? 'gray.100' : 'gray.800'} />
          )}
          name='password' />
        {errors.password && <Text color='red.800' >Error: El campo es requerido,
          si el error pereciste ingrese solo caracteres validos como mayúsculas y minúsculas</Text>}
      </Box>

      <Button
        size="lg"
        w={"2/3"}
        bg={colorMode === 'light' ? 'dark.2000' : 'white.2000'}
        colorScheme="blue"
        marginTop={"29px"}
        marginBottom={"29px"}
        onPress={handleSubmit(onSubmit)}
        color={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      >
        Iniciar sesión
      </Button>

      <Text color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>
        ¿No tienes una cuenta?
        <Link onPress={handlerNavigateRegister} _text={{ color: "purple.900", fontWeight: "bold", textDecoration: "none" }}>Regístrate</Link>
      </Text>

    </Flex >
  )
}

export default Login;

