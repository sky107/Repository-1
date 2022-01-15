import React from 'react';
import { SafeAreaView, View, StyleSheet, Pressable } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';
import Text from '../components/Text';
import { Colors } from '../constants/colors';



export default ({navigation}) => {



    return <>
        {/* <SafeAreaView> */}
        {/* <View style={styles.logoView}>
            <Text>PowerStack</Text>
        </View> */}
        <View>
        <Text color={Colors.primary}>   Login  </Text> 
            <Input placeholder="Enter your Email address" />
            <Input placeholder="Enter your Password" secureTextEntry />
            <Button onPress={()=>navigation.navigate("LoggedInNavigator")} textColor={"white"} textCenter={true}>LOGIN</Button>
        <Text textCenter>Don't have an account? {" "}
      <Pressable onPress={()=>navigation.navigate("RegisterScreen")}>
           <Text color={"dodgerblue"}>Register</Text>
          </Pressable>
       </Text>
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