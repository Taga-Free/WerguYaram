import { View, Text , FlatList} from 'react-native';
import React , {useEffect} from 'react';
import { fakeConversation } from '../../fakeData/fakeConversation.tsx'
import styles from '../Message/style.js';
import Message from '../../composantes/Message/index.tsx';
import MessageInput from '../../composantes/MessageInput/index.tsx';

const MessageDetails = ({ route, navigation }) => {
  const { item } = route.params;

  useEffect(() =>{
    navigation.setOptions({title: item.fullname});
  });

  return (
    <View style={{flex: 1}}>
      <FlatList 
      data={fakeConversation}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) =>{
        return  (
        <Message item={item}/>)
      }}/>

      <MessageInput/>
    </View>
  );
}

export default MessageDetails;
