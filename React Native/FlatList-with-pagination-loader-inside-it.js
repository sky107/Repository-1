/*
Author : Siddharth Kumar Yadav
*/

import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [data, setData] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [end, setEnd] = React.useState(false);

  const BottomView = () => {
    return (
      <View>
        {isLoading ? (
          <View style={{ padding: 10, margin: 10 }}>
            <ActivityIndicator
              size="large"
              color="#F44336"
              style={{ marginLeft: 6 }}
            />
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        keyExtractor={(item, index) => index}
        data={data}
        onScrollEndDrag={() => console.log(' *********end')}
        onScrollBeginDrag={() => console.log(' *******start')}
        initialNumToRender={10}
        maxToRenderPerBatch={2}
        onEndReachedThreshold={0.1}
        onMomentumScrollBegin={() => {
          setEnd(false);
        }}
        onEndReached={() => {
          if (!end) {
            // on end reached
            setEnd(true);
            console.log('HI');
            setIsLoading(true);
            setTimeout(() => {
              setData([...data, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
              setIsLoading(false);
            }, 3000);
          }
        }}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              margin: 10,
              height: 200,
            }}>
            <Text style={{ color: 'red' }}> {item} </Text>
          </View>
        )}
        ListFooterComponent={BottomView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
