import React from 'react';
import { View, Text, StyleSheet, Pressable ,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar'
import Card from '../components/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { request } from '../services/APICentral'

const {height,width}=Dimensions.get('window');

export default function componentName() {


  const [data, setData] = React.useState([]);
  const [bit, setBit] = React.useState(false);
  const [loading,setLoading]=React.useState(false);

  React.useEffect(() => {
setLoading(true)
    request({
      url: `/user/saved-records?page=1`, method: 'GET'
    },
      true).then(res => {
        console.log(res.data.data);
        setData(res.data);
        setLoading(false)
      })
      .catch(err => {
        alert("ERROR", err)
        console.debug(err);
      })


  }, [bit])


  const CardSkeleton=()=>{

    return <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" width={200} marginTop={10}>
      
      <SkeletonPlaceholder.Item marginLeft={20}>
      
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={width-50}
          height={20}
          borderRadius={4}
        />
      
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={width-50}
          height={20}
          borderRadius={4}
        />
      
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={width-50}
          height={20}
          borderRadius={4}
        />
      
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
  }


  return (
    <SafeAreaView>
      <NavBar />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text style={styles.title}>Saved Data</Text>

        <Pressable onPress={()=>setBit(e=>!e)}>

        <Text style={styles.title}>



          <Text>
            <Ionicons name="ios-refresh-circle-outline" size={22} />
          </Text>
          Refresh</Text>
        </Pressable>


      </View>
      { !loading ? data?.data?.map((e ,i)=> {

        console.log(e);

        return <Card saved
          key={`card-${i}`}
          name={e.name}
          rank={e.cmc_rank}
          market_cap={e.market_cap}
          circulating_supply={e.circulating_supply}
          percent_change_24h={e.percent_change_24h}
          percent_change_7d={e.percent_change_7d}
          symbol={e.symbol}
          createdAt={e.createdAt}

        />

      })
      :
      [1,2,3,4,5,6,7,8].map(e=>{
        return <CardSkeleton key={e} />
      })
    
    }

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    padding: 10
  }
})



