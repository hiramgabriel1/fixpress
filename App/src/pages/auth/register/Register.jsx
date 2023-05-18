import { useNavigation } from '@react-navigation/native';
import {
  Box, Button, CheckIcon,
  Flex,
  Input, Link,
  Select, Text, useColorMode
} from 'native-base';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { UserContext } from '../../../context';
import users from '../../../data/users';

const Register = () => {

  const navigation = useNavigation();
  const [numbers, setNumbers] = useState('');
  const { dispatch } = useContext(UserContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const handlerNavigateLogin = () => {

    navigation.navigate('Login')
  };

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      username: "",
      lastName: "",
      email: "",
      password: "",
      cel: ""
    }
  });

  const onSubmit = (data) => {
    users.push(data);
    dispatch({
      type: "SET_SUCCESS",
      payload: true
    })
    navigation.navigate('Home');
    reset();
  };

  const numbersArray = [
    "+54",
    "+52",
    "+51",
    "+55"
  ]

  return (

    <Flex alignItems={"center"} h={"100vh"}
      justifyContent={"center"}
      bg={colorMode === 'light' ? 'dark.1000' : 'white.1000'} >

      <Text fontSize={"5xl"} textAlign={"left"}
        w={"100%"}
        paddingLeft={"37px"}
        color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Register</Text>

      <Box marginTop={"29px"} w={"82%"}>
        <Text fontSize={"xl"}
          fontWeight={"bold"}
          paddingBottom={"18px"}
          color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Nombre</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z ]+$/i,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input size='xl' placeholder='Nombre Completo'
              value={value} onBlur={onBlur}
              onChange={onChange}
              isInvalid={errors.name && true}
              color={colorMode === 'light' ? 'gray.100' : 'gray.800'}
            />
          )}
          name='username'
        />
        {errors.username && <Text color={'red.800'}>Error: El campo es requerido, si el error pereciste ingrese solo caracteres validos</Text>}
      </Box>

      <Box marginTop={"29px"} w={"82%"}>
        <Text fontSize={"xl"} fontWeight={"bold"}
          paddingBottom={"18px"}
          color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Apellidos</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z ]+$/i,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input size='xl' placeholder='Apellidos' value={value}
              onBlur={onBlur} onChange={onChange}
              isInvalid={errors.lastName && true}
              color={colorMode === 'light' ? 'gray.100' : 'gray.800'}
            />
          )}
          name='lastName'
        />
        {errors.lastName && <Text color={'red.800'}>Error: El campo es requerido, si el error pereciste ingrese solo caracteres validos  </Text>}
      </Box>

      <Box marginTop={"29px"} w={"82%"}>
        <Text fontSize={"xl"} fontWeight={"bold"}
          paddingBottom={"18px"} color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Numero de celular</Text>
        <Flex
          direction='row'
          alignItems={"center"}

        >
          <Select selectedValue={numbers} w={"100px"}
            h={"46px"}
            marginBottom={"4px"}
            accessibilityLabel="+51"
            placeholder="+51"
            color={colorMode === 'light' ? 'gray.100' : 'gray.800'} _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="7" />
            }} mt={1} onValueChange={itemValue => setNumbers(itemValue)}>
            {
              numbersArray.map((item, index) =>
                <Select.Item key={index} label={item}
                  value={item} color={colorMode === 'light' ? 'gray.100' : 'gray.800'} />
              )
            }
          </Select>

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[0-9]{10}$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input size='xl' placeholder='11592363' value={value}
                onBlur={onBlur} onChange={onChange}
                isInvalid={errors.cel && true}
                color={colorMode === 'light' ? 'gray.100' : 'gray.800'} />
            )}
            name='cel'
          />
        </Flex>
        {errors.cel && <Text color={'red.800'}>Error: El campo es requerido,
          si el error pereciste ingrese solo números y no letras</Text>}
      </Box>

      <Box marginTop={"29px"} w="82%">
        <Text fontSize={"xl"}
          fontWeight={"bold"}
          paddingBottom={"18px"}
          color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Correo electrónico</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input size='xl' placeholder='hiram@gmail.com' value={value}
              onBlur={onBlur} onChange={onChange}
              isInvalid={errors.email && true}
              color={colorMode === 'light' ? 'gray.100' : 'gray.800'}
            />
          )}
          name='email' />
        {errors.email && <Text color={'red.800'}>Error: El campo es requerido,
          si el error pereciste ingrese un email valido</Text>}

      </Box>

      <Box marginTop={"29px"} w="82%">
        <Text fontSize={"xl"} fontWeight={"bold"}
          paddingBottom={"18px"}
          color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>Contraseña</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{7,}$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input type='password' size='xl' placeholder='**********' value={value}
              onBlur={onBlur} onChange={onChange}
              isInvalid={errors.password && true}
              color={colorMode === 'light' ? 'gray.100' : 'gray.800'}
            />
          )}
          name='password' />
        {errors.password && <Text color={'red.800'}>Error: El campo es requerido,
          si el error pereciste ingrese solo caracteres validos como mayúsculas y minúsculas</Text>}
      </Box>

      <Button
        size="lg"
        w={"2/3"}
        bg={colorMode === 'light' ? 'dark.2000' : 'white.2000'}
        colorScheme="blue"
        marginTop={"29px"}
        marginBottom={"29px"}
        onPress={handleSubmit(onSubmit)}>
        Regístrate
      </Button>

      <Text color={colorMode === 'light' ? 'gray.100' : 'gray.800'}>
        ¿Ya tienes una cuenta?
        <Link onPress={handlerNavigateLogin} _text={{ color: "purple.900", fontWeight: "bold", textDecoration: "none" }}>Inicia session</Link>
      </Text>
    </Flex>
  );
};
export default Register;

