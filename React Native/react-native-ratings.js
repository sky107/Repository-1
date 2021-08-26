/*
Author : Siddharth Kumar Yadav
24/08/2021
*/

import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function App() {
  
  return (<>
  <View style={{marginTop:30}}>
	  
	  <AirbnbRating
	count={10}
	reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
	defaultRating={5}
	size={20}
  />

<Rating
  showRating
  onFinishRating={e=>console.log("Rating is ",e)}
  style={{ paddingVertical: 10 }}
/>

<Rating
  type='heart'
  ratingCount={3}
  imageSize={60}
  showRating
  onFinishRating={e=>console.log("RAing",e)}
/>
  </View>	
 </> );
}