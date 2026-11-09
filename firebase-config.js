/*
  firebase-config.js
  الملف الوحيد اللي بيربط تطبيق المستخدمين ولوحة الأدمن بـ Firebase.
  القيم دي مش سر، مقصود إنها تبان في الكود. الأمان كله في firestore.rules.
  خدها من: Firebase Console > Project settings > Your apps > Web app > Config
*/
window.SS_FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
