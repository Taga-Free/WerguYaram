import { View, Text } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Tab = createMaterialBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="Feed"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Message"
            component={Home}
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
            component={Home}
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

export default BottomTabs