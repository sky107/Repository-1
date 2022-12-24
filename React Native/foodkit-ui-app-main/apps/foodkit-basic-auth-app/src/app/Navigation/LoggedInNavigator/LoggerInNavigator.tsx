import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HeartSvg from '../../assets/svgs/HeartSvg';
import HistorySvg from '../../assets/svgs/HistorySvg';
import HomeSvg from '../../assets/svgs/HomeSvg';
import UserSvg from '../../assets/svgs/UserSvg';
import { HomeScreen } from '../../Screens/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();

export function LoggedInNavigator() {
  return (
    <Tab.Navigator  
    initialRouteName='Home'
    screenOptions={{
        headerShown:false,
        tabBarStyle:{
            backgroundColor:'#eee',
            // borderTopWidth:2,
            height:80
        }
    }}
    
    >

<Tab.Screen name="Home" component={HomeScreen}
    
    options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size,focused }) => (
           <HomeSvg focused={focused}/>
        )}}
        
         />


      <Tab.Screen name="Wishlist" component={HomeScreen}
    options={{
    tabBarLabel: '',
    tabBarIcon: ({ color, size,focused }) => (
       <HeartSvg focused={focused}/>
    )}}

      
      
      />
   
      <Tab.Screen name="Account" component={HomeScreen} 
      
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size,focused }) => (
           <UserSvg focused={focused}/>
        )}}
        
        />


      <Tab.Screen name="Orders" component={HomeScreen}
      
      
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size,focused }) => (
           <HistorySvg focused={focused}/>
        )}}
        
        />
    </Tab.Navigator>
  );
}