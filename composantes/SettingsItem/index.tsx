import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../SettingsItem/style'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SettingsItem = ({item}) => {
  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.libelle}>{item.libelle}</Text>
      <AntDesign name='arrowright' size={20} style={style.ant}/>
    </TouchableOpacity>
  )
}

export default SettingsItem