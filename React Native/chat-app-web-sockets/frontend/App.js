import React from 'react';
import {View,TextInput,StyleSheet,Text,Button,Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {io}from "socket.io-client";


const {width,height}=Dimensions.get('window');


class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      chatMessage: "",
   
      chatMessages: [{text:'hi',who:'me'}]
   };
}


componentDidMount() {
   this.socket = io("https://0a2f-157-34-7-23.ngrok.io");

   console.log(this.socket.connected);
    this.socket.on("chat message", msg => {
      console.log(this.socket.connected);
          this.setState({ chatMessages: [...this.state.chatMessages, {text:msg,who:'me'}]   
     });
  });
}

submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);

    console.log(this.socket.connected);
   
    this.setState({chatMessage: ''});
  }


render() {
    const chatMessages = this.state.chatMessages.map((chatMessage,i,arr )=> (
      <Text key={chatMessage} style={[styles.chatChip,{width:arr[arr.length-i-1].text.length*18},{backgroundColor:arr[arr.length-i-1].who=="me"?'dodgerblue':undefined,color:arr[arr.length-i-1].who=="me"?'white':undefined}]}>{arr[arr.length-i-1].text}</Text>
    ));



    return (

      <>

      <View style={styles.chatWidnow}>
      
       {chatMessages}

         
             </View>



      <View style={styles.footer} >
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder="Type here to send message..."
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({chatMessage});
          }}

      />
      <MaterialCommunityIcons name="send-circle" color="dodgerblue" size={45} />

      </View>




    </>
   );
  }

}

export default App;
const styles = StyleSheet.create({
  input:{
borderRadius:10,marginLeft:10,height:50,width:width-60,backgroundColor:'white',
backgroundColor:'#eee',
padding:5

  },
  container: {
       backgroundColor: 'dodgerblue',

  },
  chatChip:{
    backgroundColor:'#eee',
    color:'black',
    // width:100,
    fontSize:18,
    margin:5,
    padding:5,
    paddingLeft:10,
    marginTop:5,
    borderRadius:12,
    
  },
  chatWidnow:{
    backgroundColor:'white',flex:1,marginTop:40,
    flexDirection:'column-reverse'
  },
  footer:{
    backgroundColor:'white',
    flexDirection:'row',
    flex:0.2
  },
  lastSentMessage:{
    backgroundColor:'blue',
    marginLeft:width-100,
    marginRight:15,
    color:'white'
  }
});