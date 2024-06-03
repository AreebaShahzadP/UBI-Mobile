import React from 'react';
import {
  StyleProp,
  TextStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  Alert,
  ActivityIndicator,
} from 'react-native';

interface IButtonProp {
  onPress: any;
  title: string;
  viewstyle?: StyleProp<ViewStyle>;
  textstyle?: StyleProp<TextStyle>;
  disable?: boolean;
  IsLoading?: boolean;
}

const ButtonComponent: React.FC<IButtonProp> = ({
  onPress,
  title,
  viewstyle,
  textstyle,
  disable,
  IsLoading
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.title, disable && {color:'grey'}, textstyle]}>
        {IsLoading ? <ActivityIndicator color="white" size='small'/>: title}
        </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E5A00F',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginHorizontal:10,
    borderRadius: 10,
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
export default ButtonComponent;
