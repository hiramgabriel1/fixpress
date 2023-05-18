import { HorizontalMenu } from 'HorizontalMenu';
const data = [{ key: 'Bread' }, { key: 'Piza' }, { key: 'Burgers' }, { key: 'Cafe' }, { key: 'Salad' }, { key: 'Starters' }, { key: 'Vegetarian Curries' }, { key: 'Non Vegetarian' }]

const Menu = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <HorizontalMenu
        data={data}
        displayKey='key'
        borderRadius={5}
        borderWidth={0}
        backgroundColor='#D3D3D3'
        borderColor='#5b5b5b'
        fontSize={15}
        selectedMenuColor="#22AF44"
        selectedMenuBorderColor="red"
        fontColor="#36454F"
        selectedMenuFontColor="#ffffff"
        menuSpacing={5}
        width={100}
        textAlign='center'

      />
    </View>
  )
}

export default Menu