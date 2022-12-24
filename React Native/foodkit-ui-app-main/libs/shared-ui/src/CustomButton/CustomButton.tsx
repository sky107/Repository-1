import {Text, Button, TouchableOpacity,StyleSheet} from "react-native";


interface CustomButtonProps{
    buttonType?:boolean
}

export function CustomButton(props:any){


    return <TouchableOpacity onPress={props?.onPress} style={[styles.btn,{backgroundColor:props?.buttonType==='secondary'?'#fff':'#FA4A0C'}]}>
      <Text style={[styles.btnText,{color: props?.buttonType==='secondary' ? '#FA4A0C':'#fff'}]}>
         {props.children}
        </Text> 
    </TouchableOpacity>
}


const styles=StyleSheet.create({
    btn:{
        borderColor:'black',
        paddingHorizontal:0,
        paddingVertical:20,
        borderRadius:50,
        backgroundColor:'#FA4A0C'
    },
    btnText:{
        alignSelf:'center',
        fontSize:18,
        color:'#fff',
        fontWeight:'500'
    }
})