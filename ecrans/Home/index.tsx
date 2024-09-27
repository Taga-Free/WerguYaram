import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import dashboardStyles from './style';
import { fakeActivity } from '../../fakeData/fakeActivity';
import ActivityItems from '../../composantes/ActivityItems';
import { fakeSynthomes } from '../../fakeData/fakeSynthome';
import Synthomes from '../../composantes/SynthomeItems';
import { fakeDoctor } from '../../fakeData/fakeDoctor';

const Home = () => {
  // State pour gérer l'affichage de toute la liste ou non
  const [showAllDoctors, setShowAllDoctors] = useState(false);

  // Fonction pour basculer entre l'affichage partiel et complet
  const handleShowAllDoctors = () => {
    setShowAllDoctors(!showAllDoctors); // Alterne entre afficher tout et partiel
  };

  // Gère combien de docteurs afficher
  const displayedDoctors = showAllDoctors ? fakeDoctor : fakeDoctor.slice(0, 3);

  return (
    <ScrollView>
      <View style={dashboardStyles.header}>
        {/*Début du header*/}
        <Text style={dashboardStyles.userName}>Doctor M.Gueye</Text>
        <View style={dashboardStyles.imageContainer}>
          <Image source={require('./../../assets/doctor.jpeg')} style={dashboardStyles.userImg} />
        </View>
      </View>

      {/* Liste des Activités */}
      <FlatList
        data={fakeActivity}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        renderItem={({ item }) => <ActivityItems item={item} />}
      />

      {/* Liste des Synthomes */}
      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>Quel symthöme avez-vous?</Text>
      </View>
      <FlatList
        data={fakeSynthomes}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        renderItem={({ item }) => <Synthomes item={item} />}
      />

      {/* Docteur List */}
      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}>Nos Docteurs</Text>
        <TouchableOpacity onPress={handleShowAllDoctors}>
          <Text style={dashboardStyles.link}>
            {showAllDoctors ? 'Afficher moins...' : 'Afficher plus...'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={dashboardStyles.DoctorContainer}>
        {displayedDoctors.map((doctor) => (
          <TouchableOpacity key={doctor.id} style={dashboardStyles.DoctorCard}>
            <Image source={{ uri: `${doctor.img}` }} style={dashboardStyles.DoctorImg} />
            <View style={dashboardStyles.DoctorInfos}>
              <Text style={dashboardStyles.DoctorFullName}>{doctor.fullName}</Text>
              <Text style={dashboardStyles.DoctorSpeciality}>{doctor.speciality}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
