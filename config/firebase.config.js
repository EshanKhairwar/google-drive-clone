const Firebase=require('firebase-admin')

const serviceAccount=require('../drive-5629e-firebase-adminsdk-jre54-9ab0209e9f.json')


const firebase=Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-5629e.firebasestorage.app'
})

module.exports = Firebase;