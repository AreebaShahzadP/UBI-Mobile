import react, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Button,
  TextInput,
  Platform,
} from 'react-native';
import Input from '../../../components/inputComponent';
import ButtonComponent from '../../../components/buttonComponent';
import styles from './styles';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [IsLoading, setIsLoading] = useState(false);
  const onPress = () => {
    {
      if (email === '' || password === '') {
        //logic of unfilled fields
        setError('Please fill all the required fields');
      }
      else
      navigation.navigate('Home');
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // navigation.navigate('Home');
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
        <View style={styles.txtContainer}>
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.subheading}>Please enter your email address</Text>
          <Text style={styles.centeredText}>and password</Text>
        </View>

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
          title={Platform.OS === 'android' ? 'Sign In' : 'Login'}
          IsLoading={IsLoading}
          onPress={onPress}
        />
        <View style={styles.heading1}>
          <Text style={styles.txtcontainer2}>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.clickable}> Sign up</Text>
          </TouchableOpacity>
        </View>
        {error ? (
          <Text
            style={{
              fontSize: 16,
              color: 'red',
              textAlign: 'center',
              fontWeight: 'bold',
              marginVertical: 5,
            }}>
            {error}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
export default LoginScreen;
