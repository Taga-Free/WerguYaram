import { View, Text ,Image ,TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './style';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const ActivityItems = ({item}) => {
  return (
            <TouchableOpacity style={Styles.scrollableListItem } >
              <View style={Styles.SVG_View}>
                <View style={Styles.SVG_img}><Image style={Styles.SVG} source={require('./../../assets/imgs/svg/undraw_medicine_b1ol.png')}/>
                </View>
                <Text style={Styles.mainText}>{item.mainText}</Text>
              </View>
              <Text style={Styles.subText}>{item.subText}</Text>
          </TouchableOpacity>
  )
}

export default ActivityItems