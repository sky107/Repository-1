import React from 'react';
import { SafeAreaView, View, StyleSheet, Pressable } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';
import Text from '../components/Text';
import { Colors } from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ({navigation}) => {



    return <>
        
        <View>
            <Pressable onPress={()=>navigation.navigate("LoginScreen")}>

          
        <Text color={Colors.primary}>  
     <Text><Ionicons name="chevron-back"  size={22} /></Text>Register
          </Text> 
          </Pressable>
            <Input placeholder="Enter your Email address" />
            <Input placeholder="Enter your Password" secureTextEntry />
            <Button textColor={"white"} textCenter={true}>LOGIN</Button>
      <Pressable onPress={()=>navigation.navigate("LoginScreen")}>
        <Text textCenter>Don't have an account? {" "}
           <Text color={"dodgerblue"}>Login</Text>
       </Text>
          </Pressable>
        </View>
        {/* </SafeAreaView> */}
    </>
}

const styles = StyleSheet.create({
    header: {
        color: 'dodgerblue'
    },
    logoView: {
        backgroundColor: 'red',
        flex: 0.4
    }
})