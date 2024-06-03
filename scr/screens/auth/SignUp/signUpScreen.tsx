import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Input from '../../../components/inputComponent';
import ButtonComponent from '../../../components/buttonComponent';
import styles from './styles';

const SignupScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [IsLoading, setIsLoading] = useState(false);

  const onPress = () => {
    {
      if (username === '' || email === '' || password === '') {
        setError('Please fill all required fields');
      } else navigation.navigate('Login');
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    },2000);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.formContainer}>
        <Input
          iconName="person"
          iconColor="#E5A00F"
          iconSize={20}
          placeholder={'Username'}
          placeholderTextColor={'#666666'}
          value={username}
          onChangeText={text => setUsername(text)}
          secureTextEntry={false}
        />

        <Input
          iconName="mail"
          iconColor="#E5A00F"
          iconSize={20}
          placeholder={'Email Address'}
          placeholderTextColor={'#666666'}
          value={email}
          onChangeText={text => setEmail(text)}
          secureTextEntry={false}
        />
        <Input
          iconName="lock-closed"
          iconColor="#E5A00F"
          iconSize={20}
          placeholder={'Password'}
          placeholderTextColor={'#666666'}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <ButtonComponent
          title={Platform.OS === 'android' ? 'Sign Up' : 'Login'}
          onPress={onPress}
          IsLoading={IsLoading}
        />
        <View style={styles.heading1}>
          <Text style={styles.txtcontainer2}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.clickable}> Login</Text>
          </TouchableOpacity>
        </View>
        {error ? (
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 10,
              fontSize: 16,
              color: 'red',
              fontWeight: 'bold',
            }}>
            {error}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default SignupScreen;
