import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/main/Home/Home';
import Notification from '../screens/main/Notification/Notification';
import Profile from '../screens/main/Profile/Profile';
import MySetting from '../screens/main/Chat/Chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const tab = createMaterialBottomTabNavigator();
const Bottomtabnav = () => {
  return (
    <tab.Navigator
      initialRouteName="MySetting"
      activeColor="white"
      inactiveColor="black"
      shifting={false}
      barStyle={{backgroundColor: '#E5A00F'}}>
      <tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <tab.Screen
        name="Chat"
        component={MySetting}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="message-text"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </tab.Navigator>
  );
};

export default Bottomtabnav;
