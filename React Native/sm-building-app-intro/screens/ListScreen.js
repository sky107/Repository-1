import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Constants from 'expo-constants';
import ListCard from '.././components/ListCard';
import axios from 'axios';
import { IntroScreen } from '.././screens/IntroScreen';

export default function ListScreen() {
  const [listdata, setListData] = useState([]);
  const [loading, setLoading] = useState(true);

  let detail = [];

  axios
    .get(
      'http://playonnuat-env.eba-ernpdw3w.ap-south-1.elasticbeanstalk.com/api/v1/establishment/test/list?offset=0&limit=10'
    )
    .then((res) => {
      for (let key in res.data) {
        detail.push({
          ...res.data[key],
        });
      }
      setListData(detail);
      console.log(listdata);
    });

  return (
    <>
      <ScrollView style={{ marginTop: Constants.statusBarHeight }}>
        {listdata.map((result) => (
          <ListCard
            name={result.name}
            days={result.dayOfWeeksOpen}
            openTime={result.openTime}
            closeTime={result.closeTime}
            costPerSlot={result.costPerSlot}
            slotTimeSize={result.slotTimeSize}
            sport={result.sports}
            images={result.images}
          />
        ))}
      </ScrollView>
    </>
  );
}
