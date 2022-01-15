import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function componentName() {
  return (
    <View style={styles.header}>
    <Entypo name="list" size={22} />
   <Text >PowerStack</Text>
   <FontAwesome name="user-circle-o" size={22} />
   </View>  );
}



const styles=StyleSheet.create({
    header:{
      // backgroundColor:'#ccc',
      padding:20,
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomColor:'#ccc',
      // borderBottomWidth:2
    },
    title:{
      fontSize:18,
      padding:10
    }
  })