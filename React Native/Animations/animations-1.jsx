/************************************
* Author : Siddharth Kumar Yadav
* 20/02/2023
************************************/

import React, { useState } from 'react';
import { Animated, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-ui-lib';
 
const styles = StyleSheet.create({
  box: {
    height: 200,
    width: 200,
    backgroundColor: 'dodgerblue',
    opacity: 1,
  },
  container: { flex: 1, justifyContent: 'center', alignSelf: 'center' },
});
export default function AnimationScreen() {
  const [state, setState] = useState({
    animation: new Animated.Value(1),
  });
 
  const startAnimation = () => {
    Animated.timing(state.animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // then
      Animated.timing(state.animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View style={[styles.box, { opacity: state.animation }]} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
 
// wrap insided Animated.View then only new Animated.Value will work otherwise initial opacity will be undefined
 
 
 