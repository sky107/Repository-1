import { CustomInput, CustomText, SearchInput } from '@foodkit-workspace/shared-ui';
import React, { useState } from 'react';
import {Text, View,SafeAreaView,StyleSheet } from 'react-native';
import CartSvg from '../../assets/svgs/CartSvg';
import HamburgerMenuSvg from '../../assets/svgs/HamburgerMenuSvg';
import SearchSvg from '../../assets/svgs/SearchSvg';
// import MyCarousel from './components/SliderCarousel';
import MyCarousel from './components/SliderCarousel';
import Tabs from './components/Tabs';
// import Carousel, {ParallaxImage} from 'react-native-snap-carousel';




const MENUS=['Foods','Drinks','Snacks','Foods','Drinks','Snacks','Foods','Drinks','Snacks']




export function HomeScreen(){


    const [activeIndex,setActiveIndex]=useState(0);



    return <SafeAreaView  style={{flexGrow:1}}>


    <View style={styles.container}>

    <View style={styles.headerContainer}>
    <HamburgerMenuSvg/>
    <CartSvg/>
    </View>

    <View>
        <CustomText type="heading" >Delicious </CustomText>
        <CustomText type="heading">food for you </CustomText>
    </View>
    

    <View>
        <SearchInput/>
     {/* <MyCarousel/> */}
    </View>


    <View style={styles.menuContainer}>
      <Tabs items={MENUS} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
    </View>


    <View>
        <MyCarousel/>
    </View>



    </View>



    </SafeAreaView>
}

const styles=StyleSheet.create({
    headerContainer:{
       flexDirection:'row',
       justifyContent:'space-between',
        marginTop:'5%',
        marginBottom:'5%'
    },
    container:{
        paddingHorizontal:'5%',
        backgroundColor:'#eee',
        flexGrow:1
    },
    menuContainer:{
        flexDirection:'row'
    },
    menuChip:{
        padding:10
    }

})