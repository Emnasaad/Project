const admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://biblioproject-ceab5.firebaseio.com"
});
const db = admin.firestore();
module.exports= {admin,db};