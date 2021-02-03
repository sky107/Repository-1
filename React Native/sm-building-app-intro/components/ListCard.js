import * as React from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Text,View} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Images from './Images';

const cardcss={
  margin:'5%'
}
const daysarr=[]
const image = { uri: "https://playonn.s3.ap-south-1.amazonaws.com/basketball_gray.png" };
const ListCard = (props) => {


  return(
    <Card elevation={5} style={cardcss}>
 
    <Images paths={props.images} defaultimage={props.sport.iconBlackUrl} />

   
    <Card.Title title={props.name}   />
     
    <Card.Content>
    {<Text style={{}}>
      {props.days.map((res)=>res+" | ")}
    </Text>
    }
      <Paragraph>Timings :{props.openTime} to {props.closeTime} </Paragraph>
      <Paragraph>SlotTimeSize : {props.slotTimeSize} </Paragraph>
      <Paragraph>Cost Per Slot : {'\u20A8'}{props.costPerSlot}</Paragraph>
      
        <ImageBackground source={{uri:props.sport.iconBlackUrl}} style={{width: 100, height: 100,marginLeft:'80%',resizeMode:'contain',flex:1,position:'absolute'}}>
 </ImageBackground>  
       
    </Card.Content>
   
  
  </Card>
  );

 
}

export default ListCard;