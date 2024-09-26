import { View, Text ,ScrollView , Image , FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import dashboardStyles from './style';
import { fakeActivity } from '../../fakeData/fakeActivity';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const Home = () => {
  return (
    <ScrollView>
      <View style={dashboardStyles.header}>
          {/*Debut du header*/}
          <Text style={dashboardStyles.userName}>Doctor M.Gueye</Text>
        <View style={dashboardStyles.imageContainer}>
          <Image source={require('./../../assets/doctor.jpeg')} style={dashboardStyles.userImg}/>
        </View>
      </View>
      
      {/*Fin du header*/}
      
      {/*Liste des Activités*/}

        <FlatList 
        data={fakeActivity}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator= {false}
        style={dashboardStyles.scrollableList}
        renderItem={({item}) => {
          return(
            <TouchableOpacity style={dashboardStyles.scrollableListItem}>
            <Text style={dashboardStyles.mainText}>{item.mainText}</Text>
            <Text style={dashboardStyles.subText}>{item.subText}</Text>
          </TouchableOpacity>
          );
        }}
        />
      {/*Fin de Liste des Activités*/}
    </ScrollView>
  )
}

export default Home;