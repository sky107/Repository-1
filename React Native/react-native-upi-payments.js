/*
Siddharth Kumar Yadav
yarn add react-native-upi-payments
react-native link react-native-upi-payments
written only for Android
Author : Siddharth Kumar Yadav
24/08/2021
*/


import React from 'react';
import { Platform,Button,Text ,View} from 'react-native';
import RNUpiPayment from 'react-native-upi-payment';
export default ()=>{

  function successCallback(data) {
    console.log('success', data)
    // do whatever with the data
    }
    
    function failureCallback(data) {
    console.log('failed', data);
    // do whatever with the data
    }
    
    const initPayment = () => {
      RNUpiPayment.initializePayment({
        vpa: 'john@upi', // or can be john@ybl or mobileNo@upi
        payeeName: 'John Doe',
        amount: '1',
        transactionRef: 'aasf-332-aoei-fn'
      }, successCallback, failureCallback);
    }

    React.useEffect(()=>{

 
  },[])


  return (<>
    
    <View style={{
      backgroundColor:'dodgerblue',
      paddingHorizontal:10,
      marginTop:Platform.OS==='ios'?40:0,
      paddingVertical:20
    }}>
      <Text style={{
        color:'white',
        }}>UPI Paymnets</Text>
      </View>
      <View style={{flex:1,justifyContent:'center'}}>

      <Button title="PAY NOW " 
      onPress={()=>Platform.OS==='android'?initPayment():alert("Not Supported")}/>
      </View>
    </>)
}