import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

interface IMySettingProps {
  id: string;
  img: any;
  name: string;
  lasttxt: string;
  tme:string;
}

const Data: IMySettingProps[] = [
  {
    id: '1',
    img: require('../../../assets/images/pic2.jpg'),
    name: 'Mudassar',
    lasttxt: 'How are you',
    tme:'3:30 PM'
  },
  {
    id: '2',
    img: require('../../../assets/images/pic2.jpg'),
    name: 'Mudassar',
    lasttxt: 'How are you',
    tme:'3:30 PM'
  },
  {
    id: '3',
    img: require('../../../assets/images/pic2.jpg'),
    name: 'Mudassar',
    lasttxt: 'How are you',
    tme:'3:30 PM'
  },
  {
    id: '4',
    img: require('../../../assets/images/pic2.jpg'),
    name: 'Mudassar',
    lasttxt: 'How are you',
    tme:'3:30 PM'
  },
  {
    id: '5',
    img: require('../../../assets/images/pic2.jpg'),
    name: 'Mudassar',
    lasttxt: 'How are you',
    tme:'3:30 PM'
  },
  {
    id: '6',
    img: require('../../../assets/images/pic2.jpg'),
    name: 'Mudassar ',
    lasttxt: 'How are you',
    tme:'3:30 PM'
  },
  {
    id: '7',
    img: require('../../../assets/images/pic2.jpg'),
    name: 'Mudassar',
    lasttxt: 'How are you',
    tme:'3:30 PM'
  },
  {
    id: '8',
    img: require('../../../assets/images/pic2.jpg'),
    name: 'Mudassar',
    lasttxt: 'How are you',
    tme:'3:30 PM'
  },
  {
    id: '9',
    img: require('../../../assets/images/pic2.jpg'),
    name: 'Mudassar',
    lasttxt: 'How are you',
    tme:'3:30 PM'
  },
];
const MySetting = () => {
  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity style={styles.item}>
      <Image
        style={styles.imge}
        source={item.img}
      />
      <View style={styles.txtcontainer}>
      <Text style={styles.txt1}>{item.name}</Text>
      <Text style={styles.txt2}>{item.lasttxt}</Text>
      <Text style={styles.time}>{item.tme}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <Text style={styles.txt}>Chats</Text>
      </View>
      <View>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MySetting;
