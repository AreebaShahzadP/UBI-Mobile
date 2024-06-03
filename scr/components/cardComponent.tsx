import React from 'react';
import {StyleProp, TextStyle, ViewStyle, View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

interface ICardProps {
    title: string;
    value: string;
    iconName: string;
}

const cardComponent: React.FC<ICardProps> = ({
    title, value, iconName
}) => {
  return (
    <View>

    </View>
  );
};

export default cardComponent;
