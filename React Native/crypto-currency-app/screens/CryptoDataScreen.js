import React from 'react';
import { View, Text ,StyleSheet,ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from  '../components/Card';
import NavBar from  '../components/NavBar';
export default function componentName() {


  const [data,setData]=React.useState([]);


  React.useEffect(()=>{

    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=f0b56561-432a-4430-8dc0-c6baf11ff726&start=1&limit=10&convert=INR')
    .then(res=>res.json())
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));

  },[])








  return (
   <SafeAreaView>
<NavBar/>

    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    >
      {/* {
        [1,2,3].map(e=>(<Card key={`key-${e}`} />))
      } */}

</ScrollView>

<View style={{flexDirection:'row',justifyContent:'space-around'}}>
<Text style={styles.title}>
<Text>
  <Entypo name="bar-graph" size={22} />{" "}</Text>
  Cryptocurrency data</Text>
<Text style={styles.title}>
  <Text>
  <Ionicons name="ios-refresh-circle-outline" size={22} /></Text>
  Refresh</Text>
</View>
<FlatList
data={data}

renderItem={({index,item})=>{
const {percent_change_24h,percent_change_7d,market_cap}=item.quote.INR;
console.log(item);
  return <Card full key={index} name={item.name}  symbol={item.symbol} rank={item.cmc_rank} market_cap={market_cap} circulating_supply={item.circulating_supply} percent_change_24h={percent_change_24h} percent_change_7d={percent_change_7d} />
}}

/>





   </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  header:{
    // backgroundColor:'#ccc',
    padding:20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomColor:'#ccc',
    // borderBottomWidth:2
  },
  title:{
    fontSize:18,
    padding:10
  }
})
