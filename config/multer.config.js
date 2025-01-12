const multer = require("multer");

const firebaseStorage = require("multer-firebase-storage");

const firebase = require("./firebase.config");

const serviceAccount = require("../drive-5629e-firebase-adminsdk-jre54-9ab0209e9f.json");

const storage = firebaseStorage({
  credentials: firebase.credential.cert(serviceAccount),
  bucketName: "drive-5629e.firebasestorage.app",
  unique:true
});


const upload=multer({
    storage:storage,
})

module.exports=upload;