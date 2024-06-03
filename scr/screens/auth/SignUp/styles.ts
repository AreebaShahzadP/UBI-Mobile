import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  logoContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    left: 10,
  },
  formContainer: {
    flex: 2,
    // backgroundColor: 'red',
    // paddingVertical: 2,
  },
  txtContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E5A00F',
  },
  subheading: {
    paddingVertical: 2,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  centeredText: {
    fontSize: 16,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  heading1: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtcontainer2: {
    fontSize: 16,
    color: 'black',
  },
  clickable:{
    color:'#E5A00F',
    fontSize:16,
    fontWeight:'bold',

  }
});

export default styles;
