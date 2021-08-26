/*
Siddharht Kumar Yadav
23/08/2001
*/

import React,{useRef,useState} from 'react';
import {View,StyleSheet,Pressable,Text,Button,TextInput} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
 import StepIndicator from 'react-native-step-indicator';

export default ()=>{
    const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

const [pos,setPos]=useState(0);

    const sheetRef=useRef();
    
    return <>
<View style={{flex:1,justifyContent:'center'}}>
<Button
title="Show Bottom Sheet" 
onPress={()=>sheetRef.current.open()}
/>  
<Pressable onPress={e=>setPos(y=>y+1)}>
<Text style={styles.button}>
        Next
    </Text>
</Pressable>
    
<StepIndicator
        //  customStyles={customStyles}
         currentPosition={pos%5}
         labels={labels}
    />




<RBSheet
ref={sheetRef}
height={300}
openDuration={250}
// animationType={"none"}
customStyles={{
    wrapper: {
    //   backgroundColor: "transparent"
    },
    draggableIcon: {
      backgroundColor: "dodgerblue"
    }
  }}
closeOnDragDown={true}
// closeOnPressMask={false}
>
    <View  style={{padding:10,justifyContent:'space-evenly'}}>
    <Text>Name</Text>
    <TextInput style={{
        borderWidth:1,
        borderRadius:5,
        padding:5,
        paddingVertical:10,
        marginVertical:10
    }}/>
    <Text>Email</Text>
    <TextInput style={{
        borderWidth:1,
        borderRadius:5,
        padding:5,
        paddingVertical:10, 
    }}/>
    <View style={{flexDirection:'row'}} >
    <Text style={styles.button}>
        Get Started
    </Text>

    <Text style={{...styles.button,
    backgroundColor:'white',color:'black'}}>
        Cancel
    </Text>
    </View>
    
    </View>
</RBSheet>


    </View>

    </>
}

const styles=StyleSheet.create({
    button:{
        margin:10,
        padding:10,
        paddingHorizontal:30,
        borderWidth:0.5,
        // borderColor:'#eee',
        borderRadius:10,
        backgroundColor:'dodgerblue',
        color:'white',
        alignSelf: 'flex-start', // wow!!!!
        fontSize:18

    }
})