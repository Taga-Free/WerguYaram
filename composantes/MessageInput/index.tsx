import { View, Text , TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import styles from './style'
import { TextInput } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

  
  
const MessageInput = () => {
  
  const [message, setMessage] = useState('');

  // Fonction pour gérer l'entrée du texte
  const handleInputChange = (TextInput) => {
    setMessage(TextInput);
  };

  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input} 
      placeholder="Ecris ici... "
      value={message}
      onChangeText={handleInputChange} // Appelle cette fonction lors du changement de texte
    />

    {/* Bouton d'envoi ou d'audio basé sur le texte */}
    <TouchableOpacity style={styles.send}>
      <Icon
        name={message.length > 0 ? "send" : "mic"} // Change d'icône si l'utilisateur a tapé du texte
        size={30}
        color="#fff"
      />
    </TouchableOpacity>
    </View>
  )
};

export default MessageInput