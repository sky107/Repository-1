import { CustomButton } from "@foodkit-workspace/shared-ui";
import {Image,View, Text,SafeAreaView,StyleSheet, ImageBackground } from "react-native";
import FoodforEveryoneSvg from "../../assets/svgs/FoodforEveryoneSvg";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";






export function SplashScreen1({navigation}){

    // const navigation=useNavigation();

    // console.warn(navigation);
    
    return <View style={{flexGrow:1}} >

        <View style={styles.container}>
        <View style={styles.tagLineContainer}>
        <Image
        source={require('../../assets/images/chef-image.png')}
        style={{
            height:60,
            width:60,
            marginBottom:'10%',
            marginTop:'2%'
        }}
        />
        <FoodforEveryoneSvg/>
        </View>
        <View>






        <ImageBackground 
        source={require('../../assets/images/splash-image.png')}
        style={{
            width:'100%',
            height:450,
            alignSelf:'center',
    }}>
             <LinearGradient colors={['#ffffff00', 'red']} 
             style={{ backgroundColor: 'transparent', position: 'absolute', top: 200, bottom: 0, left: 0, right: 0,opacity:1 }} /> 
             
             </ImageBackground>



            <Image 
            />
        <View>
        </View>
        
        </View>

        <View style={{paddingHorizontal:'10%',marginBottom:'10%'}}>
      <CustomButton buttonType="secondary" onPress={()=>navigation.navigate('Login')}>
        Get started
        </CustomButton>
      </View>


        </View>

        
    </View>
}

const styles=StyleSheet.create({
    tagLineContainer:{
        // paddingHorizontal:'10%'
           paddingHorizontal:'10%',
        paddingVertical:'10%',
    },
    container:{
        flexGrow:1,
        backgroundColor:'red',
        justifyContent:'space-between'
    }

})