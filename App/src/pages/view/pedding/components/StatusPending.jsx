import { EvilIcons, Foundation } from '@expo/vector-icons';
import { Container, Text } from 'native-base';
import ContainerPending from './ContainerPending';

const StatusPending = ({ services }) => {
  return (
    <>
      {
        services.length === 0
          ? (<>

            <Text color={"#fff"} fontSize={"23"}>Sin tareas</Text>
            <Container>
              <EvilIcons name="pencil" size={60} color="purple" style={{
                position: 'absolute',
                top: "45%",
              }} />
            </Container>
            <Foundation name="clipboard-notes" size={158} color="green" />
          </>
          )
          : (<>
            {
              services.map(item => <ContainerPending key={item.id}
                nameService={item.typeOfService}
                data={item.data}
                referenceCode={item.referenceCode}
                hours={item.hour}
                status={item.status}
                services={services} />)
            }

          </>)
      }
    </>
  )

}

export default StatusPending;