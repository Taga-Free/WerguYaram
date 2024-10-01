import { View, Text , FlatList } from 'react-native'
import React from 'react'
import { fakeChats } from '../../fakeData/fakeChats'
import MessageList from '../../composantes/MessageList'
import styles from './style'

const Message = ({navigation}) => {
  return (
    <FlatList 
    data={fakeChats}
    keyExtractor={item => item.id.toString()}
    style={styles.root}
    renderItem={({item}) =>{
      return (
      <MessageList item={item} navigation={navigation} />)
    }}
    
    />
  )
}

export default Message