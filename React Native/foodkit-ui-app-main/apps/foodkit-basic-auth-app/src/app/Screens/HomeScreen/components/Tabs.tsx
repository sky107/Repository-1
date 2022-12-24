import { CustomText } from "@foodkit-workspace/shared-ui";
import { ScrollView,Text,View,StyleSheet, TouchableOpacity} from "react-native";
import { colors } from "../../../constants/colors";


export default function Tabs(props:any){

    const {items,activeIndex,setActiveIndex}=props;

    return <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            items.map((item,index)=>{
                return <TouchableOpacity onPress={()=>setActiveIndex(index)} key={`tab-${index}`} style={[styles.tabStyle, activeIndex===index && styles.activeTabStyle]}>
                     <CustomText  style={{color:activeIndex===index ? colors.primary : colors.gray}} > {item}  </CustomText>   
                    </TouchableOpacity>
            })
            
        }
    </ScrollView>
}

const styles=StyleSheet.create({
    activeTabStyle:{
        borderColor:'red',
        borderBottomWidth:2
    },
    tabStyle:{
        paddingVertical:10,
        color:'#9A9A9D'
    }
})