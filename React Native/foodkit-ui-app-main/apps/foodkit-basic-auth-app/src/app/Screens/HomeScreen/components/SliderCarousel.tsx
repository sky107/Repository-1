import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import DropShadow from "react-native-drop-shadow";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { CustomText } from '@foodkit-workspace/shared-ui';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = (props:any) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (<DropShadow style={styles.shadowProp}>

      <TouchableOpacity onPress={props.handleCourseDetail} style={styles.item}>
        <ParallaxImage
          source={require('../../../assets/images/dish-image.png')}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
       
       <View style={{alignItems:'center'}}>
        <CustomText bold >Veggie</CustomText>
        <CustomText bold > tomato mix</CustomText>
        <CustomText bold primary style={{paddingTop:'5%'}}>N1,900</CustomText>
        </View>
      </TouchableOpacity>
              
    </DropShadow>
    );
  };


  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 180}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    // flex: 0.7,
    
  },
  item: {
    width: screenWidth - 200,
    height: screenWidth - 150,
    // borderWidth:1,

    borderRadius:50,
    marginTop:100,
    backgroundColor:'#fff'
  },
  imageContainer: {
    // flex: 1,
    alignSelf:'center',
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 200,
    height:140,
    width:140,
    top:-50
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',

  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  }
});