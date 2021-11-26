// import React from 'react';
// import {View,Button} from 'react-native';
// import notifee ,{ EventType}from '@notifee/react-native';



// export default ()=>{
//   async function onDisplayNotification() {
//     // Create a channel
//     const channelId = await notifee.createChannel({
//       id: 'default',
//       name: 'Default Channel',
//     });

//     // Display a notification
//     await notifee.displayNotification({
//       title: 'Notification Title',
//       body: 'Main body content of the notification',
//       android: {
//         channelId, // optional, defaults to 'ic_launcher'.
//       },
//     });
//   }


//   React.useEffect(() => {
//     return notifee.onForegroundEvent(({ type, detail }) => {
//       switch (type) {
//         case EventType.DISMISSED:
//           console.log('User dismissed notification', detail.notification);
//           break;
//         case EventType.PRESS:
//           console.log('User pressed notification', detail.notification);
//           break;
//       }
//     });
//   }, []);

//   return (
//     <View style={{marginTop:500}}>
//       <Button title="Display Notification" onPress={() => onDisplayNotification()} />
//     </View>
//   );
// }

import React from "react";
import { View, Button } from "react-native";
import notifee, { TimestampTrigger, TriggerType,AndroidStyle } from '@notifee/react-native';

export default ()=> {
var channelId:any;
  async function xx()
  {channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
}
xx();
  async function onCreateTriggerNotification() {

    

          notifee.displayNotification({
            title: '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
            subtitle: '&#129395;',
            body:
              'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
            android: {
              channelId,
              color: '#4caf50',
              actions: [
                {
                  title: '<b>Dance</b> &#128111;',
                  pressAction: { id: 'dance' },
                },
                {
                  title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
                  pressAction: { id: 'cry' },
                },
              ],
            },
          });

          notifee.displayNotification({
            title: 'Messages list',
            android: {
              channelId,
              style: {
                type: AndroidStyle.INBOX,
                lines: ['First Message', 'Second Message', 'Third Message', 'Forth Message'],
              },
            },
          });

          notifee.displayNotification({
            title: 'Image uploaded',
            body: 'Your image has been successfully uploaded',
            android: {
              channelId,
              style: { type: AndroidStyle.BIGPICTURE, picture: 'http://res.cloudinary.com/df2q7cryi/image/upload/795edad3d1796dc1672fca8578bc094f1610874528.png' },
            },
          });

          notifee.displayNotification({
            title: 'Sarah Lane',
            body: 'Great thanks, food later?',
            android: {
              channelId,
              style: {
                type: AndroidStyle.MESSAGING,
                person: {
                  name: 'John Doe',
                  icon: 'https://my-cdn.com/avatars/123.png',
                },
                messages: [
                  {
                    text: 'Hey, how are you?',
                    timestamp: Date.now() - 600000, // 10 minutes ago
                  },
                  {
                    text: 'Great thanks, food later?',
                    timestamp: Date.now(), // Now
                    person: {
                      name: 'Sarah Lane',
                      icon: 'https://my-cdn.com/avatars/567.png',
                    },
                  },
                ],
              },
            },
          });

          notifee.displayNotification({
            title: 'Image uploaded',
            body: 'Your image has been successfully uploaded',
            android: {
              channelId,
              style: { type: AndroidStyle.BIGTEXT, text: 'Large volume of text shown in the expanded state4545411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111' },
            },
          });

    const date = new Date(Date.now());
    date.setHours(6); // 24 hours me set karo aur date must be of futrue!!!
    date.setMinutes(39);

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime()+2000, // fire at 11:10am (10 minutes before meeting)
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
        android: {
          channelId:channelId
        },
      },
      trigger,
    );
  }

  return (
    <View style={{paddingTop:300}}>
      <Button title="SIDDHARTH KUMAR YADAV" onPress={() => onCreateTriggerNotification()} />
    </View>
  );
}