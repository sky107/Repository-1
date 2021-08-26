/*
Author : Siddharth Kumar Yadav
24/08/2021
*/

import React from 'react';
import LottieView from 'lottie-react-native';
import {Text,View,Button,TextInput} from 'react-native';
import Dialog, { DialogContent ,DialogTitle,DialogFooter,DialogButton} from 'react-native-popup-dialog';
export default ()=>{

const [vis,setVis]=React.useState(false);
  return <>

<View style={{flex:1,paddingTop:500}}>

  <Button title="Press Me" onPress={()=>setVis(true)} />

  </View>



  <Dialog
    visible={vis}
    onTouchOutside={() => {
     setVis(e=>!e);
    }}
    dialogTitle={<DialogTitle title="Dialog Title" />}
    // dialogAnimation="ScaleAnimation"
    footer={
      <DialogFooter>
        <DialogButton
          text="CANCEL"
          onPress={() => {}}
        />
        <DialogButton
          text="OK"
          onPress={() => {}}
        />
        
      </DialogFooter>
    }
  >
    <DialogContent>
      <View style={{padding:10}}>
        <Text>Your Name</Text>
        <TextInput style={{
          borderWidth:0.5,
          width:200
        }}/>
        
        </View>
    </DialogContent>
  </Dialog>
  </>

}