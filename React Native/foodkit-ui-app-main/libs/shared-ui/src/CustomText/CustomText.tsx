import {Text,StyleSheet} from 'react-native';






export const CustomText=(props:any)=>{

    const {bold,color,primary,fontType,type,style}=props;

    const handleSize=(type:string)=>{
        if(type=='h1')
        return 20;
        else if(type=='h2')
        return 18;
        else if(type=='heading')
        return 34;
        return 14;
    }


    let _style={
        fontWeight: bold && 'bold',
        color: primary && '#FA4A0C',
        fontSize: handleSize(type),
    };
    
    


    return <Text  style={[styles.baseStyle,_style,props.style]}>{props.children}</Text>

}

const styles=StyleSheet.create({
    baseStyle:{

    },
    
})
