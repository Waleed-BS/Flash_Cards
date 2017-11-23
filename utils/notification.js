import { AsyncStorage } from 'react-native'
import { Permissions, Notifications } from 'expo';

const NOTIFICATION_KEY = 'Flash_Cards:LocalNotifications';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    console.log("clearLocalNotification")
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
  console.log("setLocalNotification")
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();
              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              Notifications.scheduleLocalNotificationAsync(
                {
                  title: 'Reminder',
                  body: `Don't forget to complete a quiz.`
                },
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              );
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    })
}
