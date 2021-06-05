import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
 
const styles = StyleSheet.create({
  wrapper: {
 height:200
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
 
const Images=(props)=> {
 



  return (props.paths!=null?
  <>
      <Swiper style={styles.wrapper} showsButtons={true}>
      {
      props.paths.map(res=> <View >
<Image source={{uri:res}} style={{width:'100%',height: 200}} />
        </View>
        )}
       
      </Swiper>
      </>
  :
 <Image source={{uri:props.defaultimage}} style={{width:'100%',height: 200}} />
  );
    
  
}

export default Images