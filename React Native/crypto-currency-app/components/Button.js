import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { View,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {theme} from '../constants';
import { Colors } from '../constants/colors';
import Text from './Text';

export default function Button({
    children,
    color,
    textColor,
    textCenter,
    bold,
    style,
    ...props
}) {
  return (
    <TouchableOpacity
    style={[styles.buttonStyles,style]}
    >
       <Text color={textColor} textCenter={textCenter}>{children}</Text>
    </TouchableOpacity>
  );
}


const styles=StyleSheet.create({
buttonStyles:{
    backgroundColor:Colors.primary,
    padding:10,
    margin:10

}
})
