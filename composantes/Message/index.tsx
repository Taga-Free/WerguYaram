import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

const Message = ({item}) => {
    const isMine = () => {
        return item.user.id === 1;
    };
  return (
    <View 
    style={[styles.container,
        {
        backgroundColor: isMine() ? '#D87A7A' : 'white',
        alignSelf: isMine() ? 'flex-end' : 'flex-start',}, 
        
    ]}>
      <Text>{item.message}</Text>
      <Text>{dayjs(item.createAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message