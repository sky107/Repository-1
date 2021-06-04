import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View,Text,TextInput,Dimensions,Alert,AsyncStorage} from 'react-native';
//import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Item,Label,Input,Container, Toast,Header, Content,Footer,FooterTab,Badge,Button, Card,Spinner,Accordion,Left,Right,Tabs,Tab as TT, DatePicker,CardItem, Body,CheckBox,Icon } from 'native-base';


const Tab = createBottomTabNavigator();
const HomeScreen = ({navigation}) => {
const [check,setChecked]=React.useState(false);

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];


  return (
    <>
     <Container>

<Header androidStatusBarColor="black" style={{backgroundColor:'dodgerblue'}} hasTabs>
<Left>
<Icon name="menu" style={{fontSize: 30, color: 'white'}}/>
</Left>
<Body>
<Text style={{color:'white'}}>Notification</Text>
</Body>
<Right>
<Button style={{backgroundColor:'transparent'}} onPress={async()=>{await AsyncStorage.clear(); navigation.navigate('Login')}}>
<Icon name="exit" style={{fontSize: 30, color: 'white'}}/>
</Button>
</Right>
</Header>
<Tabs tabBarUnderlineStyle={{borderBottomWidth:2}}>
          <TT heading="Popular" tabStyle={{backgroundColor: 'dodgerblue'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'dodgerblue'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Text>HHDSLF <Icon name="camera"/></Text>

 <Text>HHDSLF <Icon name="navigate" color="green" /></Text>
</TT>
 <TT heading="Tab2" tabStyle={{backgroundColor: 'dodgerblue'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'dodgerblue'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            
 

</TT>
 <TT heading="Tab3" tabStyle={{backgroundColor: 'dodgerblue'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'dodgerblue'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            </TT>
 <TT heading="Tab4"tabStyle={{backgroundColor: 'dodgerblue'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'dodgerblue'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            </TT>
          </Tabs>

<Content >
<View style={{margin:10}}>
        <Button
 >
<Text style={{color:'white',paddingLeft:20,paddingRight:20}}>Wrong </Text>
</Button>

  <Button rounded iconLeft>
<Icon name="arrow-back" />
<Text style={{color:'white',paddingLeft:20,paddingRight:20}}>Padding </Text>
</Button>

<Button rounded iconRight large disabled>

<Text style={{color:'white',paddingLeft:20,paddingRight:20}}>Disabled </Text>
<Icon name="arrow-forward" />
</Button>
 <Button bordered warning block >
<Text style={{paddingLeft:20,paddingRight:20,color:'black'}}>Padding </Text>
</Button>

<Spinner color="dodgerblue"/>
 { [1,2,3,4,5,6,7,8,9,10].map(x=>  <Card key={x}>
            <CardItem bordered>
              <Body>
                <Text>
<CheckBox color="green" checked={check} onPress={()=>setChecked(!check)}/>
                  Hi hello how are youfjsdklfjj;fdsalkfja;sdflkja;sfdlkjads;f;fsalkdfj
                </Text>

              </Body>
            </CardItem>
          </Card>)

}
</View>
</Content>
    </Container>
    </>
  );
};

 class StatusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Header  androidStatusBarColor="black" >
<Text>sdlkfj</Text>
</Header>
        <Content>
          <Item floatingLabel>
              <Label>&nbsp;Email</Label>
              <Input/>
            </Item>
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
        </Content>
      </Container>
    );
  }
}

const ShareScreen = () => {
  return (
    <>
      <View >
        <Text >ShareScreen</Text>
      </View>
    </>
  );
};

const LoginScreen=(props)=>{
const [user,setUser]=React.useState({email:'',password:''});

  return (
    <>
      <Header/>
	<Body>
	
	<TextInput autoCapitalize="none" onChangeText={(e)=>setUser({...user,email:e}) } style={{borderWidth:2,borderColor:'#ccc',width:Dimensions.get('window').width-40,margin:10,marginLeft:20,marginRight:20}}/>
	<TextInput autoCapitalize="none" secureTextEntry onChangeText={(e)=>setUser({...user,password:e}) } style={{borderWidth:2,borderColor:'#ccc',width:Dimensions.get('window').width-40,margin:10,marginLeft:20,marginRight:20}}/>
	
	<Button block success onPress={()=>{
if(AsyncStorage.getItem('token')!==null){
props.navigation.navigate('Home')
}
	AsyncStorage.setItem('token',123)
.then(x=>console.log(x))
.catch(err=>console.log("ERROR",err))
	
		}}>
	<Text>Login</Text>
	</Button>
	</Body>
	<Footer>
	</Footer>
    </>
  );

}


const SettingsScreen = () => {
  return (
    <>
      <View >
        <Text >SettingsScreen</Text>

  <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    </>
  );
};
function MyTabs({navigation}) {
console.log("HERE",navigation);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bototm: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#eee',
          /* borderTopColor: 'transparent',  */
          height: 75,
        },
      }}>




      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center' }}>
             
              <Text>HOME</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settins"
        component={StatusScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center' }}>
             
              <Text
                >
                STATUS
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setti"
        component={ShareScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center' }}>
              
              <Text
               >
                SHARE
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center' }}>
              
              <Text
                >
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
 <Tab.Screen
        name="Login"
        component={LoginScreen}

options={{
        tabBarButton: () => null,
        tabBarVisible: false, // if you don't want to see the tab bar
      }}
      />
    </Tab.Navigator>
  );
}



const App = () => {
const [isauth,setIsAuth]=React.useState(false);

const token=null;

React.useEffect(async()=>{
 token=await AsyncStorage.getItem('token',()=>console.log("YES"))
},[])

return(<>
	
	
      {token!==null?<LoginScreen/>:
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>}

</>);
};
export default App;