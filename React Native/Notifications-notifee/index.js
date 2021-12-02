import { AppRegistry } from 'react-native';
import notifee, { EventType } from '@notifee/react-native';
import App from './App';

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;

  // Check if the user pressed the "Mark as read" action
  if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
    // Update external API
    await fetch(`https://my-api.com/chat/${notification.data.chatId}/read`, {
      method: 'POST',
    });

    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});

// Register main application
AppRegistry.registerComponent('example', () => App);