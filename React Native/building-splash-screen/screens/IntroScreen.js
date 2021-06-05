import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Introtime } from '../App';
import Constants from 'expo-constants';

const IntroScreen = () => {
  return (
    <>
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <Animatable.Image
          animation="zoomIn"
          delay={800}
          duration={200}
          style={styles.splash2}
          source={require('.././assets/orange-500x500.png')}
        />
        <Animatable.Image
          animation="zoomIn"
          delay={600}
          duration={200}
          style={styles.splash1}
          source={require('.././assets/blue-500x500.png')}
        />
        <Animatable.Image
          animation="zoomIn"
          delay={1500}
          duration={200}
          style={styles.splash3}
          source={require('.././assets/red-500x500.png')}
        />
        <Animatable.Image
          animation="zoomIn"
          delay={1100}
          duration={200}
          style={styles.splash4}
          onAnimationEnd={() => console.log(Introtime)}
          source={require('.././assets/purple-500x500.png')}
        />
        <Image
          style={styles.logo}
          source={require('.././assets/White-Logo-With-Text-500x500.png')}
        />
      </View>
    </>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  splash1: {
    width: 180,
    height: 180,
    marginTop: '65%',
    marginLeft: '14%',
    resizeMode: 'contain',
    zIndex: 1,
  },
  splash2: {
    width: 60,
    height: 60,
    marginTop: '55%',
    marginLeft: '23%',
    position: 'absolute',
    zIndex: 2,
    resizeMode: 'contain',
  },
  splash3: {
    width: 150,
    height: 150,
    marginTop: '50%',
    marginLeft: '30%',
    position: 'absolute',
    zIndex: 4,
    resizeMode: 'contain',
  },
  splash4: {
    width: 200,
    height: 200,
    marginTop: '60%',
    marginLeft: '28%',
    position: 'absolute',
    zIndex: 3,
    resizeMode: 'contain',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: '58%',
    marginLeft: '30%',
    position: 'absolute',
    zIndex: 10,
    resizeMode: 'contain',
  },
});
