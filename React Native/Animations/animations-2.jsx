/************************************
* Author : Siddharth Kumar Yadav
* 20/02/2023
************************************/

import React, { useState } from 'react';
import { Animated, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
 
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
      toValue: 200,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // then
      Animated.timing(state.animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                {
                  translateX: state.animation,
                },
              ],
            },
          ]}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
 
// The toValue is like a number line, where inital position is '0'
// scaleX, scaleY  are other options that can be used for transformation
 
 