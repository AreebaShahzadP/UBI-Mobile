import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }:any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    },2000 ); 
  }, [navigation]);
  
  return (
   <View style={styles.container}>
      <Image
    style={styles.img}
      source={require('../../assets/images/splash.jpeg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'pink',
    // justifyContent:'center'
  },
  img: {
    flex:1,
    resizeMode:'cover', 
    width:'100%',
    height:'50%'  
  },
});

export default SplashScreen;
