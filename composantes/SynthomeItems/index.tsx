import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Styles from './style';

const Synthomes = ({item}) => {
  return (
    <TouchableOpacity>
        <View style={Styles.item}>
            <Image style={Styles.itemImg} source={require('./../../assets/imgs/svg/img2.jpeg')}/>
            <Text style={Styles.Libelle}>{item.libelle}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Synthomes;