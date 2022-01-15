import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function componentName(props) {
  return (
    <TextInput
    style={styles.input}
    {...props}
    autoCapitalize='none'
    />
  );
}


const styles=StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#ccc',
        margin:10,
        paddingVertical:12,
        paddingHorizontal:12,
        backgroundColor:'white'
    }
})
