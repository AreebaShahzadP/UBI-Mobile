import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backcontainer: {
    backgroundColor: '#E5A00F',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  txt: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop:10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'center'
    backgroundColor:'white',
    marginTop:10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal:10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  imge: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  txtcontainer:{
    // alignItems:'center',
    // justifyContent:'center',
    marginLeft:10
  },
  txt1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  txt2:{
    fontSize:18,
    color:'black'
  },
  time:{
fontSize:18,
color:'black',
// fontWeight:'bold',
marginLeft:'70%'  }
});

export default styles;
