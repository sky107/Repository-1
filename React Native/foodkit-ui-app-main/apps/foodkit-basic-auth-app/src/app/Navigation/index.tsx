import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './AuthNavigator/AuthNavigator';
import { LoggedInNavigator } from './LoggedInNavigator/LoggerInNavigator';

const Stack = createStackNavigator();


export function RootNavigator(){

    return <Stack.Navigator 
      screenOptions={{
                headerShown:false
            }}
            >
            <Stack.Screen name="Auth" component={AuthNavigator}
          
            />
            <Stack.Screen name="LoggedIn" component={LoggedInNavigator}/>
        </Stack.Navigator>
}