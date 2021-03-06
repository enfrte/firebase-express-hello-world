'use strict';

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

// middleware
app.use(cors({ origin: true })); // Automatically allow cross-origin requests

// To test this route, add the route /test to the end of the exports url. So in this case, /api/test
app.get('/test', (req, res) => {
  console.log('View this message in Firebase console > Functions > Logs');
  return res.status(200).json({message:"Hellö Wörld"});
});

// http request
exports.api = functions.https.onRequest(app);
// you can export more http requests here too