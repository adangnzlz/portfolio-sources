import * as functions from 'firebase-functions';
const request = require('request');
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello from Firebase!");
});

