import { View, Text } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Message from '../Message';
import Parametre from '../Parametre';



const Tab = createMaterialBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
      activeColor="#850606"  // Couleur active
      inactiveColor="#000000"  // Couleur inactive
      barStyle={{ backgroundColor: '#ffffff' }}  // Couleur de la barre inférieure
        >
          <Tab.Screen
            name="Profil"
            component={Home}
            options={{
              tabBarLabel: 'Profil',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Message"
            component={Message}
            options={{
              tabBarLabel: 'Message',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="chat" color={color} size={26} />
              ),
              tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="Parametre"
            component={Parametre}
            options={{
              tabBarLabel: 'Parametre',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default BottomTabs;