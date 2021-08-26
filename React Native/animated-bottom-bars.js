import React from 'react';
import LottieView from 'lottie-react-native';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AnimatedTabBarNavigator ,NavigationCont} from "react-native-animated-nav-tab-bar";  
import Home from './screens/Home';
import Orders from './screens/Orders';
import Profile from './screens/Profile';

export default ()=>{
//Animated Bottom Bars


//install for Navigation COntainer mentioned in v5 docs wrap , install
// animated tab bar navigation as mentioned in 
// https://github.com/torgeadelin/react-native-animated-nav-tab-bar

  const Tabs = AnimatedTabBarNavigator();
  return (<NavigationContainer>
 <Tabs.Navigator
      // default configuration from React Navigation
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor:'black',
        activeBackgroundColor:'dodgerblue',
        labelStyle:{
          fontFamily:"System",
          fontSize:18
        }
        
      }}
      appearance={{
        tabBarBackground:'#fff',
        whenInactiveShow:'label-only',
        dotCornerRadius:5
      }}
    >
  
      <Tabs.Screen name="Siddharth" component={Home} />
      <Tabs.Screen name="Kumar" component={Orders} />
      <Tabs.Screen name="Yadav" component={Profile} />
    </Tabs.Navigator>
    </NavigationContainer>);
}