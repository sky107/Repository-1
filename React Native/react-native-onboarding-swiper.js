/*
Author : Siddharth Kumar Yadav
25/08/2021
*/

import React from 'react';
import {Text,View,Button,TextInput} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default ()=>{

  const Done = ({ isLight, ...props }) => (
    <Button
      title={'Done'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
        backgroundColor: backgroundColor(isLight),
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    />
  );


const [vis,setVis]=React.useState(false);
return <>

<Onboarding

// DoneButtonComponent={()=><Text style={{marginRight:20}}>Lets Get Started</Text>}
showDone={false}

  pages={[
    {
      backgroundColor: '#fff',
      image: null,
      title: 'Onboarding',
      subtitle: 'Fast Delivery',
    },
    {
      backgroundColor: '#fff',
      image: null,
      title: 'Feature 2',
      subtitle: 'Quality Content',
    },
    {
      backgroundColor: '#fff',
      image:null, //By default It is required
      title: ' Siddharth Kumar Yadav',
      subtitle: <>
      <Button title="Get Started" />
      </>,
    },
    
  ]}
/>


  </>

}