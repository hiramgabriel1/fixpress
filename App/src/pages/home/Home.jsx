import { useNavigation } from '@react-navigation/native';
import { Flex } from 'native-base';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context';
import SectionSearch from './components/SectionSearch';
import SectionServices from './components/SectionServices';
const Home = () => {

  const { state } = useContext(UserContext);
  const navigate = useNavigation();

  useEffect(() => {
    if (state.isAccess) {
      navigate.navigate('Login')
    }
  }, []);

  return (
    <Flex alignItems={"center"}>
      <SectionSearch />
      <SectionServices />
    </Flex>
  )
}

export default Home

