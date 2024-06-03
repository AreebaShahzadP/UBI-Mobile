import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import SearchComponent from '../../../components/searchComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  const [Filter, setFilter] = useState('');
  const onPress = () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}> Patients </Text>
        <View style={{paddingTop: 10, marginHorizontal: 20}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
              Patient Name
            </Text>
            <Text style={{color: '#000000', fontSize: 16}}>Algera Leach</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
              Patient Email
            </Text>
            <Text style={{color: '#000000', fontSize: 16}}>
              algera@gmail.com
            </Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
              Physician Name
            </Text>
            <Text style={{color: '#000000', fontSize: 16}}>John Doe</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
              DOB
            </Text>
            <Text style={{color: '#000000', fontSize: 16}}>19-29-2222</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
              Gender
            </Text>
            <Text style={{color: '#000000', fontSize: 16}}> Male</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
              Age
            </Text>
            <Text style={{color: '#000000', fontSize: 16}}>21</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
              Account Number
            </Text>
            <Text style={{color: '#000000', fontSize: 16}}>11345</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
              Pharmacy Name
            </Text>
            <Text style={{color: '#000000', fontSize: 16}}>pata ni </Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>
              Phone
            </Text>
            <Text style={{color: '#000000', fontSize: 16}}>0000000000000</Text>
          </View>
        </View>
        <View style={{paddingTop: 20, marginHorizontal: 20}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Medical History
          </Text>
          <View style={{paddingTop: 20, marginHorizontal: -20}}>
            <SearchComponent
              placeHolder="Symptoms for sexual health service line:"
              placeHolderTextColor="black"
              value={Filter}
              onChangeText={text => setFilter(text)}
              secureTextEntry={false}
              iconName="chevron-down"
              iconColor="#000000"
              iconSize={20}
            />
            <SearchComponent
              placeHolder="Pertinent historic information for sexual health service line:"
              placeHolderTextColor="black"
              value={Filter}
              onChangeText={text => setFilter(text)}
              secureTextEntry={false}
              iconName="chevron-down"
              iconColor="#000000"
              iconSize={20}
            />
            <SearchComponent
              placeHolder="Pertinent Past Medical History:"
              placeHolderTextColor="black"
              value={Filter}
              onChangeText={text => setFilter(text)}
              secureTextEntry={false}
              iconName="chevron-down"
              iconColor="#000000"
              iconSize={20}
            />
            <SearchComponent
              placeHolder="Allergies:"
              placeHolderTextColor="black"
              value={Filter}
              onChangeText={text => setFilter(text)}
              secureTextEntry={false}
              iconName="chevron-down"
              iconColor="#000000"
              iconSize={20}
            />
            <SearchComponent
              placeHolder="Social history:"
              placeHolderTextColor="black"
              value={Filter}
              onChangeText={text => setFilter(text)}
              secureTextEntry={false}
              iconName="chevron-down"
              iconColor="#000000"
              iconSize={20}
            />
          </View>
        </View>
        <View
          style={{paddingTop: 20, marginHorizontal: 20, flexDirection: 'row'}}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Active Prescription
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderRadius: 5,
              backgroundColor: 'black',
              marginStart: 70,
              height: 30,
              width: '40%',
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                marginHorizontal: 17,
                marginTop: 5,
              }}>
              Add Prescription
            </Text>
          </TouchableOpacity>
        </View>
        <View
        //  app run keerli mobile per sai chal gai? filhal ni chal re :pkun kia iossue a raha koi issue ni run krny lagi ti ap yahn aa gy okk krlen run idr hi
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginHorizontal: 10,
            marginTop: 30,
          }}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome
              style={{marginHorizontal: 10, marginTop: 10}}
              name={'circle'}
              color={'#FBB42B'}
              size={15}
            />
            <Text
              style={{
                color: 'black',
                marginHorizontal: 10,
                fontSize: 14,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Request Pending
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome
              style={{marginHorizontal: 10, marginTop: 14}}
              name={'flag'}
              color={'red'}
              size={15}
            />
            <Text
              style={{
                color: 'black',
                marginHorizontal: 10,
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              UB Ready
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              marginHorizontal: 10,
              fontSize: 14,
              marginTop: 10,
            }}>
            (Tadalafil/ Vardenafil/ Apomorphine)
          </Text>
          <Text
            style={{
              color: 'black',
              marginHorizontal: 10,
              fontSize: 14,
              marginTop: 10,
            }}>
            UB Ready #1 5mg/5mg/3mg
          </Text>
          <Text
            style={{
              color: 'black',
              marginHorizontal: 10,
              fontSize: 14,
              marginTop: 10,
            }}>
            #30 ODT/month(total dispensed 90 ODT for 3 months), #3 Refills
          </Text>
          
           <View style={{flex:1,marginEnd:10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
    
            elevation: 8,
           }}>
           <View style={{flexDirection:'row',marginTop:10}}><FontAwesome style={{marginHorizontal: 10}} name="circle-o" color={'#E5A00F'} size={20} />
            <Text style={{color:'black'}}>Approve as order</Text></View>
            <View style={{flexDirection:'row'}}><FontAwesome style={{marginHorizontal: 10}} name="circle-o" color={'#E5A00F'} size={20} />
            <Text style={{color:'black'}}>Approve with change</Text></View>
            <View style={{flexDirection:'row'}}><FontAwesome style={{marginHorizontal: 10}} name="circle-o" color={'#E5A00F'} size={20} />
            <Text style={{color:'black'}}>Disapprove</Text></View>
           </View>
            </View>
      </View>
    </ScrollView>
  );
};
export default Profile;
