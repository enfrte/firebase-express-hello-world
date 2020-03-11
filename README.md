# firebase-express-hello-world

A simple example and setup guide for using Firebase hosting and Express.

## About

This is some personal documentation for bootstrapping Firebase Cloud Functions. 

## How to do Firebase functions

Install firebase command line tools (globally). 

    npm install firebase-tools -g

Note, you also need to have node 8.13 or greater. 

Next log in to your firebase account (you should already have created one)

    firebase login

To make a new firebase app, first create a new app in the firebase site console https://console.firebase.google.com/  

Next create an app folder and inside it run 

    firebase init 

Select `functions` from the list, if for example, you just want to make some API calls. If you want hosting, select `functions` and `hosting` from the list provided. With hosting, you get scaffolding to create a home page to your app. 

Select the option 

    Use an existing project

from the list when prompted. Your projects should be listed. Select the project you want to use. This brings in your project files. The functions folder contains your JavaScript and node environment. In your root folder, `.firebaserc` identifies your app. `firebase.json` contains your firebase hosting settings. 

To test the default example locally, run 

    firebase serve

and launch the URL provided.

To deploy your app online, run 

    firebase deploy

Check your deployed code by going to https://console.firebase.google.com/ and select `Functions` `>` `Dashboard`. Copy and past the URL trigger and add the endpoint you want to test (if any). 

Functions can be as simple as 

    const functions = require('firebase-functions');

    // Create and Deploy Your First Cloud Function
    exports.test = functions.https.onRequest((request, response) => {
      response.send({message: 'hello'});
    });

but you can also use Express to create specific endpoints. See the repo example. 

Note, things like Express and Cors are included in the firebase-functions module build, so there is no need to add them as dependencies