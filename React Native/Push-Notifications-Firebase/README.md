Hey all , Push notifications using google cloud messaging



<!-- [**Video**](https://res.cloudinary.com/df2q7cryi/video/upload/v1621796517/20210523_184915.mp4_vs78vm.mp4) -->



I have created a node server.js which makes connection with firebase using sdk provided in official docs to send notification title and body entered through cli and send push_notifications using FCM Token

To get the FCM Token I have writen code in React Native and in React Website separately by making suitatble changes. So the basic concept is Insted of adding a setTimeout call and listening to api end point for specifice end point let say 5000ms Push notification foraeds to Device address in realtime hence advantage over performance.


Procedure in React Web Application : npm i firebase --save | Createion of one fireabse.js for config variables | adding one service worker file inside public folder and conigureing sendersId inside it .usng messaging() feature we can use onmessge(), getToken(), etc functionsg

Procedure in React Native : Go to official firebase docs , follow the procedure for messaging() as given in docs , create a android app inside your firebase console project and go to cloud messaging in left menu add fcm token which you get during console.log(token) in application . You should store in firestore but for temporary we'll go with test.

FCM Token contains device address , from which app/ URL it was request and many more things






