import { View, Text , TouchableOpacity , PermissionsAndroid } from 'react-native'
import React, { useState } from 'react';
import styles from './style'
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { TextInput } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const audioRecorderPlayer = new AudioRecorderPlayer();
  
const MessageInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordedAudioPath, setRecordedAudioPath] = useState('');
  
  const [message, setMessage] = useState('');

  // Demander les permissions sur Android
  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);

        return (
          granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        );
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  // Commencer l'enregistrement
  const onStartRecord = async () => {
    const hasPermission = await requestPermissions();
    if (hasPermission) {
      setIsRecording(true);
      const result = await audioRecorderPlayer.startRecorder();
      setRecordedAudioPath(result);
      console.log('Enregistrement commencé : ', result);
    }
  };

  // Arrêter l'enregistrement
  const onStopRecord = async () => {
    setIsRecording(false);
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    console.log('Enregistrement terminé : ', result);
  };

  // Lire l'audio enregistré
  const onStartPlay = async () => {
    if (recordedAudioPath) {
      setIsPlaying(true);
      const result = await audioRecorderPlayer.startPlayer(recordedAudioPath);
      console.log('Lecture audio : ', result);

      audioRecorderPlayer.addPlayBackListener((e) => {
        if (e.currentPosition === e.duration) {
          onStopPlay();
        }
      });
    }
  };

  // Arrêter la lecture
  const onStopPlay = async () => {
    setIsPlaying(false);
    const result = await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    console.log('Lecture arrêtée : ', result);
  };

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
    <TouchableOpacity 
    style={styles.send}
    onPressIn={onStartRecord}
    onPressOut={onStopRecord}>
      <Icon 
      name={isRecording ? "mic-off" : "mic"} 
      size={30} 
      color="#fff" 
      />
    </TouchableOpacity>

      {recordedAudioPath ? (
    <TouchableOpacity style={styles.playButton} onPress={isPlaying ? onStopPlay : onStartPlay}>
        <Icon name={isPlaying ? "stop" : "play-arrow"} size={30} color="#fff" />
    </TouchableOpacity>
) : null}
    </View>
  )
};

export default MessageInput