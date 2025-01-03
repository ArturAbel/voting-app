/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addAdminRole = functions.https.onCall(async (data, context) => {
  // Verify the user making the request is an admin
  if (!context.auth || !context.auth.token.isAdmin) {
    throw new functions.https.HttpsError("permission-denied");
  }

  const {uid} = data;

  try {
    // Set custom claims for the specified user
    await admin.auth().setCustomUserClaims(uid, {isAdmin: true});
    return {message: `Success! ${uid} is now an admin.`};
  } catch (error) {
    throw new functions.https.HttpsError("unknown", error.message);
  }
});
