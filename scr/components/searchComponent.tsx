import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

interface ISearchProps {
  iconName: string;
  iconSize: number;
  iconColor: string;
  placeHolder: string;
  placeHolderTextColor: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
  viewstyle?: StyleProp<ViewStyle>;
}

const SearchComponent: React.FC<ISearchProps> = ({
  iconName,
  iconColor,
  iconSize,
  placeHolder,
  placeHolderTextColor,
  value,
  onChangeText,
  secureTextEntry,
  viewstyle,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <TouchableOpacity>
        <IonIcons name={iconName} color={iconColor} size={iconSize} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 0.5,
    // borderColor: 'grey',
    backgroundColor:'#F0DFC7',
    borderRadius: 10,
    height: 40,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginBottom:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
    color: '#666666',
  },
});

export default SearchComponent;
