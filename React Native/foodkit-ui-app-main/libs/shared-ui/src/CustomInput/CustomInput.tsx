import { TextInput,StyleSheet,View ,Text} from "react-native";











export function CustomInput(props:any){
    return <View style={styles.inputContainer}>
        <Text style={styles.labelStyle}>{props?.label}</Text>
            <TextInput  style={styles.inputStyle} {...props}/>
        </View>
}


const styles=StyleSheet.create({
        inputContainer:{
            marginVertical:'5%'
        },
        labelStyle:{
            color:'gray'
        },
        inputStyle:{
            borderBottomWidth:1,
            fontSize:16,
            paddingVertical:5,
            color:'black'
        }
    
})