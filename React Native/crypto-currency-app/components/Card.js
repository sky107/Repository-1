import React from 'react';
import { View, Text,StyleSheet,Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import moment from 'moment';
const {height,width}=Dimensions.get('window');


export default function componentName({
    full=true,
    name,
    rank,
    market_cap,
    circulating_supply,
    percent_change_24h,
    percent_change_7d,
    symbol,
    createdAt,
    saved=false
}) {


    const handleSign=(s)=>{
        return s?.toString().substr(0,1)=='-' ? 'down' :'up';
    }

    const handleColor=(s)=>{
        return s?.toString().substr(0,1)=='-' ? 'red' :'green';
    }
   
  return (
    <View style={[styles.card,{width:full? width-20:width/2}]}>
        <View style={{justifyContent:'space-between',flexDirection:'row',borderBottomWidth:2,borderColor:'#ccc',paddingVertical:5}}>
        <Text>{name}</Text>
        <Text>{rank}</Text>
        </View>
        
        <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
       
        <View>
            <Text>Circulating Supply</Text>
            <Text>{parseFloat(circulating_supply)?.toFixed(1)} {symbol}</Text>
        </View>

        <View >
            <Text>Market Cap</Text>
            <Text>{parseFloat(market_cap)?.toFixed(1)} {symbol}</Text>
        </View>

        </View>

        <View style={{flexDirection:'row'}}>
            <View style={styles.chip}>
                <Text style={{color:handleColor(percent_change_24h)}}>
                <Ionicons name={`caret-${handleSign(percent_change_24h)}`} color={handleColor(percent_change_24h)} size={12}/>
                    {parseFloat(percent_change_24h)?.toFixed(2).toString().substr(1)}</Text>
                <Text style={{color:handleColor(percent_change_24h)}}> 24h %</Text>
            </View>
            <View style={styles.chip}>
                <Text style={{color:handleColor(percent_change_7d)}}>
                <Ionicons name={`caret-${handleSign(percent_change_7d)}`} color={handleColor(percent_change_7d)} size={12}/>
                    {parseFloat(percent_change_7d)?.toFixed(2).toString().substr(1)}</Text>
                <Text style={{color:handleColor(percent_change_7d)}}> 7d %</Text>
            </View>

           {!saved ? 
               <Button color="white" textColor="black"
               style={{
                   backgroundColor:'white',
                   borderRadius:5,
                   borderColor:'gray',
                   borderWidth:1
               }}>
               <Ionicons name="ios-bookmarks" color={"gray"} size={16} />{" "}Save Data</Button>
            : 

                <View>
                <Text style={{alignSelf:'flex-end'}}>Saved at</Text>
               <Text>{moment(createdAt).format("MMMM Do YYYY")}</Text>
               <Text style={{alignSelf:'flex-end'}}>{moment(createdAt).format("h:mm:ss a")}</Text>
                </View>
            
            }
        </View>

     </View>
  );
}

const styles=StyleSheet.create({
    card:{
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'#ccc',
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:5,
        padding:10
    },
    chip:{
        // backgroundColor:'green',
        paddingHorizontal:20,
        paddingVertical:5,
        // borderWidth:1,
        borderColor:'dogerblue',
        borderRadius:10,
        marginHorizontal:5
    }
})
