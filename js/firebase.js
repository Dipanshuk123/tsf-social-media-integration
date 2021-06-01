var app_firebase = {};

// It's a Self-Invoking Function to Initialise Firebase
(() => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDOU35yKeiPfCYNAFdkWV9322P39mw-7Yw",
        authDomain: "tsf-social-media-integration.firebaseapp.com",
        projectId: "tsf-social-media-integration",
        storageBucket: "tsf-social-media-integration.appspot.com",
        messagingSenderId: "391535410711",
        appId: "1:391535410711:web:66d59c4184a0a1e34ae652"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
})()