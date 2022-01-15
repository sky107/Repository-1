import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default function TT({
    children,
    textCenter,
    color,
    style,
    bold
}) {


    const newStyles={
        alignSelf:textCenter ? 'center':undefined,
        color:color ? color :undefined,
        fontWeight:bold ? '800':undefined
    }



  return (
    
      <Text style={[styles.text,newStyles,style]}>{children}</Text>
     
  );
}


const styles=StyleSheet.create({
    text:{
        fontSize:16,
        
    }
})