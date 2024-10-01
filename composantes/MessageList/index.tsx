import { View, Text, TouchableOpacity ,Image } from 'react-native'
import React from 'react'
import styles from './style';


// Fonction pour tronquer le message à 50 caractères
const truncateMessage = (last_message, limit) => {
  return last_message.length > limit ? last_message.substring(0, limit) + "..." : last_message;
};

const MessageList = ({item, navigation }) => {
  return (
    <TouchableOpacity style={styles.messagesContainer} onPress={()=> navigation.navigate('MessageDetails', {item})} >

      <View style={styles.topContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.messageImg} source={require('./../../assets/taga0.jpg')}/>
            </View>
            <View style={styles.messagesInfo}>
                <Text style={styles.fullname}>{item.fullname}</Text>
                <Text style={styles.last_message}>{truncateMessage(item.last_message, 25)}
                </Text>
            </View>
            <View style={styles.rightContainer}>
            <Text style={styles.time}>{item.time}</Text>
            </View>
        </View>
        
    </TouchableOpacity>
  )
}

export default MessageList;