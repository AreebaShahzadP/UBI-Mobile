import React, {useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import styles from './homestyles';
import FilterComponent from '../../../components/filterComponent';
import SearchComponent from '../../../components/searchComponent';
import IonIcons from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '../../../components/buttonComponent';


interface DataItem {
  key: string;
  value: string;
  iconName: string;
}
const data = [
  {key: 'Patient Name', value: 'Allegra Leach'},
  {key: 'Patient Email', value: 'allegra@gmail.com'},
  {key: 'Physician Name', value: 'John'},
  {key: 'DOB', value: '2-12-2999'},
  {key: 'Gender', value: 'Male'},
];

const Home:React.FC = () => {
  const renderItem = ({item}: any) => (

    <View style={styles.itemcontainer}>
     <View style={{width:'50%'}}>
      <View style={{marginBottom:5, flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
        <Text style={{fontSize:15, color:'black'}}>Patient Name</Text>
        <Text style={{fontSize:15, color:'black', marginLeft:40}}>John Doe</Text>
      </View>
      <View style={{marginBottom:5, flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
        <Text style={{fontSize:15, color:'black'}}>Patient Email</Text>
        <Text style={{fontSize:15, color:'black', marginLeft:45}}>johndoe@gmail.com</Text>
      </View>
      <View style={{marginBottom:5, flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
        <Text style={{fontSize:15, color:'black'}}>Physician Name</Text>
        <Text style={{fontSize:15, color:'black', marginLeft:25}}>John Doe</Text>
      </View>
      <View style={{marginBottom:5, flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
        <Text style={{fontSize:15, color:'black'}}>DOB</Text>
        <Text style={{fontSize:15, color:'black',marginLeft:90}}>2-3-4444</Text>
      </View>
      <View style={{marginBottom:5, flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
        <Text style={{fontSize:15, color:'black',}}>Gender</Text>
        <Text style={{fontSize:15, color:'black',marginLeft:75}}>Male</Text>
      </View>
     </View>
     <ButtonComponent  title='View Detail' onPress={()=>{}} viewstyle={{
     
     }}/>

    </View>
  );

  const onPress = ({navigation}:any) => {
    ()=>navigation.navigate('Patient')
  };
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Patients
        </Text>
      </View>

      <FilterComponent
        placeHolder="Select Filter"
        placeHolderTextColor="grey"
        value={filter}
        onChangeText={text => setFilter(text)}
        secureTextEntry={false}
        iconName="caret-down-outline"
        iconColor="#E5A00F"
        iconSize={20}
      />
      <SearchComponent
        placeHolder="Search"
        placeHolderTextColor="grey"
        value={search}
        onChangeText={text => setSearch(text)}
        secureTextEntry={false}
        iconName="search-sharp"
        iconColor="#E5A00F"
        iconSize={20}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.key + index}

      />
      <ButtonComponent title="View Details" onPress={onPress} />
    </View>
  );
};

export default Home;
