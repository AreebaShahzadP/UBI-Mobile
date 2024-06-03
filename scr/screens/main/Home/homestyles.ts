import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    marginBottom: 20,
  },
  itemcontainer: {
    marginVertical:10,
    backgroundColor:'#FFFDF7',
    padding:10,
    borderRadius:10,
    marginHorizontal:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  keydata: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  valuedata: {
    fontSize: 16,
    color: '#555',
  },
  icon:{

  }
});

export default styles;
