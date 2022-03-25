// import { initializeApp } from 'firebase/app';

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;


import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjJMHmrVaTHLTOeiNGj52C9uHpG6vsPg0",
    authDomain: "bd-online-shop-3836f.firebaseapp.com",
    projectId: "bd-online-shop-3836f",
    storageBucket: "bd-online-shop-3836f.appspot.com",
    messagingSenderId: "302611886921",
    appId: "1:302611886921:web:1c773489af7248a893a098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;