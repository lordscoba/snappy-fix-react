// Firebase v9 modular setup for App + Analytics (optional) + Messaging
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as analyticsSupported } from "firebase/analytics";
import { getMessaging, getToken, onMessage, Messaging } from "firebase/messaging";

// --- Your Firebase config (from your message) ---
const firebaseConfig = {
  apiKey: "AIzaSyAaTIr0hAshYZ9eR8JMbb4QpSKLfQVbMe4",
  authDomain: "nactive-health-e63d6.firebaseapp.com",
  projectId: "nactive-health-e63d6",
  storageBucket: "nactive-health-e63d6.firebasestorage.app",
  messagingSenderId: "201737362506",
  appId: "1:201737362506:web:6c5216d02a637a33ffdab3",
  measurementId: "G-JK57FT789E"
};

// 🔑 VAPID key is required for Web Push token.
// Replace with your key from: Firebase Console → Project Settings → Cloud Messaging → Web configuration
const VAPID_KEY = "BJ5YM4MxhWuwvZgYaZw-P4KAl3b_4JnaNccxHHEDMMfAadmKZsnngkuOZfpoQkimXydm1i4nHZtwiVt-QV1eXbU";

export const app = initializeApp(firebaseConfig);

// Analytics is optional; guard to avoid errors in unsupported envs
export let analytics: ReturnType<typeof getAnalytics> | null = null;
analyticsSupported().then((ok) => {
  if (ok) analytics = getAnalytics(app);
});

// Messaging (guard in case browser doesn’t support it)
export let messaging: Messaging | null = null;
if (typeof window !== "undefined" && "Notification" in window) {
  try {
    messaging = getMessaging(app);
  } catch (e) {
    console.warn("Messaging not available:", e);
  }
}

// Helper: get FCM token for this browser
export async function getFcmToken(): Promise<string | null> {
  if (!messaging) return null;
  try {
    const swReg = await navigator.serviceWorker.getRegistration();
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: swReg ?? undefined
    });
    return token ?? null;
  } catch (e) {
    console.error("getFcmToken error:", e);
    return null;
  }
}

// Helper: foreground message listener
export function onForegroundMessage(cb: (payload: any) => void) {
  if (!messaging) return () => {};
  return onMessage(messaging, cb);
}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAaTIr0hAshYZ9eR8JMbb4QpSKLfQVbMe4",
//   authDomain: "nactive-health-e63d6.firebaseapp.com",
//   projectId: "nactive-health-e63d6",
//   storageBucket: "nactive-health-e63d6.firebasestorage.app",
//   messagingSenderId: "201737362506",
//   appId: "1:201737362506:web:6c5216d02a637a33ffdab3",
//   measurementId: "G-JK57FT789E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app, analytics }