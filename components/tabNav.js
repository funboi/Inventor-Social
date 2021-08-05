import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Projects from '../screens/Projects'
import Resume from '../screens/Resume'

const Tab = createMaterialTopTabNavigator();


export function Tabs() {
    return (
      <Tab.Navigator
        initialRouteName='Projects'
        initialLayout={{ width: Dimensions.get('window').width }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 18;
            color = focused ? '#0E8BFF' : '#444';
            
            if (route.name === 'Projects') {
              iconName = focused ? 'grid': 'grid-outline';
            } else if (route.name === 'Resume') {
              iconName = focused ? 'create' : 'create-outline';    
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarShowIcon: true,
          swipeEnabled: true,
          tabBarActiveTintColor: '#0E8BFF',
          tabBarInactiveTintColor: '#444',
          tabBarIndicatorStyle: {
            height: null
          },
          tabBarStyle: { 
            backgroundColor: '#F5F5F5',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            shadowOpacity: 0.5,
            elevation: 1,
          },
        })}
      >
        <Tab.Screen
          name='Projects'
          component={Projects}
        />
        <Tab.Screen
          name='Resume'
          component={Resume}
        />
      </Tab.Navigator>
    );
}