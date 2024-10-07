import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { fakeSettings } from '../../fakeData/fakeSettings'
import SettingsItem from '../../composantes/SettingsItem'

const Parametre = () => {
  return (
    <View style={style.container}>
      {/*Début du header*/}
      <View style={style.header}>
        <View style={style.head}>
          <Text style={style.userName}>Doctor M.Gueye</Text>
          <Text style={style.info}>Tagatheking@gmail.com</Text>
          <Text style={style.info}>(+221) 77 493 26 65</Text>
        </View>
        <Image style={style.img} source={require('./../../assets/doctor.jpeg')} />
      </View>

      <FlatList 
        data={fakeSettings} 
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <SettingsItem item={item} />
          )
        }}
      />
    </View>
  )
}

export default Parametre
