 // Scripts for firebase and firebase messaging
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
    apiKey: "AIzaSyB2Wfuj1fVbxyhULlxO-11Dq17WHkdTtwI",
    authDomain: "push-notifications-5e701.firebaseapp.com",
    projectId: "push-notifications-5e701",
    storageBucket: "push-notifications-5e701.appspot.com",
    messagingSenderId: "120422302316",
    appId: "1:120422302316:web:97e72700d30cbf18b38e49",
    measurementId: "G-ECWL3Y757Q"
 };

 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });