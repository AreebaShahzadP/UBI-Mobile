import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login/loginScreen';
import SplashScreen from '../screens/main/Splash';
import SignupScreen from '../screens/auth/SignUp/signUpScreen';
import Bottomtabnav from './bottom-tab-navigation';
import MySetting from '../screens/main/Chat/Chat';

const Stack = createNativeStackNavigator();

function AppNvigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Chat" component={MySetting} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={Bottomtabnav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNvigation;
