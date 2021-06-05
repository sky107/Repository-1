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
import Constants from 'expo-constants';
import ListCard from './components/ListCard';
import axios from 'axios';
import IntroScreen from './screens/IntroScreen';
import ListScreen from './screens/ListScreen';
export default function App() {
  const [link, setLink] = useState(true);
  setTimeout(() => {
    setLink(false);
  }, 5000);

  return <>{link ? <IntroScreen /> : <ListScreen />}</>;
}
