import 'react-native-gesture-handler';
import React from 'react';
import {ImagePropTypes, Text} from 'react-native';
// import Redux from './store';
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/es/integration/react';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
// import MyTasks from "./screens/MyTasks";
// import Profile from "./screens/Profile";
import {combineReducers} from 'redux';
import Navigation from './navigation/index';
// const {store,persistor}=Redux;

function MyTabs() {

 
  return (
  
     <Navigation/>
    
   
  );
}
export default MyTabs;