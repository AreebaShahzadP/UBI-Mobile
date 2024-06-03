import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

interface IInputProps {
  placeholder: string;
  placeholderTextColor: string;
  value: string;
  onChangeText: (text: string) => void; //tye is string and return type is void means return nothing
  secureTextEntry: boolean;
  iconName: string;
  iconColor: string;
  iconSize: number;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  secureTextEntry,
  iconName,
  iconColor,
  iconSize,
}) => {
  return (
    <View style={styles.inputContainer1}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <IonIcons name={iconName} color={iconColor} size={iconSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 50,
    paddingLeft: 10,
    marginHorizontal: 10,
    borderColor: '#AEAEAE',
    borderWidth: 0.5,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
    color: '#666666',
  },
});

export default Input;
