import * as React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CryptoDataScreen from '../screens/CryptoDataScreen';
import SavedCryptoDataScreen from'../screens/SavedCryptoDataScreen';
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';

export default function Navigation() {

    const AuthStack=createStackNavigator();
    const Tab=createBottomTabNavigator();

    // alert('hi')
    const Stack=createStackNavigator();


    const AuthNavigator=()=>{

    return  (<AuthStack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
         <AuthStack.Screen
         name="LoginScreen"
         component={LoginScreen}
         />
         <AuthStack.Screen
         name="RegisterScreen"
         component={RegisterScreen}

         />

     </AuthStack.Navigator>)

    }

    const LoggedInNavigator=()=>{
    
        return <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarStyle:{
                    backgroundColor:'#eee',
                    borderTopWidth:2,
                    height:80
                }
            }}

          
        >
            <Tab.Screen
            name="CryptoDataScreen"
            component={CryptoDataScreen}

            options={{
                tabBarLabel: 'Status',
                tabBarLabelPosition:'beside-icon',
                tabBarIcon: ({ color, size }) => (
                  <Octicons name="graph" color={color} size={size} />
                ),
                tabBarLabelStyle:{
                    fontSize:16
                }
            }}
            />  
            <Tab.Screen
            name="SavedCryptoDataScreen"
            component={SavedCryptoDataScreen}
      
            options={{
                tabBarLabel: 'Saved',
                tabBarLabelPosition:'beside-icon',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-bookmarks-sharp" color={color} size={size} />
                ),
                tabBarLabelStyle:{
                    fontSize:16
                }
              }}
            />
        </Tab.Navigator>
    }

   
    return (<NavigationContainer>

            <Stack.Navigator initialRouteName="PowerStack" 
            screenOptions={{
                headerShown:false
            }}
            >
                

            <Stack.Screen
                name="LoggedIn"
                screenOptions={{
                    headerShown:false
                }}
                component={LoggedInNavigator}
            />
            </Stack.Navigator>

    </NavigationContainer>)
}