
import { CustomButton, CustomInput } from '@foodkit-workspace/shared-ui';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text,TouchableOpacity,View,StyleSheet,Image} from 'react-native';



export default function LoginScreen(){
    const navigation=useNavigation();
    const [xPos,setXPos]=useState(0);
    return <>
    <View style={{flexGrow:1,backgroundColor:'#eee'}}>


    <View style={styles.upperContainer}>

    <Image
        source={require('../../assets/images/chef-image.png')}
        style={{
            height:200,
            width:200,
            marginBottom:'10%',
            marginTop:'15%',
            alignSelf:'center'
        }}
        />

        <View style={{
            flexDirection:'row',
            justifyContent:'space-evenly',
            paddingVertical:20
        }}>
<TouchableOpacity onPress={()=>setXPos(e=>Math.min(140-e,0))}>
        <Text>Login</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>setXPos(e=>Math.min(140+e,140))}>
<Text>Sign-up</Text>
</TouchableOpacity>
        </View>

        <View style={[styles.switchLine,{
            transform:[{
                translateX:xPos
            }]
        }]} />
    
    </View>
    

    <View style={styles.loginContainer}>
   
    <View>
    <CustomInput label="Email address"/>
    <CustomInput label="Password" secureTextEntry={true}/>
    <View>
    <Text style={styles.forgotPasswordText}>Forgot passcode?</Text>
    </View>
    </View>


    
   <CustomButton onPress={()=>{
    // @ts-ignore
    navigation.navigate('LoggedIn',{
        screen:'Home'
    })
   }} >Login</CustomButton>

    <View>



   
   </View>


   </View>

   

    </View>
    </>
}

const styles=StyleSheet.create({
    upperContainer:{
        // flexGrow:0.1,
        marginTop:'5%',
        backgroundColor:'white',
        borderBottomStartRadius:50,
        borderBottomEndRadius:50
    },
    loginContainer:{
        flexGrow:1,
        paddingHorizontal:'10%',
        paddingVertical:'10%',
        justifyContent:'space-between'
    },
    forgotPasswordText:{
        marginVertical:'5%',
        color:'#FA4A0C',
        fontWeight:'500'
    },
    switchLine:{
        height:3,
        backgroundColor:'red',
        width:100,
        marginLeft:'20%',
        transform:[{
            translateX:140
        }]
        // alignSelf:'center'
    }
})