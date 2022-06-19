import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const DetailsScreen = ({ route }) => {
  const params = route.params || {};
  const { personId } = params;



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
      <Text>{personId}</Text>
    </View>
  );
};

export default DetailsScreen;
