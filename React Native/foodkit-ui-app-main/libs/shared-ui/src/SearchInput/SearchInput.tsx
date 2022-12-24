import { TextInput,StyleSheet,View ,Text} from "react-native";
import SearchSvg from "./SearchSvg";


export function SearchInput(props:any){
    return <View style={styles.inputContainer}>
            <View style={styles.searchIcon}>
                <SearchSvg/>
                </View> 
            <TextInput placeholder="Search"  style={styles.inputStyle} {...props}/>
        </View>
}


const styles=StyleSheet.create({
        inputContainer:{
            marginVertical:'5%',
            marginHorizontal:'5%'
        },
        labelStyle:{
            color:'gray'
        },
        searchIcon:{
            top:'50%',
            zIndex:100,
            left:'2%'
        },
        inputStyle:{
            backgroundColor:'#EFEEEE',
            paddingHorizontal:'12%',
            paddingVertical:15,
            borderRadius:50,
            fontSize:16,
            color:'black'
        }
    
})