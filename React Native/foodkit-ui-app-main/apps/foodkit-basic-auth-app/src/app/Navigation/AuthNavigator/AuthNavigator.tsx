import { createStackNavigator } from '@react-navigation/stack';
import HeartSvg from '../../assets/svgs/HeartSvg';
import HistorySvg from '../../assets/svgs/HistorySvg';
import HomeSvg from '../../assets/svgs/HomeSvg';
import UserSvg from '../../assets/svgs/UserSvg';
import LoginScreen from '../../Screens/AuthScreens/LoginScreen';
import { HomeScreen } from '../../Screens/HomeScreen/HomeScreen';
import { SplashScreen1 } from '../../Screens/SplashScreens/SplashScreen1';

const Stack = createStackNavigator();


export function AuthNavigator() {

    return <>
     <Stack.Navigator
     initialRouteName='SplashScreen'
      screenOptions={{
       headerShown:false
     }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen1} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
    </>
}