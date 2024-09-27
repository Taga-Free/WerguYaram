import { View, Text ,ScrollView , Image , FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import dashboardStyles from './style';
import { fakeActivity } from '../../fakeData/fakeActivity';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import ActivityItems from '../../composantes/ActivityItems';
import { fakeSynthomes } from '../../fakeData/fakeSynthome';
import Synthomes from '../../composantes/SynthomeItems';
import { fakeDoctor } from '../../fakeData/fakeDoctor';

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
            <ActivityItems item={item}/>
          );
        }}
        />
      {/*Fin de Liste des Activités*/}

      
      {/*Liste des Synthomes*/}
      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold} >Quel symthöme avez-vous?</Text>
      </View>
      <FlatList 
        data={fakeSynthomes}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator= {false}
        style={dashboardStyles.scrollableList}
        renderItem={({item}) => {
          return(
            <Synthomes item={item}/>
          );
        }}
        />

        
      {/*Fin de Liste des Synthomes*/}

      
      {/*Docteur List*/}
      
        <View style={dashboardStyles.title_space_between}>
          <Text style={dashboardStyles.titleBold} >Nos Docteurs</Text>
          <TouchableOpacity>
            <Text style={dashboardStyles.link}>Afficher tout...</Text>
        
      </TouchableOpacity>
        </View>
        <View style={dashboardStyles.DoctorContainer}>
        {
          fakeDoctor.splice(0, 5).map((doctor, index) =>{
            return(
              <TouchableOpacity 
              key={doctor.id} 
              style={dashboardStyles.DoctorCard}>
                <Image 
                source={{uri: `${doctor.img}`}}
                style={dashboardStyles.DoctorImg}/>
                <View style={dashboardStyles.DoctorInfos}>
                <Text style={dashboardStyles.DoctorFullName}>{doctor.fullName}</Text>
                <Text style={dashboardStyles.DoctorSpeciality}>{doctor.speciality}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }

        </View>
    </ScrollView>
  )
}

export default Home;