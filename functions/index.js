const express = require("express");
const cors = require("cors");

/**initialise express and cors */
const app = express();
app.use(cors());

/**initialize firebase app */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();



// POST / method
app.post("/", (req, res) => {
    const userDetail = req.body;
    return admin.database().ref("/userDetails").push(userDetail)
      .then(() => {
        return res.status(200).send(userDetail);
      })
      .catch(error => {
        console.error(error);
        return res.status(500).send("An error occured: " + error);
      });
  });

  exports.usersDetails = functions.https.onRequest(app);
  
