/*
Author : Siddharth Kumar Yadav
26/08/2021
*/
import React from "react";
import {View , Text ,Pressable, Platform} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default ()=>{

  const [signOutVis,setSignOutVis]=React.useState(false);

  GoogleSignin.configure({
    webClientId:'660329728583-g7pc286d3s71b0d3uvasi1gbqegejq4u.apps.googleusercontent.com',
    offlineAccess:true,
    iosClientId:'660329728583-d1l1culk1efkcjijqlmm0bo3of2n1nrh.apps.googleusercontent.com'
  })


  const handleClick=async()=>{
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if(Platform.OS==='android')
      console.log("LOGGED IN FROM ANDROID");
      else
      console.log("LOGGEDIN FROM IOS");
      console.log(userInfo);
      setSignOutVis(true);
    } catch (error) {
     console.log(error);
    }
  }
 
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log("SIGNOUT")
      setSignOutVis(false);
      // setUser({}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };


  return (<>
<View style={{flex:1,justifyContent:'center',marginLeft:'25%'}}>
<Text style={{
       marginTop:10,
      //  backgroundColor:'dodgerblue',
      //  color:'white',
      //  padding:5,
      // marginLeft:-30
     }}>MADE BY {"\n"}SIDDHARTH KUMAR YADAV</Text>
<GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={()=>handleClick()}
     />
    { signOutVis && <Pressable onPress={()=>signOut()}>
     <Text style={{
       marginTop:10,alignSelf:'flex-start',
       backgroundColor:'dodgerblue',
       color:'white',
       padding:5
     }}>SIGN OUT</Text>
     </Pressable>}
     </View>
  
  </>)
}


/*

Steps

FOR IOS
yarn add @react-native-community/google-signin
INSIDEPODFILE PASTE THIS BELOW IOSPLATORM = >pod ‘GoogleSignIn’
RUN => pod install
OPEN XCODE => UNDER TARGET => INFO TAB => URL => ADD REVERSE IOS CLIENT ID
TO GET THE REVERSE IOS CIENCE ID ADD FROM GOOGLE CONSOLE OR DIRECTLY PASTE F 

FOR ANDROID
CREATE A NEW ANDROID ID FROM CONSOLE TO DO THIS YOU WILL NEED TO CHANGE THE PACKAGE NAME
OF YOUR PROJECT , IF YOU CAN CONSIDER TWO SEPARATE CODEBASE THEN GO FOR IT
https://stackoverflow.com/questions/37389905/change-package-name-for-android-in-react-native

INSIDE STRING.XML INSIDE ANDROID FOLDER  PASTE SERVER CLIENT ID 
<resources>
    <string name="app_name">SML</string>
    <string name="server_client_id">660329728583-g7pc286d3s71b0d3uvasi1gbqegejq4u.apps.googleusercontent.comcls</string>
</resources>

*/


