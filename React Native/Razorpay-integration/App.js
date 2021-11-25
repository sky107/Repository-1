import React from 'react';

import {Text, Pressable} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';

export default () => {
  return (
    <>
      <Pressable
        onPress={() => {

          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_4OsQGwqVKFGmzX', // Your api key
            amount: '800',
            name: 'foo',
            order_id: 'order_IQ0Od01oJRvoaA',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software',
            },
            theme: {color: '#F37254'},
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              console.log(data);
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}>
        <Text
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: 10,
            marginTop: 100,
            alignSelf: 'center',
          }}>
          PAY NOW{' '}
        </Text>
      </Pressable>
      <Text style={{alignSelf: 'center', color: 'black',marginTop:20}}>
        Creator : Siddharth Kumar Yadav
      </Text>
      <Text style={{alignSelf:'center'}}>Demonstration of RazorPay Integration in React Native</Text>
    </>
  );
};
