/* global importScripts, firebase */

// IMPORTANT: this file must be at /firebase-messaging-sw.js (public root)

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

// Same config as in src/firebase.ts
firebase.initializeApp({
  apiKey: "AIzaSyAaTIr0hAshYZ9eR8JMbb4QpSKLfQVbMe4",
  authDomain: "nactive-health-e63d6.firebaseapp.com",
  projectId: "nactive-health-e63d6",
  storageBucket: "nactive-health-e63d6.firebasestorage.app",
  messagingSenderId: "201737362506",
  appId: "1:201737362506:web:6c5216d02a637a33ffdab3",
  measurementId: "G-JK57FT789E"
});

const messaging = firebase.messaging();

// Background messages (when the page is not in focus / browser closed)
messaging.onBackgroundMessage(function (payload) {
  const notification = payload.notification || {};
  const title = notification.title || "Background Message";
  const options = {
    body: notification.body || "",
    icon: "/favicon.ico",
    data: payload.data || {},
  };
  self.registration.showNotification(title, options);
});
