[Live Demonstration](https://res.cloudinary.com/df2q7cryi/video/upload/v1637880753/screen-capture_7_cvw4vq_d3eqjg.mkv) 

![alt text](https://res.cloudinary.com/df2q7cryi/image/upload/v1637880641/Untitledzz_oquxqi.png)
----------------------------------------






Create an Order in Server

curl  -X POST https://api.razorpay.com/v1/orders
-u <YOUR_KEY_ID>:<YOUR_SECRET>
-H 'content-type:application/json'
-d '{
    "amount": 50000,
    "currency": "INR",
    "receipt": "rcptid_11"
}'












In reponse you will receive order_id , this order_id you need to pass to checkoutScreen










<TouchableHighlight onPress={() => {
    var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: '<YOUR_KEY_ID>',
    amount: '5000',
    name: 'Acme Corp',
    order_id: '<ORDER_ID_FROM_SERVER>',//Replace this with an order_id created using Orders API.
    prefill: {
      email: 'gaurav.kumar@example.com',
      contact: '9191919191',
      name: 'Gaurav Kumar'
    },
    theme: {color: '#53a20e'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}}>



On Success you will reciev three parameters & store these in your database

{
  "razorpay_payment_id": "pay_29QQoUBi66xm2f",
  "razorpay_order_id": "order_9A33XWu170gUtm",
  "razorpay_signature": "9ef4dffbfd84f1318f6739a3ce19f9d85851857ae648f114332d8401e0949a3d"
}



Step 8: Verify Payment Signature🔗
This is a mandatory step that allows you to confirm the authenticity of the details returned to the Checkout form for successful payments.

To verify the razorpay_signature returned to you by the Checkout form:

Create a signature in your server using the following attributes:

order_id - Retrieve the order_id from your server. Do not use the razorpay_order_id returned by Checkout.
razorpay_payment_id - Returned by Checkout.
key_secret - Available in your server.
The key_secret that was generated from the Razorpay Dashboard.
Use the SHA256 algorithm, the razorpay_payment_id and the order_id to construct a HMAC hex digest as shown below:

generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

  if (generated_signature == razorpay_signature) {
    payment is successful
  }
If the signature you generate on your server matches the razorpay_signature returned to you by the Checkout form, the payment received is from an authentic source.
